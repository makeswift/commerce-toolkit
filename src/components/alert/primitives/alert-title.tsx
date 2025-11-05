import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AlertTitleProps = ComponentProps<'h5'>;

export function AlertTitle({ children, className, ...props }: AlertTitleProps) {
  return (
    <h5
      className={cn(
        'text-sm font-normal text-[var(--alert-message-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="alert-title"
      {...props}
    >
      {children}
    </h5>
  );
}
