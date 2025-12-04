'use client';

import type { ComponentProps } from 'react';

import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type ProductCardTitleProps = ComponentProps<'h3'>;

export function ProductCardTitle({ className, children, ...props }: ProductCardTitleProps) {
  const { colorScheme } = useProductCard();

  return (
    <h3
      className={cn(
        'block font-semibold',
        {
          light: 'text-[var(--product-card-light-title,hsl(var(--foreground)))]',
          dark: 'text-[var(--product-card-dark-title,hsl(var(--background)))]',
        }[colorScheme],
      )}
      data-slot="product-card-title"
      {...props}
    >
      {children}
    </h3>
  );
}
