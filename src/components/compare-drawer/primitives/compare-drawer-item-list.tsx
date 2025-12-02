import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerItemListProps = ComponentProps<'div'>;

export function CompareDrawerItemList({
  children,
  className,
  ...props
}: CompareDrawerItemListProps) {
  return (
    <div
      className={cn('flex flex-1 flex-wrap justify-end gap-4', className)}
      data-slot="compare-drawer-item-list"
      {...props}
    >
      {children}
    </div>
  );
}
