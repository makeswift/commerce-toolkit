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
      className={cn(
        {
          light: 'text-[var(--product-card-light-text,hsl(var(--foreground)))]',
          dark: 'text-[var(--product-card-dark-text,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
      data-slot="product-card-label"
      {...props}
    >
      {children}
    </Label>
  );
}
