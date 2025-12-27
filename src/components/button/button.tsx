'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import * as ButtonPrimitive from '@/components/button';
import { cn } from '@/lib';

export const buttonVariants = cva(
  'relative z-0 inline-flex h-fit select-none items-center justify-center overflow-hidden text-center font-semibold leading-normal transition-all duration-75 ease-linear [font-family:var(--button-font-family,var(--font-family-body))]',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--button-brand-background,var(--foreground))] text-[var(--button-brand-text,var(--background))] hover:opacity-70',
        brand:
          'bg-[var(--button-brand-background,var(--brand))] text-[var(--button-brand-text,var(--foreground))] hover:opacity-70',
        outline:
          'border border-[var(--button-outline-border,var(--contrast-200))] bg-[var(--button-outline-background,var(--background))] text-[var(--button-outline-text,var(--foreground))] hover:bg-foreground/5',
        ghost:
          'bg-transparent text-[var(--button-ghost-text,var(--foreground))] hover:bg-foreground/5',
        danger:
          'bg-[var(--button-danger-background,var(--error))] text-[var(--button-danger-text,var(--background))] hover:opacity-70',
      },
      size: {
        'x-small': 'min-h-8 text-xs',
        small: 'min-h-9 text-sm',
        medium: 'min-h-11 text-base',
        large: 'min-h-14 text-base',
      },
      shape: {
        pill: 'rounded-full',
        rounded: '',
        square: 'rounded-none',
        circle: 'rounded-full',
      },
    },
    compoundVariants: [
      // Rounded shape uses size-specific border radius
      { shape: 'rounded', size: 'x-small', class: 'rounded-lg' },
      { shape: 'rounded', size: 'small', class: 'rounded-lg' },
      { shape: 'rounded', size: 'medium', class: 'rounded-xl' },
      { shape: 'rounded', size: 'large', class: 'rounded-xl' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'large',
      shape: 'pill',
    },
  },
);

export const buttonContentVariants = cva(
  'inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  {
    variants: {
      size: {
        'x-small': 'min-h-8 gap-x-2 px-3 py-1.5 text-xs',
        small: 'min-h-9 gap-x-2 px-3.5 py-2 text-sm',
        medium: 'min-h-11 gap-x-2.5 px-4 py-2.5 text-base',
        large: 'min-h-14 gap-x-3 px-5 py-4 text-base',
      },
      shape: {
        pill: '',
        rounded: '',
        square: '',
        circle: 'aspect-square p-0',
      },
    },
    defaultVariants: {
      size: 'large',
      shape: 'pill',
    },
  },
);

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loaderIcon?: {
      asChild?: boolean;
      children?: ReactNode;
    };
  };

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --button-focus: var(--brand);
 *   --button-font-family: var(--font-family-body);
 *   --button-brand-background: var(--brand);
 *   --button-brand-background-hover: color-mix(in oklab, var(--brand), white 75%);
 *   --button-brand-text: var(--foreground);
 *   --button-brand-border: var(--brand);
 *   --button-brand-background: var(--foreground);
 *   --button-brand-background-hover: var(--background);
 *   --button-brand-text: var(--background);
 *   --button-brand-border: var(--foreground);
 *   --button-outline-background: var(--background);
 *   --button-outline-background-hover: var(--contrast-100);
 *   --button-outline-text: var(--foreground);
 *   --button-outline-border: var(--contrast-200);
 *   --button-ghost-background: transparent;
 *   --button-ghost-background-hover: color-mix(in oklab, var(--foreground) 5%, transparent);
 *   --button-ghost-text: var(--foreground);
 *   --button-ghost-border: transparent;
 *   --button-loader-icon: var(--foreground);
 *   --button-danger-background: color-mix(in oklab, var(--error), white 30%);
 *   --button-danger-background-hover: color-mix(in oklab, var(--error), white 75%);
 *   --button-danger-text: var(--foreground);
 *   --button-danger-border: color-mix(in oklab, var(--error), white 30%);
 * }
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'large',
  shape = 'pill',
  loading = false,
  loaderIcon,
  type = 'button',
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      aria-busy={loading}
      className={cn(
        buttonVariants({ variant, size, shape }),
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus,var(--brand))]',
        // Disabled state
        'disabled:pointer-events-none disabled:opacity-30',
        // Loading state
        loading && 'pointer-events-none',
        className,
      )}
      data-slot="button"
      disabled={disabled}
      type={type}
      {...props}
    >
      <span
        className={cn(
          buttonContentVariants({ size, shape }),
          loading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'absolute inset-0 grid place-content-center transition-all duration-300 ease-in-out',
          loading ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
        )}
      >
        <ButtonPrimitive.LoaderIcon
          asChild={loaderIcon?.asChild}
          className={cn(
            variant === 'outline' && 'text-[var(--button-loader-icon,var(--foreground))]',
          )}
        >
          {loaderIcon?.children}
        </ButtonPrimitive.LoaderIcon>
      </span>
    </button>
  );
}
