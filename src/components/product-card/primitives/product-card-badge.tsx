import type { ComponentProps } from 'react';

import { Badge } from '@/components/badge';
import { cn } from '@/lib';

export type ProductCardBadgeProps = ComponentProps<typeof Badge>;

export function ProductCardBadge({ className, children, ...props }: ProductCardBadgeProps) {
  return (
    <Badge
      className={cn('absolute left-3 top-3', className)}
      data-slot="product-card-badge"
      shape="rounded"
      {...props}
    >
      {children}
    </Badge>
  );
}
