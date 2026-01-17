import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardTermProps = ComponentProps<'dt'>;

export function CompareCardTerm({ children, className, ...props }: CompareCardTermProps) {
  return (
    <dt className={cn('font-semibold', className)} data-slot="compare-card-term" {...props}>
      {children}
    </dt>
  );
}
