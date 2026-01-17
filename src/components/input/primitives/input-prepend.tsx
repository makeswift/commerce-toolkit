import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type InputPrependProps = ComponentProps<'span'>;

export function InputPrepend({ className, children, ...props }: InputPrependProps) {
  return (
    <span
      className={cn(
        'pointer-events-none group-data-[size=large]/input:mr-3 group-data-[size=medium]/input:mr-3 group-data-[size=small]/input:mr-2',
        className,
      )}
      data-slot="input-prepend"
      {...props}
    >
      {children}
    </span>
  );
}
