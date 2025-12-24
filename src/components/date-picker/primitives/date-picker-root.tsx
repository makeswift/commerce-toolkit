import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

export type DatePickerRootProps = ComponentProps<typeof PopoverPrimitive.Root>;

export function DatePickerRoot({ children, ...props }: DatePickerRootProps) {
  return (
    <PopoverPrimitive.Root data-slot="date-picker-root" {...props}>
      {children}
    </PopoverPrimitive.Root>
  );
}
