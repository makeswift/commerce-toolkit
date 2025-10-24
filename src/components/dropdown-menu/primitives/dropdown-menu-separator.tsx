import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import type { ComponentProps } from 'react';

export type DropdownMenuSeparatorProps = ComponentProps<typeof DropdownMenuPrimitive.Separator>;

export function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={clsx(
        'relative my-1.5 after:absolute after:-left-2 after:-right-5 after:h-px after:bg-[var(--dropdown-menu-seperator,var(--contrast-100))]',
        className,
      )}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
}
