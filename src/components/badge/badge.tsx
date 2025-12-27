import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export const badgeVariants = cva(
  'border border-black/10 px-2 py-1 text-xs font-semibold text-[var(--badge-text,var(--text-brand))] antialiased [font-family:var(--badge-font-family,var(--font-family-body))]',
  {
    variants: {
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded',
      },
      variant: {
        primary: 'bg-[var(--badge-brand-background,var(--brand-background))]',
        warning: 'bg-[var(--badge-warning-background,var(--warning-background))]',
        error: 'bg-[var(--badge-error-background,var(--error-background))]',
        success: 'bg-[var(--badge-success-background,var(--success-background))]',
        info: 'bg-[var(--badge-info-background,var(--background))]',
      },
    },
    defaultVariants: {
      shape: 'rounded',
      variant: 'primary',
    },
  },
);

export type BadgeProps = ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    children: string;
  };

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --badge-brand-background: color-mix(in oklab, var(--brand), white 75%);
 *   --badge-success-background: color-mix(in oklab, var(--success), white 75%);
 *   --badge-warning-background: color-mix(in oklab, var(--warning), white 75%);
 *   --badge-error-background: color-mix(in oklab, var(--error), white 75%);
 *   --badge-info-background: color-mix(in oklab, var(--info), white 75%);
 *   --badge-text: var(--foreground);
 *   --badge-font-family: var(--font-family-body);
 * }
 * ```
 */
export function Badge({ children, shape, variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ shape, variant }), className)} data-slot="badge" {...props}>
      {children}
    </span>
  );
}
