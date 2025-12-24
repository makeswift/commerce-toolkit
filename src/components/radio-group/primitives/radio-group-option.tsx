import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RadioGroupItemsProps = ComponentProps<'div'>;

export function RadioGroupOption({ children, className, ...props }: RadioGroupItemsProps) {
  return (
    <div
      className={cn('flex items-center gap-2', className)}
      data-slot="radio-group-option"
      {...props}
    >
      {children}
    </div>
  );
}
