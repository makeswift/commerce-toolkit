import { Slot } from '@radix-ui/react-slot';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CompareDrawerSubmitIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
  size?: 'small' | 'medium';
}

export function CompareDrawerSubmitIcon({
  asChild = false,
  className,
  children,
  size = 'medium',
}: CompareDrawerSubmitIconProps) {
  const sizeClass = size === 'small' ? 'size-4' : 'size-5';

  if (asChild) {
    return (
      <Slot className={cn(sizeClass, className)} data-slot="compare-drawer-submit-icon">
        {children}
      </Slot>
    );
  }

  return (
    <ArrowRight
      absoluteStrokeWidth
      className={cn(sizeClass, className)}
      color="currentColor"
      data-slot="compare-drawer-submit-icon"
      strokeWidth={1}
    />
  );
}
