import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuPrimitive.List>;

export function NavigationMenuList({ children, className, ...props }: NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        'group/navigation-menu-list flex w-full flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      data-slot="navigation-menu-list"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
}
