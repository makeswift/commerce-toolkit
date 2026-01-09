import { Slot } from '@radix-ui/react-slot';
import { Search } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface InputPrependIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function InputPrependIcon({ asChild = false, className, children }: InputPrependIconProps) {
  const iconStyles = cn('size-5 text-[var(--input-light-icon,var(--contrast-400))]', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="input-prepend-icon">
        {children}
      </Slot>
    );
  }

  return (
    <Search
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="input-prepend-icon"
      strokeWidth={1.5}
    />
  );
}
