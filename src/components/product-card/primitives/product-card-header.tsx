import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardHeaderProps = ComponentProps<'div'>;

export function ProductCardHeader({ children, className, ...props }: ProductCardHeaderProps) {
  return (
    <div
      className={cn('relative flex-1 text-sm @[16rem]:text-base', className)}
      data-slot="product-card-header"
      {...props}
    >
      {children}
    </div>
  );
}
