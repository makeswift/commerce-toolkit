import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface ProductCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function ProductCardLink({ asChild = false, className, ...props }: ProductCardLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'focus-primary absolute inset-0 rounded-[var(--product-card-radius,1rem)]',
        className,
      )}
      data-slot="product-card-link"
      {...props}
    />
  );
}
