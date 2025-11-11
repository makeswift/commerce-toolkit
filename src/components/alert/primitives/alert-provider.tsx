'use client';

import { createContext, use, useMemo } from 'react';
import type { MouseEventHandler, ReactNode } from 'react';

export interface AlertContext {
  message: ReactNode;
  description?: string;
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

export interface AlertProviderProps extends AlertContext {
  children: ReactNode;
}

export function AlertProvider({
  children,
  message,
  description,
  action,
  dismiss,
  variant,
}: AlertProviderProps) {
  const contextValues = useMemo(
    () => ({
      message,
      description,
      action,
      dismiss,
      variant,
    }),
    [message, description, action, dismiss, variant],
  );

  return <AlertContext.Provider value={contextValues}>{children}</AlertContext.Provider>;
}

export function useAlert() {
  const context = use(AlertContext);

  if (context === undefined) {
    throw new Error('useAlert must be used within a AlertProvider');
  }

  return context;
}
