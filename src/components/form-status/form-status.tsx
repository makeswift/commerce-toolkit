import type { ComponentProps, ReactNode } from 'react';

import * as FormStatusPrimitive from '@/components/form-status';

export interface FormStatusProps extends ComponentProps<'div'> {
  type?: 'error' | 'success';
  errorIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  successIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

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
  errorIcon,
  successIcon,
  ...props
}: FormStatusProps) {
  return (
    <FormStatusPrimitive.Root className={className} type={type} {...props}>
      {type === 'error' && (
        <FormStatusPrimitive.ErrorIcon asChild={errorIcon?.asChild}>
          {errorIcon?.children}
        </FormStatusPrimitive.ErrorIcon>
      )}
      {type === 'success' && (
        <FormStatusPrimitive.SuccessIcon asChild={successIcon?.asChild}>
          {successIcon?.children}
        </FormStatusPrimitive.SuccessIcon>
      )}
      {children}
    </FormStatusPrimitive.Root>
  );
}
