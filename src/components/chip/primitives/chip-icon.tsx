'use client';

import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface ChipIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function ChipIcon({ asChild = false, className, children }: ChipIconProps) {
  const iconStyles = cn('size-3', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="chip-icon">
        {children}
      </Slot>
    );
  }

  return <X className={iconStyles} data-slot="chip-icon" />;
}
