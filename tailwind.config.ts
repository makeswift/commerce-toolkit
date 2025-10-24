import type { Config } from 'tailwindcss';
import preset from './tailwind.preset.js';

export default {
  presets: [preset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', '.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'heart-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'heart-pulse': 'heart-pulse 0.75s forwards',
      },
    },
  },
} satisfies Config;
