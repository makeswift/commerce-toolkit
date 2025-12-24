import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TextareaProps = ComponentProps<'textarea'>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border border-[var(--textarea-light-border,hsl(var(--contrast-100)))] bg-[var(--textarea-light-background,hsl(var(--background)))] p-3 text-sm font-normal text-[var(--textarea-light-text,hsl(var(--foreground)))] placeholder-[var(--textarea-light-placeholder,hsl(var(--contrast-300)))] transition-colors duration-200',
        // Focus state
        'focus:border-[var(--textarea-light-border-focus,hsl(var(--foreground)))] focus:outline-none',
        // Disabled state
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Aria-invalid state
        'aria-invalid:border-[var(--textarea-light-border-error,hsl(var(--error)))]',
        className,
      )}
      {...props}
    />
  );
}
