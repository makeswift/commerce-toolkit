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
  const iconStyles = cn('size-5 -translate-x-px', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="calendar-prev-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ChevronLeftIcon absoluteStrokeWidth className={iconStyles} data-slot="calendar-prev-icon" />
  );
}
