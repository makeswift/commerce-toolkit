'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

const alertVariants = cva(
  'group/alert flex max-w-[356px] items-center justify-between gap-2 rounded-xl border border-black/10 py-3 pe-3 ps-4 shadow',
  {
    variants: {
      variant: {
        success: 'bg-[--alert-fill-success,var(--success-background)]',
        warning: 'bg-[--alert-fill-warning,var(--warning-background)]',
        error: 'bg-[--alert-fill-error,var(--error-background)]',
        info: 'bg-[--alert-fill-info,var(--background)]',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
);

export type AlertRootProps = ComponentProps<'div'> & VariantProps<typeof alertVariants>;

export function AlertRoot({ children, className, variant, ...props }: AlertRootProps) {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-slot="alert-root"
      data-variant={variant}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
}
