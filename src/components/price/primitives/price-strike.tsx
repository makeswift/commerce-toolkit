import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type PriceStrikeProps = ComponentProps<'span'>;

export function PriceStrike({ className, children, ...props }: PriceStrikeProps) {
  return (
    <span
      className={cn('font-normal line-through opacity-50', className)}
      data-slot="price-strike"
      {...props}
    >
      {children}
    </span>
  );
}
