import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectViewportProps = ComponentProps<typeof SelectPrimitive.Viewport>;

export function SelectViewport({ children, className, ...props }: SelectViewportProps) {
  return (
    <SelectPrimitive.Viewport className={cn(className)} data-slot="select-viewport" {...props}>
      {children}
    </SelectPrimitive.Viewport>
  );
}
