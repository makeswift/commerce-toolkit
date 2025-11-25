import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type PriceRootProps = ComponentProps<'div'> & {
  colorScheme?: 'light' | 'dark';
};

export function PriceRoot({
  className,
  colorScheme = 'light',
  children,
  ...props
}: PriceRootProps) {
  return (
    <div
      className={cn(
        'text-base font-semibold',
        {
          light: 'text-[var(--price-light-text,hsl(var(--foreground)))]',
          dark: 'text-[var(--price-dark-text,hsl(var(--background)))]',
        }[colorScheme],
        className,
      )}
      data-slot="price-root"
      {...props}
    >
      {children}
    </div>
  );
}
