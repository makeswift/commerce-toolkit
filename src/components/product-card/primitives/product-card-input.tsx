import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardInputProps = ComponentProps<'input'>;

export function ProductCardInput({ children, className, ...props }: ProductCardInputProps) {
  return (
    <input className={cn(className)} data-slot="product-card-input" {...props}>
      {children}
    </input>
  );
}
