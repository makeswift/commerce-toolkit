import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type TextareaProps = ComponentProps<'textarea'>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --textarea-fill: var(--form-fill);
 *   --textarea-fill-disabled: var(--form-fill-disabled);
 *   --textarea-text: var(--form-text-primary);
 *   --textarea-text-placeholder: var(--form-text-placeholder);
 *   --textarea-font: var(--font-body);
 * }
 * ```
 */
export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border border-[--border-subtle] bg-[--textarea-fill,var(--form-fill)] p-3 text-sm text-[--textarea-text,var(--form-text-primary)] placeholder-[--textarea-text-placeholder,var(--form-text-placeholder)] transition-colors duration-200 [font-family:var(--textarea-font,var(--font-body))]',
        // Focus state
        'focus:border-[--border-focus-secondary] focus:outline-none',
        // Disabled state
        'disabled:cursor-not-allowed disabled:bg-[--textarea-fill-disabled,var(--form-fill-disabled)] disabled:opacity-50',
        // Aria-invalid state
        'aria-invalid:border-[--border-error]',
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  );
}
