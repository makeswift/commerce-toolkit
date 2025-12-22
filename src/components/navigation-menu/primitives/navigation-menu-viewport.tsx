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
        'origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-2xl bg-[var(--nav-viewport-background,hsl(var(--background)))] text-[var(--nav-text,hsl(var(--foreground)))] shadow-xl ring-1 ring-black/5 @container [transition:height_200ms_ease-in-out,opacity_75ms_ease-in-out]',
        // Closed state
        'data-[state=closed]:animate-out data-[state=closed]:fade-out',
        // Open state
        'data-[state=open]:animate-in data-[state=open]:fade-in',
        // Responsive
        'md:rounded-3xl',
        className,
      )}
      data-slot="navigation-menu-viewport"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Viewport>
  );
}
