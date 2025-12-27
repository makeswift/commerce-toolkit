import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type InputPrependProps = ComponentProps<'span'>;

export function InputPrepend({ className, children, ...props }: InputPrependProps) {
  return (
    <span
      className={cn('pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2', className)}
      data-slot="input-prepend"
      {...props}
    >
      {children}
    </span>
  );
}
