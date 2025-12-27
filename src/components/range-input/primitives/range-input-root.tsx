import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RangeInputRootProps = ComponentProps<'div'>;

export function RangeInputRoot({ className, children, ...props }: RangeInputRootProps) {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-2',
        // Layout: inputs expand, button shrinks
        '[&>*:not([data-slot=range-input-button])]:flex-1 [&>[data-slot=range-input-button]]:shrink-0',
        className,
      )}
      data-slot="range-input-root"
      {...props}
    >
      {children}
    </div>
  );
}
