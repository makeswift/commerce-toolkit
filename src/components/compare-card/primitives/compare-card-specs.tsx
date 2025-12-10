import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSpecsProps = ComponentProps<'div'>;

export function CompareCardSpecs({ className, children, ...props }: CompareCardSpecsProps) {
  return (
    <div className={cn('space-y-4 py-4', className)} data-slot="compare-card-specs" {...props}>
      {children}
    </div>
  );
}
