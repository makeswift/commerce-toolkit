import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuContentProps = ComponentProps<typeof NavigationMenuPrimitive.Content>;

export function NavigationMenuContent({
  className,
  children,
  ...props
}: NavigationMenuContentProps) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        // Base layout
        'flex w-full gap-5 @container',
        // Spacing
        'p-5',
        className,
      )}
      data-slot="navigation-menu-content"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  );
}
