import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface DropdownMenuSubIndicatorProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function DropdownMenuSubIndicator({
  asChild = false,
  className,
  children,
}: DropdownMenuSubIndicatorProps) {
  const iconStyles = cn('size-4', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="dropdown-menu-sub-indicator">
        {children}
      </Slot>
    );
  }

  return (
    <ChevronRight
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="dropdown-menu-sub-indicator"
      strokeWidth={1.5}
    />
  );
}
