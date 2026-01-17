'use client';

import type { ReactNode } from 'react';

import * as DropdownMenuPrimitive from '@/components/dropdown-menu';
import type { DropdownMenuNode } from '@/components/dropdown-menu';
import { cn } from '@/lib';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --dropdown-menu-fill: var(--background);
 *   --dropdown-menu-font: var(--font-body);
 *   --dropdown-menu-text: var(--text-secondary);
 *   --dropdown-menu-fill-hover: var(--contrast-100);
 *   --dropdown-menu-text-hover: var(--text-primary);
 *   --dropdown-menu-text-error: var(--error);
 *   --dropdown-menu-fill-error: var(--error-background);
 *   --dropdown-menu-text-error-hover: var(--error-foreground);
 * }
 * ```
 */

export interface DropdownMenuProps {
  className?: string;
  nodes: DropdownMenuNode[];
  trigger?: ReactNode;
  triggerIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  label: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  showScrollArea?: boolean;
  maxHeight?: number;
}

export function DropdownMenu({
  className,
  nodes,
  trigger,
  triggerIcon,
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
          <DropdownMenuPrimitive.Button>
            <DropdownMenuPrimitive.TriggerIcon asChild={triggerIcon?.asChild}>
              {triggerIcon?.children}
            </DropdownMenuPrimitive.TriggerIcon>
          </DropdownMenuPrimitive.Button>
        )}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={cn(className)}>
          <DropdownMenuPrimitive.ScrollArea>
            <DropdownMenuPrimitive.Label>{label}</DropdownMenuPrimitive.Label>
            {nodes.map((node, index) => (
              <DropdownMenuPrimitive.Node
                dropdownMenuKey={index}
                dropdownMenuNode={node}
                key={index}
              />
            ))}
          </DropdownMenuPrimitive.ScrollArea>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
