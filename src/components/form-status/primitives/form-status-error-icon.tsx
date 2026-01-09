import { Slot } from '@radix-ui/react-slot';
import { CircleAlert } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface FormStatusErrorIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FormStatusErrorIcon({
  asChild = false,
  className,
  children,
}: FormStatusErrorIconProps) {
  const iconStyles = cn('size-5 shrink-0', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="form-status-error-icon">
        {children}
      </Slot>
    );
  }

  return (
    <CircleAlert
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="form-status-error-icon"
      strokeWidth={1.5}
    />
  );
}
