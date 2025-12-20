import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuGridProps = ComponentProps<'ul'>;

export function NavigationMenuGrid({ className, children, ...props }: NavigationMenuGridProps) {
  return (
    <ul
      className={cn(
        // Base layout
        'flex flex-1 flex-wrap gap-5',
        className,
      )}
      data-slot="navigation-menu-grid"
      {...props}
    >
      {children}
    </ul>
  );
}
