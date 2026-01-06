import { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardFallbackProps = ComponentProps<'div'>;

export function ProductCardFallback({ className, children, ...props }: ProductCardFallbackProps) {
  return (
    <div
      className={cn(
        'break-words p-4 text-4xl font-bold leading-none tracking-tight transition-transform duration-500 ease-out [color:color-mix(in_oklab,var(--foreground)_30%,transparent)] group-hover:scale-105',
        className,
      )}
      data-slot="product-card-fallback"
      {...props}
    >
      {children}
    </div>
  );
}
