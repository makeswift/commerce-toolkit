import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type OffsetPaginationRootProps = ComponentProps<'nav'>;

export function OffsetPaginationRoot({ className, children, ...props }: OffsetPaginationRootProps) {
  return (
    <nav
      className={cn(
        'py-10 text-xs [font-family:var(--offset-pagination-font,var(--font-body))]',
        className,
      )}
      data-slot="offset-pagination-root"
      {...props}
    >
      {children}
    </nav>
  );
}
