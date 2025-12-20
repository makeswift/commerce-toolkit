import { CheckCircle, CircleAlert } from 'lucide-react';
import type { ComponentProps } from 'react';

import * as FormStatusPrimitive from '@/components/form-status';

export type FormStatusProps = ComponentProps<'div'> & {
  type?: 'error' | 'success';
  colorScheme?: 'light' | 'dark';
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --form-status-light-background-error: var(--error-highlight);
 *    --form-status-light-text-error: var(--error-shadow);
 *    --form-status-light-background-success: var(--success-highlight);
 *    --form-status-light-text-success: var(--success-shadow);
 *    --form-status-dark-background-error: var(--error-highlight);
 *    --form-status-dark-text-error: var(--error-shadow);
 *    --form-status-dark-background-success: var(--success-highlight);
 *    --form-status-dark-text-success: var(--success-shadow);
 *  }
 * ```
 */
export function FormStatus({
  className,
  children,
  type = 'success',
  colorScheme = 'light',
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  type?: 'error' | 'success';
  colorScheme?: 'light' | 'dark';
}) {
  return (
    <FormStatusPrimitive.Root
      className={className}
      colorScheme={colorScheme}
      type={type}
      {...props}
    >
      {type === 'error' && (
        <CircleAlert absoluteStrokeWidth className="shrink-0" size={20} strokeWidth={1.5} />
      )}
      {type === 'success' && (
        <CheckCircle absoluteStrokeWidth className="shrink-0" size={20} strokeWidth={1.5} />
      )}
      {children}
    </FormStatusPrimitive.Root>
  );
}
