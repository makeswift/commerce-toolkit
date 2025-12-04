'use client';

import type { ComponentProps } from 'react';

import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type ProductCardThumbnailProps = ComponentProps<'div'>;

export function ProductCardThumbnail({ className, children, ...props }: ProductCardThumbnailProps) {
  const { aspectRatio, colorScheme } = useProductCard();

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[var(--product-card-border-radius,1rem)]',
        {
          '5:6': 'aspect-[5/6]',
          '3:4': 'aspect-[3/4]',
          '1:1': 'aspect-square',
        }[aspectRatio],
        {
          light: 'bg-[var(--product-card-light-background,hsl(var(--contrast-100)))]',
          dark: 'bg-[var(--product-card-dark-background,hsl(var(--contrast-500)))]',
        }[colorScheme],
        className,
      )}
      data-slot="product-card-thumbnail"
      {...props}
    >
      {children}
    </div>
  );
}
