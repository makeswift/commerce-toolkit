import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>;

export function SelectValue({ className, children, ...props }: SelectValueProps) {
  return (
    <SelectPrimitive.Value className={cn(className)} data-slot="select-value" {...props}>
      {children}
    </SelectPrimitive.Value>
  );
}
