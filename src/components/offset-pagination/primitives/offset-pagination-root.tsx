import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type OffsetPaginationRootProps = ComponentProps<'nav'>;

export function OffsetPaginationRoot({ className, children, ...props }: OffsetPaginationRootProps) {
  return (
    <nav
      className={cn(
        'py-10 text-xs font-[var(--offset-pagination-font-family,var(--font-family-body))]',
        className,
      )}
      data-slot="offset-pagination-root"
      {...props}
    >
      {children}
    </nav>
  );
}
