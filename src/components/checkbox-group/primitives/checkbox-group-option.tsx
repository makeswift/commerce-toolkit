import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CheckboxGroupOptionProps = ComponentProps<'div'>;

export function CheckboxGroupOption({ children, className, ...props }: CheckboxGroupOptionProps) {
  return (
    <div
      className={cn('flex items-center gap-2', className)}
      data-slot="checkbox-group-option"
      {...props}
    >
      {children}
    </div>
  );
}
