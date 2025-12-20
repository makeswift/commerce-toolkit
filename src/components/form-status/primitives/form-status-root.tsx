import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FormStatusRootProps = ComponentProps<'div'> & {
  type?: 'error' | 'success';
  colorScheme?: 'light' | 'dark';
};

export function FormStatusRoot({
  className,
  type = 'success',
  colorScheme = 'light',
  ...props
}: FormStatusRootProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-xl px-4 py-3 text-sm',
        // Light success
        'data-[color-scheme=light]:data-[type=success]:bg-[var(--form-status-light-background-success,color-mix(in_oklab,_hsl(var(--success)),_white_75%))] data-[color-scheme=light]:data-[type=success]:text-[var(--form-status-light-text-success,color-mix(in_oklab,hsl(var(--success)),black_75%))]',
        // Light error
        'data-[color-scheme=light]:data-[type=error]:bg-[var(--form-status-light-background-error,color-mix(in_oklab,_hsl(var(--error)),_white_75%))] data-[color-scheme=light]:data-[type=error]:text-[var(--form-status-light-text-error,color-mix(in_oklab,hsl(var(--error)),black_75%))]',
        // Dark success
        'data-[color-scheme=dark]:data-[type=success]:bg-[var(--form-status-dark-background-success,color-mix(in_oklab,_hsl(var(--success)),_white_75%))] data-[color-scheme=dark]:data-[type=success]:text-[var(--form-status-dark-text-success,color-mix(in_oklab,hsl(var(--success)),black_75%))]',
        // Dark error
        'data-[color-scheme=dark]:data-[type=error]:bg-[var(--form-status-dark-background-error,color-mix(in_oklab,_hsl(var(--error)),_white_75%))] data-[color-scheme=dark]:data-[type=error]:text-[var(--form-status-dark-text-error,color-mix(in_oklab,hsl(var(--error)),black_75%))]',
        className,
      )}
      data-color-scheme={colorScheme}
      data-type={type}
      {...props}
    />
  );
}
