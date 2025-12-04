'use client';

import { ComponentProps } from 'react';

import { Label } from '@/components/label';
import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type ProductCardLabelProps = ComponentProps<typeof Label>;

export function ProductCardLabel({ className, children, ...props }: ProductCardLabelProps) {
  const { colorScheme } = useProductCard();

  return (
    <Label
      className={cn(className)}
      colorScheme={colorScheme}
      data-slot="product-card-label"
      {...props}
    >
      {children}
    </Label>
  );
}
