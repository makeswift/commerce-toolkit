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
              fontFamily: 'var(--font-family-heading)',
            },
            h2: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family-heading)',
            },
            h3: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family-heading)',
            },
            h4: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family-heading)',
            },
            h5: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family-heading)',
            },
            h6: {
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family-heading)',
            },
            p: {
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-family-body)',
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
              fontFamily: 'var(--font-family-body)',
            },
            ol: {
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-family-body)',
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
              fontFamily: 'var(--font-family-mono)',
            },
            pre: {
              color: 'var(--background)',
              backgroundColor: 'var(--foreground)',
              fontFamily: 'var(--font-family-mono)',
            },
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: 'oklch(var(--primary-lch) / <alpha-value>)',
          background: 'oklch(var(--primary-background-lch) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground-lch) / <alpha-value>)',
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
        heading: [
          'var(--font-family-heading)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-heading)',
            fontVariationSettings: 'var(--font-variation-settings-heading)',
          },
        ],
        body: [
          'var(--font-family-body)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-body)',
            fontVariationSettings: 'var(--font-variation-settings-body)',
          },
        ],
        mono: [
          'var(--font-family-mono)',
          {
            fontFeatureSettings: 'var(--font-feature-settings-mono)',
            fontVariationSettings: 'var(--font-variation-settings-mono)',
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
      },
      animation: {
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
      },
    },
  },
  plugins: [animate, containerQueries, typography],
};
