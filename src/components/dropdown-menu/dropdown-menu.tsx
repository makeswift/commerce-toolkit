'use client';

import { clsx } from 'clsx';
import { EllipsisIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import * as DropdownMenuPrimitives from '@/components/dropdown-menu';

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
  | { type: 'item'; props?: DropdownMenuPrimitives.ItemProps }
  | { type: 'checkbox'; props?: DropdownMenuPrimitives.CheckboxItemProps }
  | { type: 'separator'; props?: DropdownMenuPrimitives.SeparatorProps }
  | { type: 'group'; props?: DropdownMenuPrimitives.GroupProps; items: MenuNode[] }
  | {
      type: 'sub';
      props?: DropdownMenuPrimitives.SubProps;
      trigger: { props?: DropdownMenuPrimitives.SubTriggerProps };
      content?: { props?: DropdownMenuPrimitives.SubContentProps; items: MenuNode[] };
    };

export interface DropdownMenuProps
  extends Pick<DropdownMenuPrimitives.ContentProps, 'align' | 'sideOffset'> {
  items: MenuNode[];
  className?: string;
  trigger?: ReactNode;
  label: string;
  showScrollArea?: boolean;
}

export function DropdownMenu({
  className,
  items,
  trigger,
  align,
  sideOffset,
  label,
  showScrollArea = true,
}: DropdownMenuProps) {
  function renderMenuNode(node: MenuNode, key: string) {
    switch (node.type) {
      case 'item': {
        return <DropdownMenuPrimitives.Item key={key} {...node.props} />;
      }
      case 'checkbox': {
        return <DropdownMenuPrimitives.CheckboxItem key={key} {...node.props} />;
      }
      case 'separator':
        return <DropdownMenuPrimitives.Separator key={key} {...node.props} />;
      case 'group':
        return (
          <DropdownMenuPrimitives.Group key={key} {...node.props}>
            {node.items.map((child, index) => renderMenuNode(child, String(index)))}
          </DropdownMenuPrimitives.Group>
        );
      case 'sub':
        return (
          <DropdownMenuPrimitives.Sub key={key} {...node.props}>
            <DropdownMenuPrimitives.SubTrigger {...node.trigger.props} />
            {node.content ? (
              <DropdownMenuPrimitives.Portal>
                <DropdownMenuPrimitives.SubContent
                  alignOffset={-8}
                  className={clsx(
                    showScrollArea &&
                      // Set a max height for the scroll area by targeting the data-slot attribute of the scroll area nested within the sub-content
                      '[&_[data-slot=scroll-area-root]]:flex [&_[data-slot=scroll-area-root]]:max-h-80 [&_[data-slot=scroll-area-root]]:flex-col',
                    node.content.props?.className,
                  )}
                  {...node.content.props}
                >
                  {node.content.items.map((child, index) => renderMenuNode(child, String(index)))}
                </DropdownMenuPrimitives.SubContent>
              </DropdownMenuPrimitives.Portal>
            ) : null}
          </DropdownMenuPrimitives.Sub>
        );
    }
  }

  return (
    <DropdownMenuPrimitives.Root>
      <DropdownMenuPrimitives.Trigger asChild>
        {trigger !== undefined ? (
          trigger
        ) : (
          <Button shape="circle" size="small" variant="ghost">
            <EllipsisIcon size={20} />
          </Button>
        )}
      </DropdownMenuPrimitives.Trigger>
      <DropdownMenuPrimitives.Portal>
        <DropdownMenuPrimitives.Content
          align={align}
          className={clsx(
            // Set a max height for the scroll area by targeting the data-slot attribute of the scroll area nested within the content
            showScrollArea &&
              '[&_[data-slot=scroll-area-root]]:flex [&_[data-slot=scroll-area-root]]:max-h-80 [&_[data-slot=scroll-area-root]]:flex-col',
            className,
          )}
          sideOffset={sideOffset}
        >
          <DropdownMenuPrimitives.Label>{label}</DropdownMenuPrimitives.Label>
          {items.map((item, index) => {
            return renderMenuNode(item, String(index));
          })}
        </DropdownMenuPrimitives.Content>
      </DropdownMenuPrimitives.Portal>
    </DropdownMenuPrimitives.Root>
  );
}
