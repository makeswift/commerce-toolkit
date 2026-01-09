import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { cn } from '@/lib';

export type ProductCardCartButtonProps = ComponentProps<typeof Button>;

export function ProductCardCartButton({
  className,
  children,
  ...props
}: ProductCardCartButtonProps) {
  return (
    <Button className={cn(className)} data-slot="product-card-cart-button" size="medium" {...props}>
      {children}
    </Button>
  );
}
