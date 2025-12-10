import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(dirname, 'src/components');

// Auto-discover components with primitives.ts files
const primitiveComponents = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .filter((dirent) => fs.existsSync(path.join(componentsDir, dirent.name, 'primitives.ts')))
  .map((dirent) => dirent.name);

// Build entry points object
const entry = {
  index: path.resolve(dirname, 'src/index.ts'),
  ...Object.fromEntries(
    primitiveComponents.map((component) => [
      component,
      path.resolve(dirname, `src/components/${component}/primitives.ts`),
    ]),
  ),
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    lib: {
      entry,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs';
        return `${entryName}.${ext}`;
      },
    },
    cssCodeSplit: false,
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        // Preserve module structure for better tree-shaking
        preserveModules: false,
      },
    },
    // Generate sourcemaps for easier debugging
    sourcemap: true,
    // Clear the output directory before building
    emptyOutDir: true,
  },
});
