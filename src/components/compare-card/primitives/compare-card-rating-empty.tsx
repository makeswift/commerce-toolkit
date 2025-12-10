import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardRatingEmptyProps = ComponentProps<'p'>;

export function CompareCardRatingEmpty({
  children,
  className,
  ...props
}: CompareCardRatingEmptyProps) {
  return (
    <p
      className={cn(
        'text-sm text-[var(--compare-card-description,hsl(var(--contrast-400)))]',
        className,
      )}
      data-slot="compare-card-rating-empty"
      {...props}
    >
      {children}
    </p>
  );
}
