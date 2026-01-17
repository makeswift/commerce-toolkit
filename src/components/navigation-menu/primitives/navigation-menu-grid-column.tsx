import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type NavigationMenuGridColumnProps = ComponentProps<'li'>;

export function NavigationMenuGridColumn({
  className,
  children,
  ...props
}: NavigationMenuGridColumnProps) {
  return (
    <li
      className={cn('flex w-full flex-col gap-0.5', className)}
      data-slot="navigation-menu-grid-column"
      {...props}
    >
      {children}
    </li>
  );
}
