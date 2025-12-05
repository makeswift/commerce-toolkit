import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type OffsetPaginationItemProps = ComponentProps<'li'>;

export function OffsetPaginationItem({ className, children, ...props }: OffsetPaginationItemProps) {
  return (
    <li className={cn(className)} data-slot="offset-pagination-item" {...props}>
      {children}
    </li>
  );
}
