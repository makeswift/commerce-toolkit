import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardDetailsProps = ComponentProps<'div'>;

export function ProductCardDetails({ children, className, ...props }: ProductCardDetailsProps) {
  return (
    <div
      className={cn('mt-2 flex-1 px-1 @xs:mt-3', className)}
      data-slot="product-card-details"
      {...props}
    >
      {children}
    </div>
  );
}
