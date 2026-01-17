'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import * as ButtonPrimitive from '@/components/button';
import { cn } from '@/lib';

export const buttonVariants = cva(
  'relative z-0 inline-flex h-fit select-none items-center justify-center overflow-hidden text-center transition-all duration-75 ease-linear [font-family:var(--button-font,var(--font-body))] focus-primary group disabled:pointer-events-none disabled:opacity-30 aria-busy:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[--button-fill-primary,var(--foreground)] text-[--button-text-primary,var(--text-inverse)] hover:opacity-70',
        brand:
          'bg-[--button-fill-brand,var(--brand)] text-[--button-text-brand,var(--text-primary)] hover:opacity-70',
        outline:
          'border border-[--button-stroke-outline,var(--border)] bg-[--button-fill-outline,var(--background)] text-[--button-text-outline,var(--text-primary)] hover:bg-[color-mix(in_oklch,var(--fill-hover,var(--contrast-100))_80%,transparent)]',
        ghost:
          'bg-transparent text-[--button-text-ghost,var(--text-primary)] hover:bg-[color-mix(in_oklch,var(--fill-hover,var(--contrast-100))_80%,transparent)]',
        danger:
          'bg-[--button-fill-danger,var(--error)] text-[--button-danger-text,var(--text-inverse)] hover:opacity-70',
      },
      size: {
        '2x-small': 'min-h-5',
        'x-small': 'min-h-8',
        small: 'min-h-9',
        medium: 'min-h-11',
        large: 'min-h-14',
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
      { shape: 'rounded', size: '2x-small', class: 'rounded-md' },
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
  'inline-flex font-semibold items-center justify-center transition-all duration-300 ease-in-out translate-y-0 opacity-100 group-aria-busy:-translate-y-full group-aria-busy:opacity-0',
  {
    variants: {
      size: {
        '2x-small': 'min-h-5 gap-x-1.5 px-2 py-1 text-xs',
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
 *   --button-font:          var(--font-body);
 *   --button-fill-primary:  var(--foreground);
 *   --button-text-primary:  var(--text-inverse);
 *   --button-fill-brand:    var(--brand);
 *   --button-text-brand:    var(--text-brand);
 *   --button-fill-outline:  var(--background);
 *   --button-text-outline:  var(--text-primary);
 *   --button-stroke-outline: var(--border);
 *   --button-text-ghost:    var(--text-primary);
 *   --button-fill-danger:   var(--error);
 *   --button-text-danger:   var(--text-inverse);
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
      className={cn(buttonVariants({ variant, size, shape }), className)}
      data-slot="button"
      disabled={disabled}
      type={type}
      {...props}
    >
      <span className={cn(buttonContentVariants({ size, shape }))}>{children}</span>
      <span className="absolute inset-0 grid translate-y-full place-content-center opacity-0 transition-all duration-300 ease-in-out group-aria-busy:translate-y-0 group-aria-busy:opacity-100">
        <ButtonPrimitive.LoaderIcon asChild={loaderIcon?.asChild}>
          {loaderIcon?.children}
        </ButtonPrimitive.LoaderIcon>
      </span>
    </button>
  );
}
