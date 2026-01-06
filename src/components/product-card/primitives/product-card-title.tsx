import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardTitleProps = ComponentProps<'h3'>;

export function ProductCardTitle({ className, children, ...props }: ProductCardTitleProps) {
  return (
    <h3
      className={cn(
        'block font-semibold text-[var(--product-card-light-title,var(--foreground))]',
        className,
      )}
      data-slot="product-card-title"
      {...props}
    >
      {children}
    </h3>
  );
}
