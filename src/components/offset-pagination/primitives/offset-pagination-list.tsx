import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type OffsetPaginationListProps = ComponentProps<'ul'>;

export function OffsetPaginationList({ className, children, ...props }: OffsetPaginationListProps) {
  return (
    <ul
      className={cn('flex items-center justify-center gap-2', className)}
      data-slot="offset-pagination-list"
      {...props}
    >
      {children}
    </ul>
  );
}
