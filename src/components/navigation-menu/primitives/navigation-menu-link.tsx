import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>;

export function NavigationMenuLink({ className, children, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(className)}
      data-slot="navigation-menu-link"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
}
