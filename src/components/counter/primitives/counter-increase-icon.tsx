import { Slot } from '@radix-ui/react-slot';
import { Plus } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CounterIncreaseIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function CounterIncreaseIcon({
  asChild = false,
  className,
  children,
}: CounterIncreaseIconProps) {
  const iconStyles = cn(
    'size-[18px] text-[--counter-fill-icon,var(--form-fill-icon)] transition-colors duration-300',
    // Hover state (via parent group)
    'group-enabled/counter:group-hover/counter:text-[--counter-fill-icon-hover,var(--form-fill-icon-hover)]',
    className,
  );

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="counter-increase-icon">
        {children}
      </Slot>
    );
  }

  return (
    <Plus
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="counter-increase-icon"
      strokeWidth={1.5}
    />
  );
}
