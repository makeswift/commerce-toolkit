import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ProductCardFormProps = ComponentProps<'form'>;

export function ProductCardForm({ children, className, ...props }: ProductCardFormProps) {
  return (
    <form className={cn(className)} data-slot="product-card-form" {...props}>
      {children}
    </form>
  );
}
