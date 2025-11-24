import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type DropdownMenuLabelProps = ComponentProps<typeof DropdownMenuPrimitive.Label>;

export function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn('sr-only', className)}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}
