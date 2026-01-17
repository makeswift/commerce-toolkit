import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuPrimitive.Trigger>;

export function NavigationMenuTrigger({
  children,
  className,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        'group/navigation-menu-trigger focus-primary inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-4 py-2 text-sm font-semibold text-[--navigation-menu-text-primary,var(--text-primary)] outline-none transition-[color,box-shadow] duration-200 [font-family:var(--navigation-menu-font,var(--font-body))]',
        // Hover state
        'hover:bg-[--navigation-menu-fill-hover,var(--contrast-100)] hover:text-[--navigation-menu-text-hover,var(--text-primary)]',
        // Focus state
        'focus:bg-[--navigation-menu-fill-hover,var(--contrast-100)] focus:text-[--navigation-menu-text-hover,var(--text-primary)]',
        // Open state
        'data-[state=open]:bg-[color-mix(in_oklab,var(--navigation-menu-fill-hover,var(--contrast-100))_50%,transparent)] data-[state=open]:text-[--navigation-menu-text-hover,var(--text-primary)]',
        'data-[state=open]:hover:bg-[--navigation-menu-fill-hover,var(--contrast-100)] data-[state=open]:focus:bg-[--navigation-menu-fill-hover,var(--contrast-100)]',
        // Disabled state
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      data-slot="navigation-menu-trigger"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Trigger>
  );
}
