import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AlertHeaderProps = ComponentProps<'div'>;

export function AlertHeader({ children, className, ...props }: AlertHeaderProps) {
  return (
    <div
      className={cn('flex-initial [font-family:--alert-font,var(--font-body)]', className)}
      data-slot="alert-header"
      {...props}
    >
      {children}
    </div>
  );
}
