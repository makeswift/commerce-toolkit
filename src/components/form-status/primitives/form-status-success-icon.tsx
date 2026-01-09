import { Slot } from '@radix-ui/react-slot';
import { CheckCircle } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface FormStatusSuccessIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function FormStatusSuccessIcon({
  asChild = false,
  className,
  children,
}: FormStatusSuccessIconProps) {
  const iconStyles = cn('size-5 shrink-0', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="form-status-success-icon">
        {children}
      </Slot>
    );
  }

  return (
    <CheckCircle
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="form-status-success-icon"
      strokeWidth={1.5}
    />
  );
}
