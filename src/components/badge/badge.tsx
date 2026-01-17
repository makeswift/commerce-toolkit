import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export const badgeVariants = cva(
  'border border-black/10 px-2 py-1 text-xs font-semibold text-[--badge-text,var(--text-primary)] antialiased [font-family:--badge-font,var(--font-body)]',
  {
    variants: {
      shape: {
        pill: 'rounded-full',
        rounded: 'rounded',
      },
      variant: {
        brand: 'bg-[--badge-brand-fill,var(--brand-background)]',
        warning: 'bg-[--badge-warning-fill,var(--warning-background)]',
        error: 'bg-[--badge-error-fill,var(--error-background)]',
        success: 'bg-[--badge-success-fill,var(--success-background)]',
        info: 'bg-[--badge-info-fill,var(--background)]',
      },
    },
    defaultVariants: {
      shape: 'rounded',
      variant: 'brand',
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
 *   --badge-fill-brand: color-mix(in oklab, var(--brand), white 75%);
 *   --badge-fill-success: color-mix(in oklab, var(--success), white 75%);
 *   --badge-fill-warning: color-mix(in oklab, var(--warning), white 75%);
 *   --badge-fill-error: color-mix(in oklab, var(--error), white 75%);
 *   --badge-fill-info: color-mix(in oklab, var(--info), white 75%);
 *   --badge-text: var(--foreground);
 *   --badge-font: var(--font-body);
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
