import type { ComponentProps } from 'react';

import { ButtonLink } from '@/components/button-link';
import { cn } from '@/lib';

export type ProductCardCartLinkProps = ComponentProps<typeof ButtonLink>;

export function ProductCardCartLink({ className, children, ...props }: ProductCardCartLinkProps) {
  return (
    <ButtonLink
      className={cn(className)}
      data-slot="product-card-cart-link"
      size="medium"
      {...props}
    >
      {children}
    </ButtonLink>
  );
}
