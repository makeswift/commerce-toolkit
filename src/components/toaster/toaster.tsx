'use client';

import { ComponentProps } from 'react';
import type { ReactNode } from 'react';
import { Toaster as Sonner, toast as SonnerToast } from 'sonner';

import { Alert } from '@/components/alert/alert';
import { cn } from '@/lib';

export type ToasterProps = ComponentProps<typeof Sonner>;

interface ToastOptions {
  action?: {
    label: string;
    onClick: () => void;
  };
  dismiss?: {
    label: string;
    onClick: () => void;
  };
  description?: string;
  position?: ToasterProps['position'];
}

export const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn('flex w-full flex-col items-end', className)}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'group focus-visible:ring-0 w-full',
        },
      }}
      {...props}
    />
  );
};

export const toast = {
  success: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        dismiss={{
          label: options?.dismiss?.label ?? 'Dismiss',
          onClick: () => SonnerToast.dismiss(toastId),
        }}
        message={message}
        variant="success"
        {...options}
      />,
      { position },
    );
  },
  error: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        dismiss={{
          label: options?.dismiss?.label ?? 'Dismiss',
          onClick: () => SonnerToast.dismiss(toastId),
        }}
        message={message}
        variant="error"
        {...options}
      />,
      { position },
    );
  },
  warning: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        dismiss={{
          label: options?.dismiss?.label ?? 'Dismiss',
          onClick: () => SonnerToast.dismiss(toastId),
        }}
        message={message}
        variant="warning"
        {...options}
      />,
      { position },
    );
  },
  info: (message: ReactNode, options?: ToastOptions) => {
    const position = options?.position;

    const toastId = SonnerToast(
      <Alert
        dismiss={{
          label: options?.dismiss?.label ?? 'Dismiss',
          onClick: () => options?.dismiss?.onClick ?? SonnerToast.dismiss(toastId),
        }}
        message={message}
        variant="info"
        {...options}
      />,
      { position },
    );
  },
};
