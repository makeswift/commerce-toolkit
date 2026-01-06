import type { MouseEventHandler, ReactNode } from 'react';

import * as AlertPrimitive from '@/components/alert';

export interface AlertProps {
  className?: string;
  message: ReactNode;
  description?: string;
  action?: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  };
  dismiss: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  };
  variant: 'success' | 'warning' | 'error' | 'info';
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --alert-success-background: color-mix(in oklab, var(--success), white 75%);
 *   --alert-warning-background: color-mix(in oklab, var(--warning), white 75%);
 *   --alert-error-background: color-mix(in oklab, var(--error), white 75%);
 *   --alert-info-background: var(--background);
 *   --alert-font-family: var(--font-family-body);
 *   --alert-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *   --alert-message-text: var(--foreground);
 *   --alert-description-text: color-mix(in oklab, var(--foreground) 50%, transparent);
 * }
 * ```
 */
export function Alert({ className, variant, message, description, action, dismiss }: AlertProps) {
  return (
    <AlertPrimitive.Root action={action} className={className} dismiss={dismiss} variant={variant}>
      <AlertPrimitive.Header>
        <AlertPrimitive.Title>{message}</AlertPrimitive.Title>
        <AlertPrimitive.Description>{description}</AlertPrimitive.Description>
      </AlertPrimitive.Header>
      <AlertPrimitive.Actions>
        <AlertPrimitive.Action />
        <AlertPrimitive.Dismiss />
      </AlertPrimitive.Actions>
    </AlertPrimitive.Root>
  );
}
