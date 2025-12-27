import { Slot } from '@radix-ui/react-slot';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CursorPaginationPreviousIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CursorPaginationPreviousIcon({
  asChild = false,
  className,
  children,
}: CursorPaginationPreviousIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('size-6', className)} data-slot="cursor-pagination-previous-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowLeft
      absoluteStrokeWidth
      className={cn('size-6', className)}
      color="currentColor"
      data-slot="cursor-pagination-previous-icon"
      strokeWidth={1}
    />
  );
}
