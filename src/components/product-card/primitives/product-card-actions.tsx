import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardActionsProps = ComponentProps<'div'>;

export function ProductCardActions({ className, children, ...props }: ProductCardActionsProps) {
  return (
    <div
      className={cn('flex flex-wrap items-center gap-x-4 gap-y-3 pt-5', className)}
      data-slot="product-card-actions"
      {...props}
    >
      {children}
    </div>
  );
}
