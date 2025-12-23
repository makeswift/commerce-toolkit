import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        'group inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-semibold text-[var(--nav-link-text,hsl(var(--foreground)))] outline-none transition-[color,box-shadow] duration-200 [font-family:var(--nav-link-font-family,var(--font-family-body))]',
        // Hover state
        'hover:bg-[var(--nav-link-background-hover,hsl(var(--contrast-100)))] hover:text-[var(--nav-link-text-hover,hsl(var(--foreground)))]',
        // Focus state
        'focus:bg-[var(--nav-link-background-hover,hsl(var(--contrast-100)))] focus:text-[var(--nav-link-text-hover,hsl(var(--foreground)))]',
        // Focus-visible state
        'focus-visible:outline-2 focus-visible:outline-[var(--nav-focus,hsl(var(--primary)))]',
        className,
      )}
      data-slot="navigation-menu-link"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
