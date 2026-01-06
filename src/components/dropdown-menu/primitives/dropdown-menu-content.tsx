'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

import { useDropdownMenu } from '@/components/dropdown-menu';
import { cn } from '@/lib';

export type DropdownMenuContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content>;

export function DropdownMenuContent({ className, children, ...props }: DropdownMenuContentProps) {
  const { align, sideOffset } = useDropdownMenu();

  return (
    <DropdownMenuPrimitive.Content
      align={align}
      className={cn(
        'z-50 min-w-32 rounded-2xl border border-[var(--dropdown-menu-border,var(--contrast-100))] bg-[var(--dropdown-menu-background,var(--background))] shadow-xl',
        // Open styles
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        // Closed styles
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        className,
      )}
      data-slot="dropdown-menu-content"
      sideOffset={sideOffset}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
}
