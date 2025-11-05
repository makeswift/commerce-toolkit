import type { ComponentProps } from 'react';

export type AlertHeaderProps = ComponentProps<'div'>;
import { cn } from '@/lib';

export function AlertHeader({ children, className, ...props }: AlertHeaderProps) {
  return (
    <div
      className={cn('[font-family:var(--alert-font-family,var(--font-family-body))]', className)}
      data-slot="alert-header"
      {...props}
    >
      {children}
    </div>
  );
}
