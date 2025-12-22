import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export type InputRootProps = ComponentProps<'div'> & {
  prepend?: ReactNode;
};

export function InputRoot({ className, children, prepend, ...props }: InputRootProps) {
  return (
    <div
      className={cn(
        // Base layout
        'group/input relative overflow-hidden',
        // Colors
        'border-[var(--input-light-border,hsl(var(--contrast-100)))] bg-[var(--input-light-background,hsl(var(--background)))]',
        // Borders & rounded
        'rounded-lg border',
        // Transitions
        'transition-colors duration-200',
        // Focus state
        'focus:outline-none',
        // Focus-within state
        'focus-within:border-[var(--input-light-focus,hsl(var(--foreground)))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--input-light-border-error,hsl(var(--error)))]',
        className,
      )}
      data-prepend={prepend != null && prepend !== '' ? '' : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
