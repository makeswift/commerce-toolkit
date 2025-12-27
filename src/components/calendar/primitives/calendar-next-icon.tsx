import { Slot } from '@radix-ui/react-slot';
import { ChevronRightIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CalendarNextIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CalendarNextIcon({ asChild = false, className, children }: CalendarNextIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-5 translate-x-px', className)} data-slot="calendar-next-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ChevronRightIcon
      absoluteStrokeWidth
      className={cn('size-5 translate-x-px', className)}
      data-slot="calendar-next-icon"
    />
  );
}
