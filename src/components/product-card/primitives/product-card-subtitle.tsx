import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardSubtitleProps = ComponentProps<'span'>;

export function ProductCardSubtitle({ children, className, ...props }: ProductCardSubtitleProps) {
  return (
    <span
      className={cn(
        'mb-1.5 block text-sm font-normal leading-normal text-[var(--product-card-light-subtitle,color-mix(in_oklab,hsl(var(--foreground))_75%,transparent))]',
        className,
      )}
      data-slot="product-card-subtitle"
      {...props}
    >
      {children}
    </span>
  );
}
