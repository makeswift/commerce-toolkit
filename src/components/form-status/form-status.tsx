import { CheckCircle, CircleAlert } from 'lucide-react';
import type { ComponentProps } from 'react';

import * as FormStatusPrimitive from '@/components/form-status';

export type FormStatusProps = ComponentProps<'div'> & {
  type?: 'error' | 'success';
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --form-status-background-error: var(--error-highlight);
 *    --form-status-text-error: var(--error-shadow);
 *    --form-status-background-success: var(--success-highlight);
 *    --form-status-text-success: var(--success-shadow);
 *  }
 * ```
 */
export function FormStatus({
  className,
  children,
  type = 'success',
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  type?: 'error' | 'success';
}) {
  return (
    <FormStatusPrimitive.Root className={className} type={type} {...props}>
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
