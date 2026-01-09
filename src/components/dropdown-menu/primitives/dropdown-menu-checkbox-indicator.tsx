import { Slot } from '@radix-ui/react-slot';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface DropdownMenuCheckboxIndicatorProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function DropdownMenuCheckboxIndicator({
  asChild = false,
  className,
  children,
}: DropdownMenuCheckboxIndicatorProps) {
  const iconStyles = cn('size-4', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="dropdown-menu-checkbox-indicator">
        {children}
      </Slot>
    );
  }

  return (
    <Check
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="dropdown-menu-checkbox-indicator"
      strokeWidth={1.5}
    />
  );
}
