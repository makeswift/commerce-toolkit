import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuGridLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export function NavigationMenuGridLink({
  className,
  children,
  ...props
}: NavigationMenuGridLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        // Base layout
        'rounded-lg',
        // Spacing
        'px-3 py-2',
        // Typography
        'font-[family-name:var(--nav-grid-link-font-family,var(--font-family-body))] text-sm font-semibold',
        // Colors
        'bg-[var(--nav-grid-link-background,transparent)] text-[var(--nav-grid-link-text,hsl(var(--contrast-500)))]',
        // Transitions
        'transition-colors',
        // Hover state
        'hover:bg-[var(--nav-grid-label-background-hover,hsl(var(--contrast-100)))] hover:text-[var(--nav-grid-label-text-hover,hsl(var(--foreground)))]',
        // Focus-visible state
        'focus-visible:bg-[var(--nav-grid-label-background-hover,hsl(var(--contrast-100)))] focus-visible:text-[var(--nav-grid-label-text-hover,hsl(var(--foreground)))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nav-focus,hsl(var(--primary)))]',
        className,
      )}
      data-slot="navigation-menu-grid-link"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
