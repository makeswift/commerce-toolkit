import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

export type DatePickerPortalProps = ComponentProps<typeof PopoverPrimitive.Portal>;

export function DatePickerPortal({ children, ...props }: DatePickerPortalProps) {
  return (
    <PopoverPrimitive.Portal data-slot="date-picker-portal" {...props}>
      {children}
    </PopoverPrimitive.Portal>
  );
}
