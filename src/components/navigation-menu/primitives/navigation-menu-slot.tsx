import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuSlotProps = ComponentProps<'div'>;

export function NavigationMenuSlot({ className, children, ...props }: NavigationMenuSlotProps) {
  return (
    <div
      className={cn(
        // Base layout
        'w-full flex-auto @lg:max-w-56 @2xl:max-w-72',
        className,
      )}
      data-slot="navigation-menu-slot"
      {...props}
    >
      {children}
    </div>
  );
}
