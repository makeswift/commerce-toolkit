import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationRootProps = ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
  columns?: 3 | 4 | 5 | 6;
};

export function NavigationRoot({
  children,
  className,
  viewport,
  columns = 5,
  ...props
}: NavigationRootProps) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        // Base layout
        'group/navigation-menu relative flex w-full flex-1 items-center justify-center',
        className,
      )}
      data-columns={columns}
      data-slot="navigation-menu-root"
      data-viewport={viewport}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
}
