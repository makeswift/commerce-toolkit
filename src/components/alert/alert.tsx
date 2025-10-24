import { clsx } from 'clsx';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

import { Button } from '@/components/button';

export interface AlertProps {
  variant: 'success' | 'warning' | 'error' | 'info';
  message: ReactNode;
  description?: string;
  dismissLabel?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
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
export function Alert({
  variant,
  message,
  description,
  action,
  dismissLabel = 'Dismiss',
  onDismiss,
}: AlertProps) {
  return (
    <div
      className={clsx(
        'flex max-w-[356px] items-center justify-between gap-2 rounded-xl border border-[var(--alert-border,color-mix(in_oklab,hsl(var(--foreground))_10%,transparent))] py-3 pe-3 ps-4 shadow',
        {
          success:
            'bg-[var(--alert-success-background,color-mix(in_oklab,hsl(var(--success)),white_75%))]',
          warning:
            'bg-[var(--alert-warning-background,color-mix(in_oklab,hsl(var(--warning)),white_75%))]',
          error:
            'bg-[var(--alert-error-background,color-mix(in_oklab,hsl(var(--error)),white_75%))]',
          info: 'bg-[var(--alert-info-background,hsl(var(--background)))]',
        }[variant],
      )}
      role="alert"
    >
      <div className="font-[var(--alert-font-family,var(--font-family-body))]">
        <h5 className="text-sm font-normal text-[var(--alert-message-text,hsl(var(--foreground)))]">
          {message}
        </h5>
        {Boolean(description) && (
          <p className="text-xs font-medium text-[var(--alert-description-text,color-mix(in_oklab,hsl(var(--foreground))_50%,transparent))]">
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-1">
        {action && (
          <Button onClick={action.onClick} size="x-small" variant="ghost">
            {action.label}
          </Button>
        )}
        <Button
          aria-label={dismissLabel}
          onClick={onDismiss}
          shape="circle"
          size="x-small"
          variant="ghost"
        >
          <X size={20} strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
