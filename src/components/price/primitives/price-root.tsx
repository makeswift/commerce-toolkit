import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type PriceRootProps = ComponentProps<'div'>;

export function PriceRoot({ className, children, ...props }: PriceRootProps) {
  return (
    <div
      className={cn(
        'text-base font-semibold text-[var(--price-light-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="price-root"
      {...props}
    >
      {children}
    </div>
  );
}
