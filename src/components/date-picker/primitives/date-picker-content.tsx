import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type DatePickerContentProps = ComponentProps<typeof PopoverPrimitive.Content>;

export function DatePickerContent({ children, className, ...props }: DatePickerContentProps) {
  return (
    <PopoverPrimitive.Content
      className={cn(
        'z-50',
        // Open state
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        // Closed state
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        className,
      )}
      data-slot="date-picker-content"
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  );
}
