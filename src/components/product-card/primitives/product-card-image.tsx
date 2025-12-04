'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export interface ProductCardImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function ProductCardImage({
  className,
  children,
  asChild = false,
  ...props
}: ProductCardImageProps) {
  const { colorScheme } = useProductCard();

  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'w-full scale-100 select-none object-cover transition-transform duration-500 ease-out group-hover:scale-110',
        {
          light: 'bg-[var(--product-card-light-background,hsl(var(--contrast-100)))]',
          dark: 'bg-[var(--product-card-dark-background,hsl(var(--contrast-500)))]',
        }[colorScheme],
        className,
      )}
      data-slot="product-card-image"
      {...props}
    />
  );
}
