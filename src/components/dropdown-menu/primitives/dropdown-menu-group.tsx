import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type DropdownMenuGroupProps = ComponentProps<typeof DropdownMenuPrimitive.Group>;

export function DropdownMenuGroup({ className, ...props }: DropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group
      className={cn('flex flex-col gap-0.5', className)}
      data-slot="dropdown-menu-group"
      {...props}
    />
  );
}
