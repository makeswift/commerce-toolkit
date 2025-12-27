import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        'group/navigation-menu-link inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-semibold text-[var(--nav-link-text,var(--foreground))] outline-none transition-[color,box-shadow] duration-200 [font-family:var(--nav-link-font-family,var(--font-family-body))]',
        // Hover state
        'hover:bg-[var(--nav-link-background-hover,var(--contrast-100))] hover:text-[var(--nav-link-text-hover,var(--foreground))]',
        // Focus state
        'focus:bg-[var(--nav-link-background-hover,var(--contrast-100))] focus:text-[var(--nav-link-text-hover,var(--foreground))]',
        // Focus-visible state
        'focus-visible:outline-2 focus-visible:outline-[var(--nav-focus,var(--brand))]',
        className,
      )}
      data-slot="navigation-menu-link"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
