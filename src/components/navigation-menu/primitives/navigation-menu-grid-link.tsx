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
        'focus-primary block rounded-lg px-3 py-2 text-sm font-medium text-[--navigation-menu-text-secondary,var(--text-secondary)] transition-colors [font-family:var(--navigation-menu-font,var(--font-body))]',
        // Hover state
        'hover:bg-[--navigation-menu-fill-hover,var(--contrast-100)] hover:text-[--navigation-menu-text-hover,var(--text-primary)]',
        // Focus-visible state
        'focus-visible:bg-[--navigation-menu-fill-hover,var(--contrast-100)] focus-visible:text-[--navigation-menu-text-hover,var(--text-primary)]',
        className,
      )}
      data-slot="navigation-menu-grid-link"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
