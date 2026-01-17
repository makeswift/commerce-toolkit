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
 *   --alert-text: var(--text-primary);
 *   --alert-fill-info: var(--background);
 *   --alert-fill-success: var(--success-background);
 *   --alert-fill-warning: var(--warning-background);
 *   --alert-fill-error: var(--error-background);
 *   --alert-font-title: var(--font-body);
 *   --alert-font-description: var(--font-body);
 * }
 * ```
 */
export function Alert({ className, variant, message, description, action, dismiss }: AlertProps) {
  return (
    <AlertPrimitive.Root className={className} variant={variant}>
      <AlertPrimitive.Header>
        <AlertPrimitive.Title>{message}</AlertPrimitive.Title>
        <AlertPrimitive.Description>{description}</AlertPrimitive.Description>
      </AlertPrimitive.Header>
      <AlertPrimitive.Actions>
        {action && (
          <AlertPrimitive.Action onClick={action.onClick}>{action.label}</AlertPrimitive.Action>
        )}
      </AlertPrimitive.Actions>
      <AlertPrimitive.Dismiss onClick={dismiss.onClick} />
    </AlertPrimitive.Root>
  );
}
