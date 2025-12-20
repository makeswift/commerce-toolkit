import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuViewportProps = ComponentProps<typeof NavigationMenuPrimitive.Viewport>;

export function NavigationMenuViewport({
  className,
  children,
  ...props
}: NavigationMenuViewportProps) {
  return (
    <NavigationMenuPrimitive.Viewport
      className={cn(
        // Base layout
        'origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden',
        // Colors
        'bg-[var(--nav-viewport-background,hsl(var(--background)))] text-[var(--nav-text,hsl(var(--foreground)))]',
        // Borders & rounded
        'rounded-3xl border border-[var(--nav-viewport-border,color-mix(in_oklab,hsl(var(--foreground))_15%,transparent))]',
        // Effects
        'shadow',
        // Closed state
        'data-[state=closed]:animate-out data-[state=closed]:zoom-out-95',
        // Open state
        'data-[state=open]:animate-in data-[state=open]:zoom-in-90',
        className,
      )}
      data-slot="navigation-menu-viewport"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Viewport>
  );
}
