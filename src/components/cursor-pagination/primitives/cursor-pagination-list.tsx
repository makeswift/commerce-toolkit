import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CursorPaginationListProps = ComponentProps<'ul'>;

export function CursorPaginationList({ className, children, ...props }: CursorPaginationListProps) {
  return (
    <ul
      className={cn('flex items-center justify-center gap-3', className)}
      data-slot="cursor-pagination-list"
      {...props}
    >
      {children}
    </ul>
  );
}
