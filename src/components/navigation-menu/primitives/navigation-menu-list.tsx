import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuPrimitive.List>;

export function NavigationMenuList({ children, className, ...props }: NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        // Base layout
        'group flex w-full flex-1 list-none items-center justify-center',
        className,
      )}
      data-slot="navigation-menu-list"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
}
