import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSectionProps = ComponentProps<'div'>;

export function CompareCardSection({ className, children, ...props }: CompareCardSectionProps) {
  return (
    <div className={cn('space-y-4 py-4', className)} data-slot="compare-card-section" {...props}>
      {children}
    </div>
  );
}
