import type { ComponentProps } from 'react';

export type AlertActionsProps = ComponentProps<'div'>;
import { cn } from '@/lib';

export function AlertActions({ children, className, ...props }: AlertActionsProps) {
  return (
    <div className={cn('flex items-center gap-1', className)} data-slot="alert-actions" {...props}>
      {children}
    </div>
  );
}
