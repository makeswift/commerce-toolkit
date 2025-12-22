import { Slot, Slottable } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface ButtonLinkProps extends ComponentProps<'a'> {
  variant?: 'primary' | 'brand' | 'outline' | 'ghost' | 'danger';
  size?: 'large' | 'medium' | 'small' | 'x-small';
  shape?: 'pill' | 'rounded' | 'square' | 'circle';
  asChild?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --button-focus: hsl(var(--primary));
 *   --button-font-family: var(--font-family-body);
 *   --button-primary-background: hsl(var(--primary));
 *   --button-primary-background-hover: color-mix(in oklab, hsl(var(--primary)), white 75%);
 *   --button-primary-text: hsl(var(--foreground));
 *   --button-primary-border: hsl(var(--primary));
 *   --button-secondary-background: hsl(var(--foreground));
 *   --button-secondary-background-hover: hsl(var(--background));
 *   --button-secondary-text: hsl(var(--background));
 *   --button-secondary-border: hsl(var(--foreground));
 *   --button-tertiary-background: hsl(var(--background));
 *   --button-tertiary-background-hover: hsl(var(--contrast-100));
 *   --button-tertiary-text: hsl(var(--foreground));
 *   --button-tertiary-border: hsl(var(--contrast-200));
 *   --button-ghost-background: transparent;
 *   --button-ghost-background-hover: color-mix(in oklab, hsl(var(--foreground)) 5%, transparent);
 *   --button-ghost-text: hsl(var(--foreground));
 *   --button-ghost-border: transparent;
 * }
 * ```
 */
export function ButtonLink({
  variant = 'primary',
  size = 'large',
  shape = 'pill',
  className,
  children,
  asChild = false,
  ...props
}: ButtonLinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn(
        'relative z-0 inline-flex h-fit select-none items-center justify-center overflow-hidden text-center font-semibold leading-normal duration-200 ease-in-out [font-family:var(--button-font-family,var(--font-family-body))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus,hsl(var(--primary)))] disabled:pointer-events-none disabled:opacity-30',
        {
          brand:
            'bg-[var(--button-brand-background,hsl(var(--primary)))] text-[var(--button-brand-text,hsl(var(--foreground)))] hover:opacity-70',
          primary:
            'bg-[var(--button-primary-background,hsl(var(--foreground)))] text-[var(--button-primary-text,hsl(var(--background)))] hover:opacity-70',
          outline:
            'border border-[var(--button-outline-border,hsl(var(--contrast-200)))] bg-[var(--button-outline-background,hsl(var(--background)))] text-[var(--button-outline-text,hsl(var(--foreground)))] hover:bg-foreground/5',
          ghost:
            'bg-transparent text-[var(--button-ghost-text,hsl(var(--foreground)))] hover:bg-foreground/5',
          danger:
            'bg-[var(--button-danger-background,hsl(var(--error)))] text-[var(--button-danger-text,hsl(var(--background)))] hover:opacity-70',
        }[variant],
        shape === 'rounded'
          ? {
              'x-small': 'rounded-lg',
              small: 'rounded-lg',
              medium: 'rounded-xl',
              large: 'rounded-xl',
            }[size]
          : {
              pill: 'rounded-full',
              square: 'rounded-none',
              circle: 'rounded-full',
            }[shape],
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300 ease-in-out',
          shape === 'circle' && 'aspect-square',
          {
            'x-small': 'min-h-8 text-xs',
            small: 'min-h-9 text-sm',
            medium: 'min-h-11 text-base',
            large: 'min-h-14 text-base',
          }[size],
          shape !== 'circle' &&
            {
              'x-small': 'gap-x-2 px-3 py-1.5',
              small: 'gap-x-2 px-3.5 py-2',
              medium: 'gap-x-2.5 px-4 py-2.5',
              large: 'gap-x-3 px-5 py-4',
            }[size],
        )}
      >
        <Slottable>{children}</Slottable>
      </span>
    </Comp>
  );
}
