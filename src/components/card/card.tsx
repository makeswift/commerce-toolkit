import type { ComponentProps, ElementType } from 'react';

import * as CardPrimitive from '@/components/card';

export type CardProps<E extends ElementType = 'article'> = Omit<ComponentProps<E>, 'as'> & {
  as?: E;
  link?: {
    href: string;
    ariaLabel: string;
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-focus: var(--primary);
 *   --card-border-color: var(--contrast-200);
 *   --card-background: var(--background);
 *   --card-hover-background: color-mix(in oklab, var(--contrast-100) 50%,transparent);
 * }
 * ```
 */
export function Card({ as, className, children, link, ...props }: CardProps) {
  return (
    <CardPrimitive.Root as={as} className={className} {...props}>
      {children}
      {link && <CardPrimitive.Link aria-label={link.ariaLabel} href={link.href} />}
    </CardPrimitive.Root>
  );
}
