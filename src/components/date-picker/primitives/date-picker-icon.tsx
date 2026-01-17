'use client';

import { Slot } from '@radix-ui/react-slot';
import { Calendar } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface DatePickerIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function DatePickerIcon({ asChild = false, className, children }: DatePickerIconProps) {
  const iconStyles = cn('size-5', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="date-picker-icon">
        {children}
      </Slot>
    );
  }

  return (
    <Calendar
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="date-picker-icon"
      strokeWidth={1.5}
    />
  );
}
