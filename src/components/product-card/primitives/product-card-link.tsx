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
        'absolute inset-0 rounded-[var(--product-card-border-radius,1rem)] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--product-card-focus,var(--brand))]',
        className,
      )}
      data-slot="product-card-link"
      {...props}
    />
  );
}
