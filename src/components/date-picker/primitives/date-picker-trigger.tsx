import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type DatePickerTriggerProps = ComponentProps<typeof PopoverPrimitive.Trigger>;

export function DatePickerTrigger({ children, className, ...props }: DatePickerTriggerProps) {
  return (
    <PopoverPrimitive.Trigger className={cn(className)} data-slot="date-picker-trigger" {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
}
