import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type PriceDefaultProps = ComponentProps<'span'>;

export function PriceDefault({ className, children, ...props }: PriceDefaultProps) {
  return (
    <span className={cn(className)} data-slot="price-default" {...props}>
      {children}
    </span>
  );
}
