import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TextareaProps = ComponentProps<'textarea'>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border border-[var(--textarea-light-border,var(--contrast-100))] bg-[var(--textarea-light-background,var(--background))] p-3 text-sm font-normal text-[var(--textarea-light-text,var(--foreground))] placeholder-[var(--textarea-light-placeholder,var(--contrast-300))] transition-colors duration-200',
        // Focus state
        'focus:border-[var(--textarea-light-focus,var(--foreground))] focus:outline-none',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Aria-invalid state
        'aria-invalid:border-[var(--textarea-light-border-error,var(--error))]',
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  );
}
