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
        // Base layout
        'group inline-flex h-9 w-max items-center justify-center rounded-full bg-[var(--nav-link-background,transparent)] px-4 py-2',
        // Typography
        'text-sm font-semibold text-[var(--nav-link-text,hsl(var(--foreground)))] outline-none transition-colors duration-200 [font-family:var(--nav-link-font-family,var(--font-family-body))]',
        // Background
        'bg-background',
        // Transitions
        'outline-none transition-[color,box-shadow]',
        // Hover state
        'hover:bg-[var(--nav-link-background-hover,hsl(var(--contrast-100)))] hover:text-[var(--nav-link-text-hover,hsl(var(--foreground)))]',
        // Focus state
        'focus:bg-[var(--nav-link-background-hover,hsl(var(--contrast-100)))] focus:text-[var(--nav-link-text-hover,hsl(var(--foreground)))]',
        // Focus-visible state
        'focus-visible:outline-2 focus-visible:outline-[var(--nav-focus,hsl(var(--primary)))]',
        // Open state
        'data-[state=open]:bg-contrast-100/50 data-[state=open]:text-foreground',
        'data-[state=open]:hover:bg-contrast-100 data-[state=open]:focus:bg-contrast-100',
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
