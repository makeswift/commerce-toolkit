import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

export type DatePickerPortalProps = ComponentProps<typeof PopoverPrimitive.Portal>;

export function DatePickerPortal({ children, ...props }: DatePickerPortalProps) {
  return <PopoverPrimitive.Portal {...props}>{children}</PopoverPrimitive.Portal>;
}
