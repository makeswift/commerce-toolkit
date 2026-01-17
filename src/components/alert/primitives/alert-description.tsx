import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AlertDescriptionProps = ComponentProps<'p'>;

export function AlertDescription({ children, className, ...props }: AlertDescriptionProps) {
  return (
    <p
      className={cn(
        'text-xs font-medium text-[--alert-text,var(--text-primary)] opacity-50',
        className,
      )}
      data-slot="alert-description"
      {...props}
    >
      {children}
    </p>
  );
}
