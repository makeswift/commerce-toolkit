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
        'absolute left-0 top-0 flex w-full flex-col gap-4 p-3 duration-75 ease-linear',
        // Motion state
        'data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=from-end]:fade-in data-[motion=from-start]:fade-in',
        'data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=to-end]:fade-out data-[motion=to-start]:fade-out',
        // Container queries
        '@lg:flex-row @xl:gap-6 @2xl:gap-8 @2xl:p-5 @4xl:gap-10',
        className,
      )}
      data-slot="navigation-menu-content"
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  );
}
