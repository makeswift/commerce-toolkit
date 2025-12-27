import { Slot } from '@radix-ui/react-slot';
import { ChevronLeftIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CalendarPrevIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CalendarPrevIcon({ asChild = false, className, children }: CalendarPrevIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-5 -translate-x-px', className)} data-slot="calendar-prev-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ChevronLeftIcon
      absoluteStrokeWidth
      className={cn('size-5 -translate-x-px', className)}
      data-slot="calendar-prev-icon"
    />
  );
}
