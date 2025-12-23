import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuGridProps = ComponentProps<'ul'>;

export function NavigationMenuGrid({ className, children, ...props }: NavigationMenuGridProps) {
  return (
    <ul
      className={cn(
        'grid flex-1 grid-cols-1 gap-3',
        // Container queries
        '@md:grid-cols-2 @xl:gap-5 @4xl:grid-cols-3 @6xl:grid-cols-4',
        className,
      )}
      data-slot="navigation-menu-grid"
      {...props}
    >
      {children}
    </ul>
  );
}
