import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

export type ProductCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
  aspectRatio?: '5/6' | '3/4' | '1/1';
};

export function ProductCardRoot<T extends ElementType = 'article'>({
  className,
  children,
  as,
  aspectRatio = '5/6',
  ...props
}: ProductCardRootProps<T>) {
  const ProductCardRootElement = as ?? 'article';

  return (
    <ProductCardRootElement
      className={cn(
        'group/product-card w-full max-w-md font-[var(--product-card-font-family,var(--font-family-body))] @container',
        className,
      )}
      data-aspect-ratio={aspectRatio}
      data-slot="product-card-root"
      {...props}
    >
      {children}
    </ProductCardRootElement>
  );
}
