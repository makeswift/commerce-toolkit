import { Slot } from '@radix-ui/react-slot';
import { CircleAlert } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface FieldErrorIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FieldErrorIcon({ asChild = false, className, children }: FieldErrorIconProps) {
  const iconStyles = cn('size-4 shrink-0', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="field-error-icon">
        {children}
      </Slot>
    );
  }

  return (
    <CircleAlert
      className={iconStyles}
      color="currentColor"
      data-slot="field-error-icon"
      strokeWidth={1.5}
    />
  );
}
