import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuGridLabelProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export function NavigationMenuGridLabel({
  className,
  children,
  ...props
}: NavigationMenuGridLabelProps) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        'block rounded-lg bg-[var(--nav-grid-label-background,transparent)] px-3 py-2 font-[family-name:var(--nav-grid-label-font-family,var(--font-family-body))] text-sm font-semibold text-[var(--nav-grid-label-text,var(--foreground))] transition-colors',
        // Hover state
        'hover:bg-[var(--nav-grid-label-background-hover,var(--contrast-100))] hover:text-[var(--nav-grid-label-text-hover,var(--foreground))]',
        // Focus-visible state
        'focus-visible:bg-[var(--nav-grid-label-background-hover,var(--contrast-100))] focus-visible:text-[var(--nav-grid-label-text-hover,var(--foreground))] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--nav-focus,var(--primary))]',
        className,
      )}
      data-slot="navigation-menu-grid-label"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
