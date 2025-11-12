'use client';

import type { ComponentProps } from 'react';

import { useAlert } from '@/components/alert';
import { cn } from '@/lib';

export type AlertTitleProps = ComponentProps<'h5'>;

export function AlertTitle({ children, className, ...props }: AlertTitleProps) {
  const { message } = useAlert();

  return (
    <h5
      className={cn(
        'text-sm font-normal text-[var(--alert-message-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="alert-title"
      {...props}
    >
      {message}
    </h5>
  );
}
