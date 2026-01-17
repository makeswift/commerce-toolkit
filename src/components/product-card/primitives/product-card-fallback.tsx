import { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardFallbackProps = ComponentProps<'div'>;

export function ProductCardFallback({ className, children, ...props }: ProductCardFallbackProps) {
  return (
    <div
      className={cn(
        'break-words p-4 text-3xl font-bold text-[color-mix(in_oklab,var(--product-card-text-primary,var(--text-primary))_30%,transparent)] transition-transform duration-500 ease-out group-hover:scale-105',
        className,
      )}
      data-slot="product-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
