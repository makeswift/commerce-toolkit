'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { useProductCard } from '@/components/product-card';
import { cn } from '@/lib';

export interface ProductCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function ProductCardLink({ asChild = false, className, ...props }: ProductCardLinkProps) {
  const { colorScheme } = useProductCard();

  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'absolute inset-0 rounded-[var(--product-card-border-radius,1rem)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--product-card-focus,hsl(var(--primary)))] focus-visible:ring-offset-4',
        {
          light: 'ring-offset-[var(--product-card-light-offset,hsl(var(--background)))]',
          dark: 'ring-offset-[var(--product-card-dark-offset,hsl(var(--foreground)))]',
        }[colorScheme],
      )}
      data-slot="product-card-link"
      {...props}
    />
  );
}
