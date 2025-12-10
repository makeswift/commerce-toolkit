import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardRatingProps = ComponentProps<'div'>;

export function CompareCardRating({ children, className, ...props }: CompareCardRatingProps) {
  return (
    <div className={cn('space-y-4 py-4', className)} data-slot="compare-card-rating" {...props}>
      {children}
    </div>
  );
}
