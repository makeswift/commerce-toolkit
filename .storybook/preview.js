import '../src/globals.css';
import './preview.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Components'],
        method: 'alphabetical',
      },
    },
    viewport: {
      viewports: {
        xs: {
          name: 'XS (< 640px)',
          styles: { width: '375px', height: '667px' },
        },
        sm: {
          name: 'SM (640px)',
          styles: { width: '640px', height: '800px' },
        },
        md: {
          name: 'MD (768px)',
          styles: { width: '768px', height: '1024px' },
        },
        lg: {
          name: 'LG (1024px)',
          styles: { width: '1024px', height: '768px' },
        },
        xl: {
          name: 'XL (1280px)',
          styles: { width: '1280px', height: '800px' },
        },
        '2xl': {
          name: '2XL (1536px)',
          styles: { width: '1536px', height: '960px' },
        },
      },
    },
  },
};

export default preview;
