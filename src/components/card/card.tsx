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
 *   --card-focus: hsl(var(--primary));
 *   --card-border-color: hsl(var(--contrast-200));
 *   --card-background: hsl(var(--background));
 *   --card-hover-background: color-mix(in oklab, hsl(var(--contrast-100)) 50%,transparent);
 * }
 * ```
 */
export function Card({ as, className, children, link, ...props }: CardProps) {
  return (
    <CardPrimitive.Root as={as} className={className} {...props}>
      {children}
      {link && (
        <CardPrimitive.Link href={link.href}>
          <span className="sr-only">{link.ariaLabel}</span>
        </CardPrimitive.Link>
      )}
    </CardPrimitive.Root>
  );
}
