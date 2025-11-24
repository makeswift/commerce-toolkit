import * as DropdownMenuPrimitive from '@/components/dropdown-menu';
import { cn } from '@/lib';

// import { DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item';
// import type { DropdownMenuCheckboxItemProps } from './dropdown-menu-checkbox-item';
// import { DropdownMenuGroup } from './dropdown-menu-group';
// import type { DropdownMenuGroupProps } from './dropdown-menu-group';
// import { DropdownMenuItem } from './dropdown-menu-item';
// import type { DropdownMenuItemProps } from './dropdown-menu-item';
// import { DropdownMenuPortal } from './dropdown-menu-portal';
// import { DropdownMenuScrollArea } from './dropdown-menu-scroll-area';
// import { DropdownMenuSeparator } from './dropdown-menu-separator';
// import type { DropdownMenuSeparatorProps } from './dropdown-menu-separator';
// import { DropdownMenuSub } from './dropdown-menu-sub';
// import type { DropdownMenuSubProps } from './dropdown-menu-sub';
// import { DropdownMenuSubContent } from './dropdown-menu-sub-content';
// import type { DropdownMenuSubContentProps } from './dropdown-menu-sub-content';
// import { DropdownMenuSubTrigger } from './dropdown-menu-sub-trigger';
// import type { DropdownMenuSubTriggerProps } from './dropdown-menu-sub-trigger';

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

export interface DropdownMenuNodeProps {
  menuNode: MenuNode;
  menuKey: string | number;
}

export function DropdownMenuNode({ menuNode, menuKey }: DropdownMenuNodeProps) {
  function renderMenuNode(node: MenuNode, key: string | number) {
    switch (node.type) {
      case 'item': {
        return <DropdownMenuPrimitive.Item key={key} {...node.props} />;
      }
      case 'checkbox': {
        return <DropdownMenuPrimitive.CheckboxItem key={key} {...node.props} />;
      }
      case 'separator':
        return <DropdownMenuPrimitive.Separator key={key} {...node.props} />;
      case 'group':
        return (
          <DropdownMenuPrimitive.Group key={key} {...node.props}>
            {node.items.map((child, index) => renderMenuNode(child, String(index)))}
          </DropdownMenuPrimitive.Group>
        );
      case 'sub':
        return (
          <DropdownMenuPrimitive.Sub key={key} {...node.props}>
            <DropdownMenuPrimitive.SubTrigger {...node.trigger.props} />
            {node.content && (
              <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.SubContent
                  alignOffset={-8}
                  className={cn(node.content.props?.className)}
                  {...node.content.props}
                >
                  <DropdownMenuPrimitive.ScrollArea>
                    {node.content.items.map((child, index) => renderMenuNode(child, String(index)))}
                  </DropdownMenuPrimitive.ScrollArea>
                </DropdownMenuPrimitive.SubContent>
              </DropdownMenuPrimitive.Portal>
            )}
          </DropdownMenuPrimitive.Sub>
        );
    }
  }

  return renderMenuNode(menuNode, menuKey);
}
