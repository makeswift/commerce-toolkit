import type { ComponentProps } from 'react';

import { cn } from '@/lib';
export type ProductCardCompareProps = ComponentProps<'div'>;

export function ProductCardCompare({ className, children, ...props }: ProductCardCompareProps) {
  return (
    <div
      className={cn(
        'font-(family-name:--checkbox-font-family,var(--font-family-body)) flex shrink-0 items-center gap-2',
        className,
      )}
      data-slot="product-card-compare"
      {...props}
    >
      {children}
    </div>
  );
}
