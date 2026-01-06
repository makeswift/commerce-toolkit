import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BadgeProps = ComponentProps<'span'> & {
  children: string;
  shape?: 'pill' | 'rounded';
  variant?: 'primary' | 'warning' | 'error' | 'success' | 'info';
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --badge-primary-background: color-mix(in oklab, var(--primary), white 75%);
 *   --badge-success-background: color-mix(in oklab, var(--success), white 75%);
 *   --badge-warning-background: color-mix(in oklab, var(--warning), white 75%);
 *   --badge-error-background: color-mix(in oklab, var(--error), white 75%);
 *   --badge-info-background: color-mix(in oklab, var(--info), white 75%);
 *   --badge-text: var(--foreground);
 *   --badge-font-family: var(--font-family-body);
 * }
 * ```
 */
export function Badge({
  children,
  shape = 'rounded',
  className,
  variant = 'primary',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'border border-black/10 px-2 py-1 text-xs font-semibold text-[var(--badge-text,var(--text-primary))] antialiased [font-family:var(--badge-font-family,var(--font-family-body))]',
        {
          pill: 'rounded-full',
          rounded: 'rounded-md',
        }[shape],
        {
          primary: 'bg-[var(--badge-primary-background,var(--primary-background))]',
          warning: 'bg-[var(--badge-warning-background,var(--warning-background))]',
          error: 'bg-[var(--badge-error-background,var(--error-background))]',
          success: 'bg-[var(--badge-success-background,var(--success-background))]',
          info: 'bg-[var(--badge-info-background,var(--background))]',
        }[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
