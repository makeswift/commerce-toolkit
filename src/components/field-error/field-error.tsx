import { CircleAlert } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib';

export type FieldErrorProps = ComponentPropsWithoutRef<'div'>;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --field-error: var(--error);
 *  }
 * ```
 */
export function FieldError({ className, children, ...props }: FieldErrorProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 text-xs text-[var(--field-error,hsl(var(--error)))]',
        className,
      )}
      {...props}
    >
      <CircleAlert size={20} strokeWidth={1.5} />
      {children}
    </div>
  );
}
