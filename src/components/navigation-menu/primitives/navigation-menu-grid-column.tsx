import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuGridColumnProps = ComponentProps<'li'>;

export function NavigationMenuGridColumn({
  className,
  children,
  ...props
}: NavigationMenuGridColumnProps) {
  return (
    <li className={cn('w-full', className)} data-slot="navigation-menu-grid-column" {...props}>
      {children}
    </li>
  );
}
