import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RangeInputRootProps = ComponentProps<'div'>;

export function RangeInputRoot({ className, children, ...props }: RangeInputRootProps) {
  return (
    <div
      className={cn('flex w-full items-center gap-2', className)}
      data-slot="range-input-root"
      {...props}
    >
      {children}
    </div>
  );
}
