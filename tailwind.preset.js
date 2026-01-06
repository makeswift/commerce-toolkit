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
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-heading)',
            },
            h2: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-heading)',
            },
            h3: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-heading)',
            },
            h4: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-heading)',
            },
            h5: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-heading)',
            },
            h6: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-heading)',
            },
            p: {
              color: 'hsl(var(--foreground))',
              fontFamily: 'var(--font-family-body)',
            },
            a: {
              color: 'color-mix(in oklab, hsl(var(--primary)), black 15%)',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            img: {
              borderRadius: '1rem',
            },
            ul: {
              color: 'hsl(var(--contrast-500))',
              fontFamily: 'var(--font-family-body)',
            },
            ol: {
              color: 'hsl(var(--contrast-500))',
              fontFamily: 'var(--font-family-body)',
            },
            strong: {
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--contrast-300))',
              p: {
                color: 'hsl(var(--contrast-500))',
                fontStyle: 'normal',
                fontWeight: '400',
              },
            },
            code: {
              color: 'hsl(var(--contrast-500))',
              fontFamily: 'var(--font-family-mono)',
            },
            pre: {
              color: 'hsl(var(--background))',
              backgroundColor: 'hsl(var(--foreground))',
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
          background: 'oklch(var(--success-background-lch) / <alpha-value>)',
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
      fontSize: {
        xs: 'var(--font-size-xs, 0.75rem)',
        sm: 'var(--font-size-sm, 0.875rem)',
        base: 'var(--font-size-base, 1rem)',
        lg: 'var(--font-size-lg, 1.125rem)',
        xl: 'var(--font-size-xl, 1.25rem)',
        '2xl': 'var(--font-size-2xl, 1.5rem)',
        '3xl': 'var(--font-size-3xl, 1.875rem)',
        '4xl': 'var(--font-size-4xl, 2.25rem)',
        '5xl': 'var(--font-size-5xl, 3rem)',
        '6xl': 'var(--font-size-6xl, 3.75rem)',
        '7xl': 'var(--font-size-7xl, 4.5rem)',
        '8xl': 'var(--font-size-8xl, 6rem)',
        '9xl': 'var(--font-size-9xl, 8rem)',
      },
      shadows: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
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
        'marching-ants': {
          to: {
            'background-position':
              '0 0, 0 -1px, calc(100% + 1px) 0, 100% calc(100% + 1px), -1px 100%',
          },
        },
        rotateFade: {
          from: { opacity: '1', transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)' },
          '35%': { opacity: '0' },
          '70%': { opacity: '0' },
          to: { opacity: '1', transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)' },
        },
        rotate: {
          from: {
            transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)',
          },
          to: {
            transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)',
          },
        },
        scroll: {
          to: { backgroundPosition: '5px 0' },
        },
        dotScrollSmall: {
          to: { backgroundPosition: '-6px -6px, -12px -12px' },
        },
        dotScrollLarge: {
          to: { backgroundPosition: '-8px -8px, -16px -16px' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(1px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-2px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(2px, 0, 0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        marching: 'marching-ants 10s linear infinite',
        rotate: 'rotate 2000ms linear infinite',
        scroll: 'scroll 200ms infinite linear both',
        scrollLeft: 'scrollLeft var(--marquee-duration) linear infinite',
        shake: 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        slideIn: 'slideIn 800ms cubic-bezier(0.25, 1, 0, 1)',
      },
    },
  },
  plugins: [animate, containerQueries, typography],
};
