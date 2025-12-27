import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

export type DatePickerTriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

export function DatePickerTrigger({ children, className, ...props }: DatePickerTriggerProps) {
  return (
    <PopoverPrimitive.Trigger className={className} data-slot="date-picker-trigger" {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
}
