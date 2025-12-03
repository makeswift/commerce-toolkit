import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CursorPaginationItemProps = ComponentProps<'li'>;

export function CursorPaginationItem({ className, children, ...props }: CursorPaginationItemProps) {
  return (
    <li className={cn(className)} data-slot="cursor-pagination-item" {...props}>
      {children}
    </li>
  );
}
