import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

const spinnerVariants = cva(
  'box-border inline-block animate-spin rounded-full border-[var(--spinner-base,var(--contrast-100))] [border-bottom-color:var(--spinner-ring,color-mix(in_oklab,var(--brand),black_75%))]',
  {
    variants: {
      size: {
        xs: 'size-5 border-2',
        sm: 'size-6 border-2',
        md: 'size-10 border-[3px]',
        lg: 'size-14 border-4',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

export type SpinnerProps = ComponentProps<'span'> & VariantProps<typeof spinnerVariants>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --spinner-base: var(--contrast-100);
 *   --spinner-ring: color-mix(in oklab, var(--brand), black 75%);
 * }
 * ```
 */
export function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <span
      aria-label="Loading..."
      className={cn(spinnerVariants({ size }), className)}
      data-slot="spinner"
      role="status"
      {...props}
    />
  );
}
