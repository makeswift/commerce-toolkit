import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSpecsTermProps = ComponentProps<'dt'>;

export function CompareCardSpecsTerm({ children, className, ...props }: CompareCardSpecsTermProps) {
  return (
    <dt className={cn('font-semibold', className)} data-slot="compare-card-specs-term" {...props}>
      {children}
    </dt>
  );
}
