import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps, ReactNode } from 'react';

import { DropdownMenuSubIndicator } from '@/components/dropdown-menu/primitives/dropdown-menu-sub-indicator';
import { cn } from '@/lib';

export interface DropdownMenuSubTriggerProps
  extends ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
  variant?: 'default' | 'danger';
  indicator?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export function DropdownMenuSubTrigger({
  children,
  variant = 'default',
  className,
  indicator,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        'flex h-9 cursor-pointer select-none items-center rounded-lg pl-3 pr-1 outline-none transition-colors',
        // Font styles
        'text-sm font-normal [font-name:var(--dropdown-menu-font,var(--font-body))]',
        // Disabled styles
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        // Default variant styles
        'data-[variant=default]:text-[--dropdown-menu-text,var(--text-secondary)] data-[variant=default]:[&:not([data-disabled])]:focus:bg-[--dropdown-menu-fill-hover,var(--contrast-100)] data-[variant=default]:[&:not([data-disabled])]:focus:text-[--dropdown-menu-text-hover,var(--text-primary)]',
        // Danger variant styles
        'data-[variant=danger]:text-[--dropdown-menu-text-error,var(--error)] data-[variant=danger]:[&:not([data-disabled])]:focus:bg-[--dropdown-menu-fill-error,var(--error-background)] data-[variant=danger]:[&:not([data-disabled])]:focus:text-[--dropdown-menu-text-error-hover,var(--error-foreground)]',
        className,
      )}
      data-slot="dropdown-menu-sub-trigger"
      data-variant={variant}
      {...props}
    >
      <div className="flex flex-1 items-center justify-between gap-2">
        {children}
        <span className="flex size-6 items-center justify-center">
          <DropdownMenuSubIndicator asChild={indicator?.asChild}>
            {indicator?.children}
          </DropdownMenuSubIndicator>
        </span>
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  );
}
