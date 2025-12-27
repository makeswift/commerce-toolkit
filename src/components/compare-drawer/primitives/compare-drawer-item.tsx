import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerItemProps = ComponentProps<'div'>;

export function CompareDrawerItem({ children, className, ...props }: CompareDrawerItemProps) {
  return (
    <div className={cn('relative', className)} data-slot="compare-drawer-item" {...props}>
      {children}
    </div>
  );
}
