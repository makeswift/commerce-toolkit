import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardPreviewProps = ComponentProps<'div'>;

export function ProductCardPreview({ className, children, ...props }: ProductCardPreviewProps) {
  return (
    <div className={cn('relative', className)} data-slot="product-card-preview" {...props}>
      {children}
    </div>
  );
}
