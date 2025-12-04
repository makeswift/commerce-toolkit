import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardDetailsProps = ComponentProps<'div'>;

export function ProductCardDetails({ children, className, ...props }: ProductCardDetailsProps) {
  return (
    <div
      className={cn(
        'mt-2 flex flex-col items-start gap-x-4 gap-y-3 px-1 @xs:mt-3 @xs:flex-row',
        className,
      )}
      data-slot="product-card-details"
      {...props}
    >
      {children}
    </div>
  );
}
