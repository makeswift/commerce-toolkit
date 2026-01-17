import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { FieldErrorIcon } from '@/components/field/primitives/field-error-icon';
import { cn } from '@/lib';

export interface FieldErrorProps extends ComponentPropsWithoutRef<'div'> {
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export function FieldError({ className, children, icon, ...props }: FieldErrorProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 text-xs text-[--field-text-error,var(--error)]',
        className,
      )}
      data-slot="field-error"
      {...props}
    >
      <FieldErrorIcon asChild={icon?.asChild}>{icon?.children}</FieldErrorIcon>
      {children}
    </div>
  );
}
