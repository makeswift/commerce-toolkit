import { Slot } from '@radix-ui/react-slot';
import { EllipsisIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface DropdownMenuTriggerIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function DropdownMenuTriggerIcon({
  asChild = false,
  className,
  children,
}: DropdownMenuTriggerIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-5', className)} data-slot="dropdown-menu-trigger-icon">
        {children}
      </Slot>
    );
  }

  return (
    <EllipsisIcon
      className={cn('size-5', className)}
      data-slot="dropdown-menu-trigger-icon"
      size={20}
    />
  );
}
