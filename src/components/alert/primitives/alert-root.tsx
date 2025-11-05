import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface AlertRootProps extends ComponentProps<'div'> {
  variant: 'success' | 'warning' | 'error' | 'info';
}

export function AlertRoot({ variant, className, children, ...props }: AlertRootProps) {
  return (
    <div
      className={cn(
        'flex max-w-[356px] items-center justify-between gap-2 rounded-xl border border-[var(--alert-border,color-mix(in_oklab,hsl(var(--foreground))_10%,transparent))] py-3 pe-3 ps-4 shadow',
        {
          success:
            'bg-[var(--alert-success-background,color-mix(in_oklab,hsl(var(--success)),white_75%))]',
          warning:
            'bg-[var(--alert-warning-background,color-mix(in_oklab,hsl(var(--warning)),white_75%))]',
          error:
            'bg-[var(--alert-error-background,color-mix(in_oklab,hsl(var(--error)),white_75%))]',
          info: 'bg-[var(--alert-info-background,hsl(var(--background)))]',
        }[variant],
        className,
      )}
      data-slot="alert-root"
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
}
