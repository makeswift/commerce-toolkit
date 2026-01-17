import type { ComponentProps } from 'react';

import { ProductCard } from '@/components/product-card';

export type CompareCardProductCardProps = ComponentProps<typeof ProductCard>;

export function CompareCardProductCard({ className, ...props }: CompareCardProductCardProps) {
  return <ProductCard className={className} data-slot="compare-card-product-card" {...props} />;
}
