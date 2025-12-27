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
 *   --nav-focus: var(--brand);
 *   --nav-text: var(--foreground);
 *   --nav-viewport-background: var(--background);
 *   --nav-viewport-border: color-mix(in oklab, var(--foreground) 15%, transparent);
 *   --nav-link-text: var(--foreground);
 *   --nav-link-text-hover: var(--foreground);
 *   --nav-link-background: transparent;
 *   --nav-link-background-hover: var(--contrast-100);
 *   --nav-link-font-family: var(--font-family-body);
 *   --nav-grid-label-text: var(--foreground);
 *   --nav-grid-label-text-hover: var(--foreground);
 *   --nav-grid-label-background: transparent;
 *   --nav-grid-label-background-hover: var(--contrast-100);
 *   --nav-grid-label-font-family: var(--font-family-body);
 *   --nav-grid-link-text: var(--contrast-500);
 *   --nav-grid-link-background: transparent;
 *   --nav-grid-link-font-family: var(--font-family-body);
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
