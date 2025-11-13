import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ChipRootProps = ComponentProps<'span'>;

export function ChipRoot({ children, className, ...props }: ChipRootProps) {
  return (
    <span
      className={cn(
        'flex h-9 items-center gap-1.5 rounded-lg bg-[var(--chip-background,hsl(var(--contrast-100)))] py-2 pe-2 ps-3 text-sm font-semibold leading-5 text-[var(--chip-text,hsl(var(--foreground)))] [font-family:var(--chip-font-family,var(--font-family-body))]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
