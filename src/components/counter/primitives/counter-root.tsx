'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CounterRootProps = ComponentProps<'div'>;

export function CounterRoot({ children, className, ...props }: CounterRootProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg border border-[var(--counter-border,hsl(var(--contrast-100)))] bg-[var(--counter-background,hsl(var(--background)))] font-[var(--counter-font-family,var(--font-family-body))] text-[var(--counter-text,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="counter-root"
      {...props}
    >
      {children}
    </div>
  );
}
