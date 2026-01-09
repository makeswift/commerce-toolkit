import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export type InputRootProps = ComponentProps<'div'> & {
  prepend?: ReactNode;
};

export function InputRoot({ className, children, prepend, ...props }: InputRootProps) {
  return (
    <div
      className={cn(
        'group/input relative overflow-hidden rounded-lg border border-[var(--input-light-border,var(--contrast-100))] bg-[var(--input-light-background,var(--background))] transition-colors duration-200',
        // Focus-within state
        'focus-within:border-[var(--input-light-focus,var(--foreground))]',
        // Aria-invalid state
        'aria-invalid:border-[var(--input-light-border-error,var(--error))]',
        className,
      )}
      data-prepend={prepend != null && prepend !== '' ? '' : undefined}
      data-slot="input-root"
      {...props}
    >
      {children}
    </div>
  );
}
