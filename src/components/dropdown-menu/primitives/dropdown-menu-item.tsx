import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface DropdownMenuItemProps extends ComponentProps<typeof DropdownMenuPrimitive.Item> {
  variant?: 'default' | 'danger';
}

export function DropdownMenuItem({
  className,
  variant = 'default',
  children,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'flex h-9 cursor-pointer select-none items-center rounded-lg py-2 pl-3 pr-5 outline-none transition-colors',
        // Font styles
        'text-sm font-medium [font-family:var(--dropdown-menu-font,var(--font-body))]',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Default variant styles
        'data-[variant=default]:text-[--dropdown-menu-text,var(--text-secondary)] data-[variant=default]:[&:not([data-disabled])]:focus:bg-[--dropdown-menu-fill-hover,var(--contrast-100)] data-[variant=default]:[&:not([data-disabled])]:focus:text-[--dropdown-menu-text-hover,var(--primary-text)]',
        // Danger variant styles
        'data-[variant=danger]:text-[--dropdown-menu-text-error,var(--error)] data-[variant=danger]:[&:not([data-disabled])]:focus:bg-[--dropdown-menu-fill-error,var(--error-background)] data-[variant=danger]:[&:not([data-disabled])]:focus:text-[--dropdown-menu-text-error-hover,var(--error-foreground)]',
        className,
      )}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">{children}</div>
    </DropdownMenuPrimitive.Item>
  );
}
