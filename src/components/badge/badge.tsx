import { clsx } from 'clsx';

export interface BadgeProps {
  children: string;
  shape?: 'pill' | 'rounded';
  variant?: 'primary' | 'warning' | 'error' | 'success' | 'info';
  className?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --badge-primary-background: color-mix(in oklab, hsl(var(--primary)), white 75%);
 *   --badge-success-background: color-mix(in oklab, hsl(var(--success)), white 75%);
 *   --badge-warning-background: color-mix(in oklab, hsl(var(--warning)), white 75%);
 *   --badge-error-background: color-mix(in oklab, hsl(var(--error)), white 75%);
 *   --badge-info-background: color-mix(in oklab, hsl(var(--info)), white 75%);
 *   --badge-text: hsl(var(--foreground));
 *   --badge-font-family: var(--font-family-mono);
 * }
 * ```
 */
export function Badge({ children, shape = 'rounded', className, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'px-2 py-0.5 text-xs font-[var(--badge-font-family,var(--font-family-mono))] uppercase tracking-tighter text-[var(--badge-text,hsl(var(--foreground)))]',
        {
          pill: 'rounded-full',
          rounded: 'rounded',
        }[shape],
        {
          primary:
            'bg-[var(--badge-primary-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
          warning:
            'bg-[var(--badge-warning-background,color-mix(in_oklab,hsl(var(--warning)),white_75%))]',
          error:
            'bg-[var(--badge-error-background,color-mix(in_oklab,hsl(var(--error)),white_75%))]',
          success:
            'bg-[var(--badge-success-background,color-mix(in_oklab,hsl(var(--success)),white_75%))]',
          info: 'bg-[var(--badge-info-background,color-mix(in_oklab,hsl(var(--info)),white_75%))]',
        }[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
