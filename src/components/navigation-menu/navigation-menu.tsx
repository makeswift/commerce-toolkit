import type { ReactNode } from 'react';

import * as NavigationMenuPrimitive from '@/components/navigation-menu';

interface NavigationMenuLink {
  label: string;
  href: string;
  asChild?: boolean;
  children?: ReactNode;
}

interface NavigationMenuColumn {
  label: NavigationMenuLink;
  links: NavigationMenuLink[];
}

interface NavigationMenuItem {
  trigger: string;
  href?: string;
  asChild?: boolean;
  children?: ReactNode;
  content?: {
    columns?: NavigationMenuColumn[];
    slot?: ReactNode;
  };
}

export interface NavigationMenuProps {
  items: NavigationMenuItem[];
  viewport?: boolean;
  columns?: 3 | 4 | 5 | 6;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --navigation-menu-fill: var(--background);
 *   --navigation-menu-text-primary: var(--text-primary);
 *   --navigation-menu-text-secondary: var(--text-secondary);
 *   --navigation-menu-font: var(--font-body);
 *   --navigation-menu-fill-hover: var(--contrast-100);
 *   --navigation-menu-text-hover: var(--text-primary);
 * }
 * ```
 */
export function NavigationMenu({ items, viewport = true, columns = 4 }: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root columns={columns} delayDuration={0} viewport={viewport}>
      <NavigationMenuPrimitive.List>
        {items.map((item) => (
          <NavigationMenuPrimitive.Item key={item.trigger}>
            {item.content ? (
              <>
                <NavigationMenuPrimitive.Trigger>{item.trigger}</NavigationMenuPrimitive.Trigger>
                <NavigationMenuPrimitive.Content>
                  {item.content.columns && item.content.columns.length > 0 && (
                    <NavigationMenuPrimitive.Grid>
                      {item.content.columns.map((column) => (
                        <NavigationMenuPrimitive.GridColumn key={column.label.label}>
                          <NavigationMenuPrimitive.GridLabel
                            asChild={column.label.asChild}
                            href={column.label.href}
                          >
                            {column.label.asChild === true
                              ? column.label.children
                              : column.label.label}
                          </NavigationMenuPrimitive.GridLabel>
                          {column.links.map((link) => (
                            <NavigationMenuPrimitive.GridLink
                              asChild={link.asChild}
                              href={link.href}
                              key={link.label}
                            >
                              {link.asChild === true ? link.children : link.label}
                            </NavigationMenuPrimitive.GridLink>
                          ))}
                        </NavigationMenuPrimitive.GridColumn>
                      ))}
                    </NavigationMenuPrimitive.Grid>
                  )}
                  {item.content.slot != null && (
                    <NavigationMenuPrimitive.Slot>{item.content.slot}</NavigationMenuPrimitive.Slot>
                  )}
                </NavigationMenuPrimitive.Content>
              </>
            ) : (
              <NavigationMenuPrimitive.Link asChild={item.asChild} href={item.href}>
                {item.asChild === true ? item.children : item.trigger}
              </NavigationMenuPrimitive.Link>
            )}
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>
      {viewport && (
        <NavigationMenuPrimitive.Panel>
          <NavigationMenuPrimitive.Viewport />
        </NavigationMenuPrimitive.Panel>
      )}
    </NavigationMenuPrimitive.Root>
  );
}
