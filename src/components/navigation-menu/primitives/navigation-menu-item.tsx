import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuItemProps = ComponentProps<typeof NavigationMenuPrimitive.Item>;

export function NavigationMenuItem({ children, className, ...props }: NavigationMenuItemProps) {
  return (
    <NavigationMenuPrimitive.Item
      className={cn(
        // Base layout
        'relative',
        className,
      )}
      data-slot="navigation-menu-item"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Item>
  );
}
