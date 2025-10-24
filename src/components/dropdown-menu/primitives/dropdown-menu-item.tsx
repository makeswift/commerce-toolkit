import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import type { ComponentProps, ReactNode } from 'react';

export interface DropdownMenuItemProps extends ComponentProps<typeof DropdownMenuPrimitive.Item> {
  variant?: 'default' | 'danger';
  icon?: ReactNode;
}

export function DropdownMenuItem({
  className,
  variant = 'default',
  icon,
  children,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={clsx(
        'flex h-9 cursor-pointer select-none items-center rounded-lg bg-[var(--dropdown-menu-item-background,transparent)] py-2 pl-3 pr-5 outline-none transition-colors',
        // Font styles
        'text-sm font-[var(--dropdown-menu-item-font-family,var(--font-family-body))] font-medium',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Default variant styles
        'data-[variant=default]:text-[var(--dropdown-menu-item-text,var(--contrast-500))] data-[variant=default]:[&:not([data-disabled])]:focus:bg-[var(--dropdown-menu-item-background-hover,var(--contrast-100))] data-[variant=default]:[&:not([data-disabled])]:focus:text-[var(--dropdown-menu-item-text-hover,var(--foreground))]',
        // Danger variant styles
        'data-[variant=danger]:text-[var(--dropdown-menu-item-danger-text,var(--error))] data-[variant=danger]:[&:not([data-disabled])]:focus:bg-[var(--dropdown-menu-item-danger-background-hover,color-mix(in_oklab,_var(--error),_white_75%))] data-[variant=danger]:[&:not([data-disabled])]:focus:text-[var(--dropdown-menu-item-danger-text-hover,color-mix(in_oklab,_var(--error),_black_75%))]',
        className,
      )}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    >
      <div className="flex items-center justify-between gap-2">
        {icon !== undefined && icon}
        {children}
      </div>
    </DropdownMenuPrimitive.Item>
  );
}
