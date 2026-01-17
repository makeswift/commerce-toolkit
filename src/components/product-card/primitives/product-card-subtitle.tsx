import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardSubtitleProps = ComponentProps<'span'>;

export function ProductCardSubtitle({ children, className, ...props }: ProductCardSubtitleProps) {
  return (
    <span
      className={cn(
        'block text-sm text-[--product-card-text-secondary,var(--text-secondary)] [font-family:var(--product-card-font-subtitle,var(--font-body))]',
        className,
      )}
      data-slot="product-card-subtitle"
      {...props}
    >
      {children}
    </span>
  );
}
