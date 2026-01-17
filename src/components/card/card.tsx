import type { ElementType, ReactNode } from 'react';

import * as CardPrimitive from '@/components/card';

export interface CardProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
  link?: {
    href: string;
    ariaLabel: string;
    asChild?: boolean;
    children?: ReactNode;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-fill: var(--background);
 *   --card-fill-hover: color-mix(in oklch,var(--contrast-100) 50%,transparent);
 * }
 * ```
 */
export function Card({ as, className, children, link }: CardProps) {
  return (
    <CardPrimitive.Root as={as} className={className}>
      {children}
      {link && (
        <CardPrimitive.Link aria-label={link.ariaLabel} asChild={link.asChild} href={link.href}>
          {link.children}
        </CardPrimitive.Link>
      )}
    </CardPrimitive.Root>
  );
}
