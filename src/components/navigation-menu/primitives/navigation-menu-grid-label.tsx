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
        'focus-primary block rounded-lg px-3 py-2 text-sm font-semibold text-[--navigation-menu-text-primary,var(--text-primary)] transition-colors [font-family:var(--navigation-menu-font,var(--font-body))]',
        // Hover state
        'hover:bg-[--navigation-menu-fill-hover,var(--contrast-100)] hover:text-[var(--navigation-menu-text-hover,var(--primary-text))]',
        // Focus-visible state
        'focus-visible:bg-[--navigation-menu-fill-hover,var(--contrast-100)] focus-visible:text-[--navigation-menu-text-hover,var(--primary-text)]',
        className,
      )}
      data-slot="navigation-menu-grid-label"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
