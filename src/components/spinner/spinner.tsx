import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface SpinnerProps extends ComponentProps<'span'> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

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
export function Spinner({ className, size = 'sm', ...props }: SpinnerProps) {
  return (
    <span
      aria-label="Loading..."
      className={cn(
        'box-border inline-block animate-spin rounded-full border-[var(--spinner-base,var(--contrast-100))] [border-bottom-color:var(--spinner-ring,color-mix(in_oklab,var(--brand),black_75%))]',
        {
          xs: 'h-5 w-5 border-2',
          sm: 'h-6 w-6 border-2',
          md: 'h-10 w-10 border-[3px]',
          lg: 'h-14 w-14 border-4',
        }[size],
        className,
      )}
      role="status"
      {...props}
    />
  );
}
