import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectIconProps = ComponentProps<typeof SelectPrimitive.Icon>;

export function SelectIcon({ className, children, ...props }: SelectIconProps) {
  return (
    <SelectPrimitive.Icon className={cn(className)} data-slot="select-icon" {...props}>
      {children}
    </SelectPrimitive.Icon>
  );
}
