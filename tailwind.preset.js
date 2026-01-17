import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      aria: {
        invalid: 'invalid="true"',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
            },
            h2: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
            },
            h3: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
            },
            h4: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
            },
            h5: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
            },
            h6: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
            },
            p: {
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
            },
            a: {
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            img: {
              borderRadius: '1rem',
            },
            ul: {
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
            },
            ol: {
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
            },
            strong: {
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: 'var(--contrast-300)',
              p: {
                color: 'var(--text-secondary)',
                fontStyle: 'normal',
                fontWeight: '400',
              },
            },
            code: {
              color: 'var(--contrast-500)',
              fontFamily: 'var(--font-body)',
            },
            pre: {
              color: 'var(--background)',
              backgroundColor: 'var(--foreground)',
              fontFamily: 'var(--font-body)',
            },
          },
        },
      },
      colors: {
        brand: {
          DEFAULT: 'oklch(var(--brand-lch) / <alpha-value>)',
          background: 'oklch(var(--brand-background-lch) / <alpha-value>)',
          foreground: 'oklch(var(--brand-foreground-lch) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'oklch(var(--success-lch) / <alpha-value>)',
          background: 'oklch(from var(--success-lch) 0.97 0.02 h / <alpha-value>)',
          foreground: 'oklch(var(--success-foreground-lch) / <alpha-value>)',
        },
        error: {
          DEFAULT: 'oklch(var(--error-lch) / <alpha-value>)',
          background: 'oklch(var(--error-background-lch) / <alpha-value>)',
          foreground: 'oklch(var(--error-foreground-lch) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'oklch(var(--warning-lch) / <alpha-value>)',
          background: 'oklch(var(--warning-background-lch) / <alpha-value>)',
          foreground: 'oklch(var(--warning-foreground-lch) / <alpha-value>)',
        },
        background: 'oklch(var(--background-lch) / <alpha-value>)',
        foreground: 'oklch(var(--foreground-lch) / <alpha-value>)',
        contrast: {
          100: 'oklch(var(--contrast-100-lch) / <alpha-value>)',
          200: 'oklch(var(--contrast-200-lch) / <alpha-value>)',
          300: 'oklch(var(--contrast-300-lch) / <alpha-value>)',
          400: 'oklch(var(--contrast-400-lch) / <alpha-value>)',
          500: 'oklch(var(--contrast-500-lch) / <alpha-value>)',
        },
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '-0.01em',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.01em',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '2rem',
          },
        ],
        '4xl': [
          '2.5rem',
          {
            lineHeight: '2.75rem',
            letterSpacing: '-0.01em',
          },
        ],
        '5xl': [
          '3rem',
          {
            lineHeight: '3.25rem',
            letterSpacing: '-0.01em',
          },
        ],
        '6xl': [
          '3.75rem',
          {
            lineHeight: '4rem',
            letterSpacing: '-0.01em',
          },
        ],
        '7xl': [
          '4.5rem',
          {
            lineHeight: '1',
            letterSpacing: '-0.02em',
          },
        ],
        '8xl': [
          '6rem',
          {
            lineHeight: '1',
            letterSpacing: '-0.02em',
          },
        ],
      },
      keyframes: {
        collapse: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        expand: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'heart-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        'heart-pulse': 'heart-pulse 0.75s forwards',
      },
    },
  },
  plugins: [animate, containerQueries, typography],
};
