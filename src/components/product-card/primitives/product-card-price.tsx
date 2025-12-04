import type { ComponentProps } from 'react';

import { Price } from '@/components/price';
import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type ProductCardPriceProps = ComponentProps<typeof Price>;

export function ProductCardPrice({ className, price, ...props }: ProductCardPriceProps) {
  const { colorScheme } = useProductCard();

  return (
    <Price
      className={cn('mt-2', className)}
      colorScheme={colorScheme}
      data-slot="product-card-price"
      price={price}
      {...props}
    />
  );
}
