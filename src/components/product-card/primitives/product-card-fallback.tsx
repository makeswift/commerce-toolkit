'use client';

import { ComponentProps } from 'react';

import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export type ProductCardFallbackProps = ComponentProps<'div'>;

export function ProductCardFallback({ className, children, ...props }: ProductCardFallbackProps) {
  const { colorScheme } = useProductCard();

  return (
    <div
      className={cn(
        'break-words p-4 text-4xl font-bold leading-none tracking-tighter transition-transform duration-500 ease-out [color:var(--blog-post-card-empty-text,color-mix(in_oklab,hsl(var(--foreground))_15%,transparent))] group-hover:scale-105',
        {
          light: 'text-[var(--product-card-light-title,hsl(var(--foreground)))]',
          dark: 'text-[var(--product-card-dark-title,hsl(var(--background)))]',
        }[colorScheme],
      )}
      data-slot="product-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
