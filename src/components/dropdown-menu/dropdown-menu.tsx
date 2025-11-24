'use client';

import { EllipsisIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import * as DropdownMenuPrimitive from '@/components/dropdown-menu';
import { cn } from '@/lib';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --dropdown-menu-background: var(--background);
 *   --dropdown-menu-border: var(--contrast-100);
 *   --dropdown-menu-focus: var(--primary);
 *   --dropdown-menu-item-focus: var(--primary);
 *   --dropdown-menu-item-text: var(--contrast-400);
 *   --dropdown-menu-item-text-hover: var(--foreground);
 *   --dropdown-menu-item-danger-text: var(--error);
 *   --dropdown-menu-item-danger-text-hover: color-mix(in oklab, var(--error), black 75%);
 *   --dropdown-menu-item-background: transparent;
 *   --dropdown-menu-item-background-hover: var(--contrast-100);
 *   --dropdown-menu-item-danger-background: var(--error);
 *   --dropdown-menu-item-danger-background-hover: color-mix(in oklab, var(--error), white 75%);
 *   --dropdown-menu-item-font-family: var(--font-family-body);
 *   --dropdown-menu-seperator: var(--contrast-200);
 * }
 * ```
 */

type MenuNode =
  | { type: 'item'; props?: DropdownMenuPrimitive.ItemProps }
  | { type: 'checkbox'; props?: DropdownMenuPrimitive.CheckboxItemProps }
  | { type: 'separator'; props?: DropdownMenuPrimitive.SeparatorProps }
  | { type: 'group'; props?: DropdownMenuPrimitive.GroupProps; items: MenuNode[] }
  | {
      type: 'sub';
      props?: DropdownMenuPrimitive.SubProps;
      trigger: { props?: DropdownMenuPrimitive.SubTriggerProps };
      content?: { props?: DropdownMenuPrimitive.SubContentProps; items: MenuNode[] };
    };

export interface DropdownMenuProps {
  className?: string;
  items: MenuNode[];
  trigger?: ReactNode;
  label: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  showScrollArea?: boolean;
  maxHeight?: number;
}

export function DropdownMenu({
  className,
  items,
  trigger,
  align,
  sideOffset,
  label,
  showScrollArea = true,
  maxHeight = 320,
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root
      align={align}
      maxHeight={maxHeight}
      showScrollArea={showScrollArea}
      sideOffset={sideOffset}
    >
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger !== undefined ? (
          trigger
        ) : (
          <Button shape="circle" size="small" variant="ghost">
            <EllipsisIcon size={20} />
          </Button>
        )}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={cn(className)}>
          <DropdownMenuPrimitive.ScrollArea>
            <DropdownMenuPrimitive.Label>{label}</DropdownMenuPrimitive.Label>
            {items.map((item, index) => (
              <DropdownMenuPrimitive.Node key={index} menuKey={index} menuNode={item} />
            ))}
          </DropdownMenuPrimitive.ScrollArea>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
