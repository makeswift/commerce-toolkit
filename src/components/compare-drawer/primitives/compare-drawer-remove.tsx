import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { cn } from '@/lib';

export type CompareDrawerRemoveProps = ComponentProps<typeof Button>;

export function CompareDrawerRemove({ className, children, ...props }: CompareDrawerRemoveProps) {
  return (
    <Button
      className={cn('absolute -right-2.5 -top-2.5', className)}
      data-slot="compare-drawer-remove"
      shape="circle"
      size="x-small"
      variant="outline"
      {...props}
    >
      {children}
    </Button>
  );
}
