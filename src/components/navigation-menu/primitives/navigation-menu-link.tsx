import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        'group/navigation-menu-link focus-primary inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-semibold text-[--navigation-menu-text-primary,var(--text-primary)] outline-none transition-[color,box-shadow] duration-200 [font-family:var(--navigation-menu-font,var(--font-body))]',
        // Hover state
        'hover:bg-[--navigation-menu-fill-hover,var(--contrast-100)] hover:text-[--navigation-menu-text-hover,var(--text-primary)]',
        // Focus state
        'focus:bg-[--navigation-menu-fill-hover,var(--contrast-100)] focus:text-[--navigation-menu-text-hover,var(--text-primary)]',
        className,
      )}
      data-slot="navigation-menu-link"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
