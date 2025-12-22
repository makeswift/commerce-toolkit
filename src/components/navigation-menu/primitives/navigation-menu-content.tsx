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
        'absolute left-0 top-0 flex w-full flex-col gap-4 duration-75 ease-linear @lg:flex-row @xl:gap-6 @2xl:gap-8 @4xl:gap-10',
        // Spacing
        'p-3 @2xl:p-5',
        // Motion transitions - fade in when entering
        'data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in',
        'data-[motion=from-end]:animate-in data-[motion=from-end]:fade-in',
        // Motion transitions - fade out when exiting
        'data-[motion=to-start]:animate-out data-[motion=to-start]:fade-out',
        'data-[motion=to-end]:animate-out data-[motion=to-end]:fade-out',
        className,
      )}
      data-slot="navigation-menu-content"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  );
}
