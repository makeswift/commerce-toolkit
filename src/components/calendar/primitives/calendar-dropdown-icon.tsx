import { Slot } from '@radix-ui/react-slot';
import { ChevronDownIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CalendarDropdownIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CalendarDropdownIcon({
  asChild = false,
  className,
  children,
}: CalendarDropdownIconProps) {
  const iconStyles = cn('size-3.5', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="calendar-dropdown-icon">
        {children}
      </Slot>
    );
  }

  return <ChevronDownIcon absoluteStrokeWidth className={iconStyles} />;
}
