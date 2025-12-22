import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CheckboxGroupRootProps = ComponentProps<'div'>;

export function CheckboxGroupRoot({ children, className, ...props }: CheckboxGroupRootProps) {
  return (
    <div className={cn('grid gap-2', className)} data-slot="checkbox-group-root" {...props}>
      {children}
    </div>
  );
}
