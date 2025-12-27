import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CursorPaginationRootProps = ComponentProps<'div'>;

export function CursorPaginationRoot({ className, children, ...props }: CursorPaginationRootProps) {
  return (
    <nav
      className={cn('py-10 text-[var(--cursor-pagination-icon,var(--foreground))]', className)}
      data-slot="cursor-pagination-root"
      {...props}
    >
      {children}
    </nav>
  );
}
