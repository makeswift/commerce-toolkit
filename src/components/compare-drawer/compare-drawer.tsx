'use client';

import { ArrowRight, X } from 'lucide-react';

import { ButtonLink } from '@/components/button-link';
import * as CompareDrawerPrimitive from '@/components/compare-drawer';

export interface CompareDrawerItem {
  id: string;
  image?: {
    src: string;
    alt: string;
  };
  link: {
    href: string;
    ariaLabel: string;
  };
  title: string;
}

export interface CompareDrawerProps {
  container?: HTMLElement;
  submitHref?: string;
  submitLabel?: string;
  items: CompareDrawerItem[];
  onRemove?: (item: CompareDrawerItem['id']) => void;
  removeLabel?: string;
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
  removeLabel = 'Remove',
  onRemove,
}: CompareDrawerProps) {
  return (
    <CompareDrawerPrimitive.Root container={container}>
      <CompareDrawerPrimitive.Viewport>
        <CompareDrawerPrimitive.Content>
          <CompareDrawerPrimitive.ItemList>
            {items.map((item) => (
              <CompareDrawerPrimitive.Item key={item.id}>
                <CompareDrawerPrimitive.Link aria-label={item.link.ariaLabel} href={item.link.href}>
                  <CompareDrawerPrimitive.Thumbnail>
                    {item.image ? (
                      <CompareDrawerPrimitive.Image alt={item.image.alt} src={item.image.src} />
                    ) : (
                      <CompareDrawerPrimitive.Fallback>
                        {item.title}
                      </CompareDrawerPrimitive.Fallback>
                    )}
                  </CompareDrawerPrimitive.Thumbnail>
                  <CompareDrawerPrimitive.Title>{item.title}</CompareDrawerPrimitive.Title>
                </CompareDrawerPrimitive.Link>
                <CompareDrawerPrimitive.Remove
                  aria-label={`${removeLabel} ${item.title}`}
                  onClick={() => onRemove?.(item.id)}
                >
                  <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
                </CompareDrawerPrimitive.Remove>
              </CompareDrawerPrimitive.Item>
            ))}
          </CompareDrawerPrimitive.ItemList>
          <ButtonLink
            className="hidden @md:block"
            href={submitHref}
            size="medium"
            variant="primary"
          >
            {submitLabel} <ArrowRight absoluteStrokeWidth size={20} strokeWidth={1} />
          </ButtonLink>
          <ButtonLink
            className="w-full @md:hidden"
            href={submitHref}
            size="small"
            variant="primary"
          >
            {submitLabel} <ArrowRight absoluteStrokeWidth size={16} strokeWidth={1} />
          </ButtonLink>
        </CompareDrawerPrimitive.Content>
      </CompareDrawerPrimitive.Viewport>
    </CompareDrawerPrimitive.Root>
  );
}
