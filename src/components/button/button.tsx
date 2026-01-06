'use client';

import { Loader2 } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'brand' | 'outline' | 'ghost' | 'danger';
  size?: 'large' | 'medium' | 'small' | 'x-small';
  shape?: 'pill' | 'rounded' | 'square' | 'circle';
  loading?: boolean;
}

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
        'relative z-0 inline-flex h-fit select-none items-center justify-center overflow-hidden text-center font-semibold leading-normal transition-all duration-75 ease-linear [font-family:var(--button-font-family,var(--font-family-body))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus,var(--brand))] disabled:pointer-events-none disabled:opacity-30',
        {
          brand:
            'bg-[var(--button-brand-background,var(--brand))] text-[var(--button-brand-text,var(--foreground))] hover:opacity-70',
          primary:
            'bg-[var(--button-brand-background,var(--foreground))] text-[var(--button-brand-text,var(--background))] hover:opacity-70',
          outline:
            'border border-[var(--button-outline-border,var(--contrast-200))] bg-[var(--button-outline-background,var(--background))] text-[var(--button-outline-text,var(--foreground))] hover:bg-foreground/5',
          ghost:
            'bg-transparent text-[var(--button-ghost-text,var(--foreground))] hover:bg-foreground/5',
          danger:
            'bg-[var(--button-danger-background,var(--error))] text-[var(--button-danger-text,var(--background))] hover:opacity-70',
        }[variant],
        shape === 'rounded'
          ? {
              'x-small': 'rounded-lg',
              small: 'rounded-lg',
              medium: 'rounded-xl',
              large: 'rounded-xl',
            }[size]
          : {
              pill: 'rounded-full',
              square: 'rounded-none',
              circle: 'rounded-full',
            }[shape],
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
          'inline-flex items-center justify-center transition-all duration-300 ease-in-out',
          loading ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
          shape === 'circle' && 'aspect-square',
          {
            'x-small': 'min-h-8 text-xs',
            small: 'min-h-9 text-sm',
            medium: 'min-h-11 text-base',
            large: 'min-h-14 text-base',
          }[size],
          shape !== 'circle' &&
            {
              'x-small': 'gap-x-2 px-3 py-1.5',
              small: 'gap-x-2 px-3.5 py-2',
              medium: 'gap-x-2.5 px-4 py-2.5',
              large: 'gap-x-3 px-5 py-4',
            }[size],
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
        <Loader2
          className={cn(
            'animate-spin',
            variant === 'outline' && 'text-[var(--button-loader-icon,var(--foreground))]',
          )}
        />
      </span>
    </button>
  );
}
