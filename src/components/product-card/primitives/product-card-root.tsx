'use client';

import { createContext, use, useMemo } from 'react';
import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

interface ProductCardContext {
  colorScheme: 'light' | 'dark';
  aspectRatio: '5:6' | '3:4' | '1:1';
}

export const ProductCardContext = createContext<ProductCardContext | undefined>(undefined);

export type ProductCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
  colorScheme?: 'light' | 'dark';
  aspectRatio?: '5:6' | '3:4' | '1:1';
};

export function ProductCardRoot<T extends ElementType = 'article'>({
  className,
  children,
  as,
  colorScheme = 'light',
  aspectRatio = '5:6',
  ...props
}: ProductCardRootProps<T>) {
  const ProductCardRootElement = as ?? 'article';

  const contextValues = useMemo(
    () => ({
      colorScheme,
      aspectRatio,
    }),
    [colorScheme, aspectRatio],
  );

  return (
    <ProductCardContext.Provider value={contextValues}>
      <ProductCardRootElement
        className={cn(
          'group w-full max-w-md font-[var(--product-card-font-family,var(--font-family-body))] @container',
          className,
        )}
        data-slot="product-card-root"
        {...props}
      >
        {children}
      </ProductCardRootElement>
    </ProductCardContext.Provider>
  );
}

export function useProductCard() {
  const context = use(ProductCardContext);

  if (context === undefined) {
    throw new Error('useProductCard must be used within an ProductCardRoot');
  }

  return context;
}
