import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AlertActionsProps = ComponentProps<'div'>;

export function AlertActions({ children, className, ...props }: AlertActionsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} data-slot="alert-actions" {...props}>
      {children}
    </div>
  );
}
