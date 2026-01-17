import { Slot } from '@radix-ui/react-slot';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CursorPaginationNextIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CursorPaginationNextIcon({
  asChild = false,
  className,
  children,
}: CursorPaginationNextIconProps) {
  const iconStyles = cn('size-6', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="cursor-pagination-next-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowRight
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="cursor-pagination-next-icon"
      strokeWidth={1}
    />
  );
}
