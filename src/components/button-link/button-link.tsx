import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export interface ButtonLinkProps extends ComponentProps<'a'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'large' | 'medium' | 'small' | 'x-small';
  shape?: 'pill' | 'rounded' | 'square' | 'circle';
  render?: (props: ComponentProps<'a'> & { children: ReactNode }) => ReactNode;
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
  render,
  ...props
}: ButtonLinkProps) {
  const linkClassName = cn(
    'relative z-0 inline-flex h-fit select-none items-center justify-center overflow-hidden border text-center font-semibold leading-normal [font-family:var(--button-font-family,var(--font-family-body))] after:absolute after:inset-0 after:-z-10 after:-translate-x-[105%] after:transition after:duration-300 after:[animation-timing-function:cubic-bezier(0,0.25,0,1)] hover:after:translate-x-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus,hsl(var(--primary)))] focus-visible:ring-offset-2',
    {
      primary:
        'border-[var(--button-primary-border,hsl(var(--primary)))] bg-[var(--button-primary-background,hsl(var(--primary)))] text-[var(--button-primary-text,hsl(var(--foreground)))] after:bg-[var(--button-primary-background-hover,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
      secondary:
        'border-[var(--button-secondary-border,hsl(var(--foreground)))] bg-[var(--button-secondary-background,hsl(var(--foreground)))] text-[var(--button-secondary-text,hsl(var(--background)))] after:bg-[var(--button-secondary-background-hover,hsl(var(--background)))]',
      tertiary:
        'border-[var(--button-tertiary-border,hsl(var(--contrast-200)))] bg-[var(--button-tertiary-background,hsl(var(--background)))] text-[var(--button-tertiary-text,hsl(var(--foreground)))] after:bg-[var(--button-tertiary-background-hover,hsl(var(--contrast-100)))]',
      ghost:
        'border-[var(--button-ghost-border,transparent)] bg-[var(--button-ghost-background,transparent)] text-[var(--button-ghost-text,hsl(var(--foreground)))] after:bg-[var(--button-ghost-background-hover,color-mix(in_oklab,hsl(var(--foreground))_5%,transparent))]',
    }[variant],
    {
      pill: 'rounded-full after:rounded-full',
      rounded: 'rounded-lg after:rounded-lg',
      square: 'rounded-none after:rounded-none',
      circle: 'rounded-full after:rounded-full',
    }[shape],
    className,
  );

  const computedChildren = (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        shape === 'circle' && 'aspect-square',
        {
          'x-small': 'min-h-8 text-xs',
          small: 'min-h-10 text-sm',
          medium: 'min-h-12 text-base',
          large: 'min-h-14 text-base',
        }[size],
        shape !== 'circle' &&
          {
            'x-small': 'gap-x-2 px-3 py-1.5',
            small: 'gap-x-2 px-4 py-2.5',
            medium: 'gap-x-2.5 px-5 py-3',
            large: 'gap-x-3 px-6 py-4',
          }[size],
        variant === 'secondary' && 'mix-blend-difference',
      )}
    >
      {children}
    </span>
  );

  function renderLink() {
    if (render) {
      return render({
        ...props,
        className: linkClassName,
        children: computedChildren,
      });
    }

    return (
      <a {...props} className={linkClassName}>
        {computedChildren}
      </a>
    );
  }

  return <>{renderLink()}</>;
}
