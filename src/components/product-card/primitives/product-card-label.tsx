import { ComponentProps } from 'react';

import { Label } from '@/components/label';
import { cn } from '@/lib';

export type ProductCardLabelProps = ComponentProps<typeof Label>;

export function ProductCardLabel({ className, children, ...props }: ProductCardLabelProps) {
  return (
    <Label
      className={cn('text-[var(--product-card-light-text,hsl(var(--foreground)))]', className)}
      data-slot="product-card-label"
      {...props}
    >
      {children}
    </Label>
  );
}
