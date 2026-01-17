import type { Config } from 'tailwindcss';
import preset from './tailwind.preset.js';

export default {
  presets: [preset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '.storybook/**/*.{js,ts,jsx,tsx}'],
} satisfies Config;
