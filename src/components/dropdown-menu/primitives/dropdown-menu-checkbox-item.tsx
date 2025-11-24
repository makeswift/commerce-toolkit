import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface DropdownMenuCheckboxItemProps
  extends ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> {
  variant?: 'default' | 'danger';
}

export function DropdownMenuCheckboxItem({
  className,
  variant = 'default',
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      checked={checked}
      className={cn(
        'flex h-9 w-full cursor-pointer select-none items-center rounded-lg bg-[var(--dropdown-menu-item-background,transparent)] pl-3 pr-1.5 outline-none transition-colors',
        // Font styles
        'font-[family-name:var(--dropdown-menu-item-font-family,var(--font-family-body))] text-sm font-medium',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Default variant styles
        'data-[variant=default]:text-[var(--dropdown-menu-item-text,hsl(var(--contrast-500)))] data-[variant=default]:[&:not([data-disabled])]:focus:bg-[var(--dropdown-menu-item-background-hover,hsl(var(--contrast-100)))] data-[variant=default]:[&:not([data-disabled])]:focus:text-[var(--dropdown-menu-item-text-hover,hsl(var(--foreground)))]',
        // Danger variant styles
        'data-[variant=danger]:text-[var(--dropdown-menu-item-danger-text,hsl(var(--error)))] data-[variant=danger]:[&:not([data-disabled])]:focus:bg-[var(--dropdown-menu-item-danger-background-hover,color-mix(in_oklab,hsl(var(--error)),white_75%))] data-[variant=danger]:[&:not([data-disabled])]:focus:text-[var(--dropdown-menu-item-danger-text-hover,color-mix(in_oklab,hsl(var(--error)),black_75%))]',
        className,
      )}
      data-slot="dropdown-menu-checkbox-item"
      data-variant={variant}
      {...props}
    >
      <div className="flex flex-1 items-center justify-between gap-2">
        {children}
        <span className="flex size-6 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <Check absoluteStrokeWidth size={16} strokeWidth={1.5} />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </div>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
