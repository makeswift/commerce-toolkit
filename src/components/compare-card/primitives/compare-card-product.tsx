import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardProductProps = ComponentProps<'div'>;

export function CompareCardProduct({ children, className, ...props }: CompareCardProductProps) {
  return (
    <div
      className={cn('mb-2 space-y-4 pb-4', className)}
      data-slot="compare-card-product"
      {...props}
    >
      {children}
    </div>
  );
}
