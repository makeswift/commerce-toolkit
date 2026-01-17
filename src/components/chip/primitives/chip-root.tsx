import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ChipRootProps = ComponentProps<'span'>;

export function ChipRoot({ children, className, ...props }: ChipRootProps) {
  return (
    <span
      className={cn(
        'flex h-9 items-center gap-1.5 rounded-lg bg-[--chip-fill,var(--contrast-100)] py-2 pe-2 ps-3 text-sm font-semibold text-[--chip-text,var(--text-primary)] [font-family:var(--chip-font,var(--font-body))]',
        className,
      )}
      data-slot="chip-root"
      {...props}
    >
      {children}
    </span>
  );
}
