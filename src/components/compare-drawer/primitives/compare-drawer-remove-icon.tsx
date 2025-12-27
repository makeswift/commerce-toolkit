import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CompareDrawerRemoveIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CompareDrawerRemoveIcon({
  asChild = false,
  className,
  children,
}: CompareDrawerRemoveIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-4', className)} data-slot="compare-drawer-remove-icon">
        {children}
      </Slot>
    );
  }

  return (
    <X
      absoluteStrokeWidth
      className={cn('size-4', className)}
      color="currentColor"
      data-slot="compare-drawer-remove-icon"
      strokeWidth={1.5}
    />
  );
}
