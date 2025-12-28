import type { ComponentProps } from 'react';

import { Price } from '@/components/price';
import { cn } from '@/lib';

export type ProductCardPriceProps = ComponentProps<typeof Price>;

export function ProductCardPrice({ className, price, ...props }: ProductCardPriceProps) {
  return (
    <Price
      className={cn('mt-2', className)}
      data-slot="product-card-price"
      price={price}
      {...props}
    />
  );
}
