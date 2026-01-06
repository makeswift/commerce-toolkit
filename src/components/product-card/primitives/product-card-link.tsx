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
        'absolute inset-0 rounded-[var(--product-card-border-radius,1rem)] ring-offset-[var(--product-card-light-offset,var(--background))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--product-card-focus,var(--primary))] focus-visible:ring-offset-4',
        className,
      )}
      data-slot="product-card-link"
      {...props}
    />
  );
}
