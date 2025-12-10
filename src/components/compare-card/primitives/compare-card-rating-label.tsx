import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardRatingLabelProps = ComponentProps<'p'>;

export function CompareCardRatingLabel({
  children,
  className,
  ...props
}: CompareCardRatingLabelProps) {
  return (
    <p
      className={cn(
        'font-[family-name:var(--compare-card-font-family-secondary,var(--font-family-mono))] text-xs font-normal uppercase text-[var(--compare-card-label,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="compare-card-rating-label"
      {...props}
    >
      {children}
    </p>
  );
}
