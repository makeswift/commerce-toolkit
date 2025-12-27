'use client';

import type { ReactNode } from 'react';

import * as CompareDrawerPrimitive from '@/components/compare-drawer';

export interface CompareDrawerItem {
  id: string;
  image?: {
    src: string;
    alt: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  link: {
    href: string;
    ariaLabel: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  title: string;
}

export interface CompareDrawerProps {
  container?: HTMLElement;
  submitHref?: string;
  submitLabel?: string;
  submitIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  items: CompareDrawerItem[];
  onRemove?: (item: CompareDrawerItem['id']) => void;
  removeLabel?: string;
  removeIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --compare-drawer-background: var(--background);
 *   --compare-drawer-font-family: var(--font-family-body);
 *   --compare-drawer-card-focus: var(--brand);
 *   --compare-drawer-card-border: var(--contrast-100);
 *   --compare-drawer-card-background: var(--background);
 *   --compare-drawer-card-background-hover: var(--contrast-100);
 *   --compare-drawer-card-image-background: var(--contrast-100);
 *   --compare-drawer-empty-image-text: var(--brand-shadow);
 *   --compare-drawer-card-text: var(--foreground);
 *   --compare-drawer-dismiss-border: var(--contast-100);
 *   --compare-drawer-dismiss-border-hover: var(--contast-200);
 *   --compare-drawer-dismiss-background: var(--background);
 *   --compare-drawer-dismiss-background-hover: var(--contrast-100);
 *   --compare-drawer-dismiss-icon: var(--contrast-400);
 *   --compare-drawer-dismiss-icon-hover: var(--foreground);
 * }
 * ```
 */
export function CompareDrawer({
  items,
  container,
  submitHref,
  submitLabel = 'Compare',
  submitIcon,
  removeLabel = 'Remove',
  removeIcon,
  onRemove,
}: CompareDrawerProps) {
  return (
    <CompareDrawerPrimitive.Root container={container}>
      <CompareDrawerPrimitive.Viewport>
        <CompareDrawerPrimitive.Content>
          <CompareDrawerPrimitive.ItemList>
            {items.map((item) => (
              <CompareDrawerPrimitive.Item key={item.id}>
                <CompareDrawerPrimitive.Link
                  aria-label={item.link.ariaLabel}
                  asChild={item.link.asChild}
                  href={item.link.href}
                >
                  {item.link.asChild === true ? (
                    item.link.children
                  ) : (
                    <>
                      <CompareDrawerPrimitive.Thumbnail>
                        {item.image != null ? (
                          <CompareDrawerPrimitive.Image
                            alt={item.image.alt}
                            asChild={item.image.asChild}
                            src={item.image.src}
                          >
                            {item.image.children}
                          </CompareDrawerPrimitive.Image>
                        ) : (
                          <CompareDrawerPrimitive.Fallback>
                            {item.title}
                          </CompareDrawerPrimitive.Fallback>
                        )}
                      </CompareDrawerPrimitive.Thumbnail>
                      <CompareDrawerPrimitive.Title>{item.title}</CompareDrawerPrimitive.Title>
                    </>
                  )}
                </CompareDrawerPrimitive.Link>
                <CompareDrawerPrimitive.Remove
                  aria-label={`${removeLabel} ${item.title}`}
                  onClick={() => onRemove?.(item.id)}
                >
                  <CompareDrawerPrimitive.RemoveIcon asChild={removeIcon?.asChild}>
                    {removeIcon?.children}
                  </CompareDrawerPrimitive.RemoveIcon>
                </CompareDrawerPrimitive.Remove>
              </CompareDrawerPrimitive.Item>
            ))}
          </CompareDrawerPrimitive.ItemList>
          <CompareDrawerPrimitive.Submit
            className="hidden @md:block"
            href={submitHref}
            size="medium"
            variant="primary"
          >
            {submitLabel}{' '}
            <CompareDrawerPrimitive.SubmitIcon asChild={submitIcon?.asChild} size="medium">
              {submitIcon?.children}
            </CompareDrawerPrimitive.SubmitIcon>
          </CompareDrawerPrimitive.Submit>
          <CompareDrawerPrimitive.Submit
            className="w-full @md:hidden"
            href={submitHref}
            size="small"
            variant="primary"
          >
            {submitLabel}{' '}
            <CompareDrawerPrimitive.SubmitIcon asChild={submitIcon?.asChild} size="small">
              {submitIcon?.children}
            </CompareDrawerPrimitive.SubmitIcon>
          </CompareDrawerPrimitive.Submit>
        </CompareDrawerPrimitive.Content>
      </CompareDrawerPrimitive.Viewport>
    </CompareDrawerPrimitive.Root>
  );
}
