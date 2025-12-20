import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuSlotProps = ComponentProps<'div'>;

export function NavigationMenuSlot({ className, children, ...props }: NavigationMenuSlotProps) {
  return (
    <div
      className={cn(
        // Base layout
        'w-full max-w-72 flex-auto',
        className,
      )}
      data-slot="navigation-menu-slot"
      {...props}
    >
      {children}
    </div>
  );
}
