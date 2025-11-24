'use client';

import { createContext, use, useMemo } from 'react';
import type { ComponentProps, MouseEventHandler } from 'react';

import { cn } from '@/lib';

interface AlertContext {
  action?: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  };
  dismiss: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  };
  variant: 'success' | 'warning' | 'error' | 'info';
}

export const AlertContext = createContext<AlertContext | undefined>(undefined);

export type AlertRootProps = ComponentProps<'div'> & {
  action?: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  };
  dismiss: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  };
  variant: 'success' | 'warning' | 'error' | 'info';
};

export function AlertRoot({
  className,
  children,
  action,
  dismiss,
  variant,
  ...props
}: AlertRootProps) {
  const contextValues = useMemo(
    () => ({
      action,
      dismiss,
      variant,
    }),
    [action, dismiss, variant],
  );

  return (
    <AlertContext.Provider value={contextValues}>
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
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = use(AlertContext);

  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertRoot');
  }

  return context;
}
