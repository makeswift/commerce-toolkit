import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Components with primitives that need separate entry points
const primitiveComponents = [
  'accordion',
  'alert',
  'banner',
  'blog-post-card',
  'card',
  'carousel',
  'checkbox',
  'chip',
  'compare-drawer',
  'cursor-pagination',
  'dropdown-menu',
  'favorite',
  'icon',
  'logo',
  'modal',
  'product-card',
  'price',
  'rating',
  'reveal',
  'scroll-area',
  'skeleton',
  'tabs',
];

// Build entry points object
const entry = {
  index: path.resolve(dirname, 'src/index.ts'),
};

// Add primitive component entries
primitiveComponents.forEach((component) => {
  entry[component] = path.resolve(dirname, `src/components/${component}/primitives.ts`);
});

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
