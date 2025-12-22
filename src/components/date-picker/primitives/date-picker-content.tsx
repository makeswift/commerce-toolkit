import * as PopoverPrimitive from '@radix-ui/react-popover';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type DatePickerContentProps = ComponentProps<typeof PopoverPrimitive.Content>;

export function DatePickerContent({ children, className, ...props }: DatePickerContentProps) {
  return (
    <PopoverPrimitive.Content
      className={cn(
        // Base layout
        'z-50',
        // Closed state
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        // Open state
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        className,
      )}
      data-slot="date-picker-content"
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  );
}
