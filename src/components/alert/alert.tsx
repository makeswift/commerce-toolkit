import type { ReactNode } from 'react';

import * as AlertPrimitive from '.';
import type { AlertRootProps } from './primitives/alert-root';

export type AlertProps = AlertRootProps & {
  message: ReactNode;
  description?: string;
  action?: {
    label: string;
    onClick: AlertPrimitive.ButtonProps['onClick'];
  };
  dismiss: {
    label: string;
    onClick: AlertPrimitive.ButtonProps['onClick'];
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --alert-success-background: color-mix(in oklab, hsl(var(--success)), white 75%);
 *   --alert-warning-background: color-mix(in oklab, hsl(var(--warning)), white 75%);
 *   --alert-error-background: color-mix(in oklab, hsl(var(--error)), white 75%);
 *   --alert-info-background: hsl(var(--background));
 *   --alert-font-family: var(--font-family-body);
 *   --alert-border: color-mix(in oklab, hsl(var(--foreground)) 10%, transparent);
 *   --alert-message-text: hsl(var(--foreground));
 *   --alert-description-text: color-mix(in oklab, hsl(var(--foreground)) 50%, transparent);
 * }
 * ```
 */
export function Alert({ variant, message, description, action, dismiss }: AlertProps) {
  return (
    <AlertPrimitive.Root variant={variant}>
      <AlertPrimitive.Header>
        <AlertPrimitive.Title>{message}</AlertPrimitive.Title>
        {description != null && (
          <AlertPrimitive.Description>{description}</AlertPrimitive.Description>
        )}
      </AlertPrimitive.Header>
      <AlertPrimitive.Actions>
        {action && (
          <AlertPrimitive.Button onClick={action.onClick}>{action.label}</AlertPrimitive.Button>
        )}
        <AlertPrimitive.CloseButton aria-label={dismiss.label} onClick={dismiss.onClick} />
      </AlertPrimitive.Actions>
    </AlertPrimitive.Root>
  );
}
