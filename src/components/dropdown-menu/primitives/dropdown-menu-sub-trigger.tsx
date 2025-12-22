import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface DropdownMenuSubTriggerProps
  extends ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  variant?: 'default' | 'danger';
}

export function DropdownMenuSubTrigger({
  children,
  variant = 'default',
  className,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        'flex h-9 cursor-pointer select-none items-center rounded-lg bg-[var(--dropdown-menu-item-background,transparent)] pl-3 pr-1 outline-none transition-colors',
        // Font styles
        'font-[family-name:var(--dropdown-menu-item-font-family,var(--font-family-body))] text-sm font-normal',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Default variant styles
        'data-[variant=default]:text-[var(--dropdown-menu-item-text,hsl(var(--contrast-500)))] data-[variant=default]:[&:not([data-disabled])]:focus:bg-[var(--dropdown-menu-item-background-hover,hsl(var(--contrast-100)))] data-[variant=default]:[&:not([data-disabled])]:focus:text-[var(--dropdown-menu-item-text-hover,hsl(var(--foreground)))]',
        // Danger variant styles
        'data-[variant=danger]:text-[var(--dropdown-menu-item-danger-text,hsl(var(--error)))] data-[variant=danger]:[&:not([data-disabled])]:focus:bg-[var(--dropdown-menu-item-danger-background-hover,color-mix(in_oklab,hsl(var(--error)),white_75%))] data-[variant=danger]:[&:not([data-disabled])]:focus:text-[var(--dropdown-menu-item-danger-text-hover,color-mix(in_oklab,hsl(var(--error)),black_75%))]',
        className,
      )}
      data-slot="dropdown-menu-sub-trigger"
      data-variant={variant}
      {...props}
    >
      <div className="flex flex-1 items-center justify-between gap-2">
        {children}
        <span className="flex size-6 items-center justify-center">
          <ChevronRight absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </span>
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  );
}
