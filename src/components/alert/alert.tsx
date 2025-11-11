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
export function Alert({ className, variant, message, description, action, dismiss }: AlertProps) {
  return (
    <AlertPrimitive.Provider
      action={action}
      description={description}
      dismiss={dismiss}
      message={message}
      variant={variant}
    >
      <AlertPrimitive.Root className={className}>
        <AlertPrimitive.Header>
          <AlertPrimitive.Title />
          <AlertPrimitive.Description />
        </AlertPrimitive.Header>
        <AlertPrimitive.Actions>
          <AlertPrimitive.Button />
          <AlertPrimitive.CloseButton />
        </AlertPrimitive.Actions>
      </AlertPrimitive.Root>
    </AlertPrimitive.Provider>
  );
}
