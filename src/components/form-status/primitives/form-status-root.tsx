import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FormStatusRootProps = ComponentProps<'div'> & {
  type?: 'error' | 'success';
};

export function FormStatusRoot({ className, type = 'success', ...props }: FormStatusRootProps) {
  return (
    <div
      className={cn(
        // Base layout
        'flex items-center gap-3',
        // Spacing
        'px-4 py-3',
        // Typography
        'text-sm',
        // Borders & Rounded
        'rounded-xl',
        // Error state
        'data-[type=error]:bg-[var(--form-status-background-error,color-mix(in_oklab,_hsl(var(--error)),_white_75%))]',
        'data-[type=error]:text-[var(--form-status-text-error,color-mix(in_oklab,hsl(var(--error)),black_75%))]',
        // Success state
        'data-[type=success]:bg-[var(--form-status-background-success,color-mix(in_oklab,_hsl(var(--success)),_white_75%))]',
        'data-[type=success]:text-[var(--form-status-text-success,color-mix(in_oklab,hsl(var(--success)),black_75%))]',
        className,
      )}
      data-type={type}
      {...props}
    />
  );
}
