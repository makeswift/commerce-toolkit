import type { ComponentProps } from 'react';

import { ProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type CompareCardProductCardProps = ComponentProps<typeof ProductCard>;

export function CompareCardProductCard({ className, ...props }: CompareCardProductCardProps) {
  return <ProductCard className={cn(className)} data-slot="compare-card-product-card" {...props} />;
}
