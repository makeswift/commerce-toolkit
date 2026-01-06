import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type OffsetPaginationEllipsisProps = ComponentProps<'span'>;

export function OffsetPaginationEllipsis({
  className,
  children = '...',
  ...props
}: OffsetPaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      className={cn(
        'flex h-12 w-12 items-center justify-center text-[var(--offset-pagination-ellipsis,var(--foreground))]',
        className,
      )}
      data-slot="offset-pagination-ellipsis"
      {...props}
    >
      {children}
    </span>
  );
}
