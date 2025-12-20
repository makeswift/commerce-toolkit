import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuPanelProps = ComponentProps<'div'>;

export function NavigationMenuPanel({ children, className, ...props }: NavigationMenuPanelProps) {
  return (
    <div
      className={cn(
        // Base layout
        'absolute left-0 right-0 top-full z-50 mx-auto w-full max-w-5xl',
        className,
      )}
      data-slot="navigation-menu-panel"
      {...props}
    >
      {children}
    </div>
  );
}
