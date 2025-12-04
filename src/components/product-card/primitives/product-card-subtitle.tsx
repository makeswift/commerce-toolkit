'use client';

import type { ComponentProps } from 'react';

import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type ProductCardSubtitleProps = ComponentProps<'span'>;

export function ProductCardSubtitle({ children, className, ...props }: ProductCardSubtitleProps) {
  const { colorScheme } = useProductCard();

  return (
    <span
      className={cn(
        'block text-sm font-normal',
        {
          light:
            'text-[var(--product-card-light-subtitle,color-mix(in_oklab,hsl(var(--foreground))_75%,transparent))]',
          dark: 'text-[var(--product-card-dark-subtitle,color-mix(in_oklab,hsl(var(--background))_75%,transparent))]',
        }[colorScheme],
        className,
      )}
      data-slot="product-card-subtitle"
      {...props}
    >
      {children}
    </span>
  );
}
