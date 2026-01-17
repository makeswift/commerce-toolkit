import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardTitleProps = ComponentProps<'h3'>;

export function ProductCardTitle({ className, children, ...props }: ProductCardTitleProps) {
  return (
    <h3
      className={cn(
        'block font-semibold text-[--product-card-text-primary,var(--text-primary)] [font-family:var(--product-card-font-title,var(--font-body))]',
        className,
      )}
      data-slot="product-card-title"
      {...props}
    >
      {children}
    </h3>
  );
}
