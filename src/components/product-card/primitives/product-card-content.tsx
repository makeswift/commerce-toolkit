import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardContentProps = ComponentProps<'div'>;

export function ProductCardContent({ className, children, ...props }: ProductCardContentProps) {
  return (
    <div className={cn('relative', className)} data-slot="product-card-content" {...props}>
      {children}
    </div>
  );
}
