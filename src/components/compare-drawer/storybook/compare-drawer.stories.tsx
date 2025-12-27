import type { Meta, StoryObj } from '@storybook/react-vite';
import { X } from 'lucide-react';
import type { ComponentType } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import * as CompareDrawerPrimitive from '@/components/compare-drawer';
import {
  CompareDrawer,
  type CompareDrawerItem,
  type CompareDrawerProps,
} from '@/components/compare-drawer/compare-drawer';

const mockItems: CompareDrawerItem[] = [
  {
    id: '1',
    title: 'Natural Fiber Scrub Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=200&h=200&fit=crop',
      alt: 'Natural Fiber Scrub Brush',
    },
    link: {
      href: '/products/natural-fiber-scrub-brush',
      ariaLabel: 'View Natural Fiber Scrub Brush',
    },
  },
  {
    id: '2',
    title: 'Wood Handle Cleaning Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=200&h=200&fit=crop',
      alt: 'Wood Handle Cleaning Brush',
    },
    link: {
      href: '/products/wood-handle-cleaning-brush',
      ariaLabel: 'View Wood Handle Cleaning Brush',
    },
  },
  {
    id: '3',
    title: 'Bamboo Countertop Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=200&h=200&fit=crop',
      alt: 'Bamboo Countertop Brush',
    },
    link: {
      href: '/products/bamboo-countertop-brush',
      ariaLabel: 'View Bamboo Countertop Brush',
    },
  },
];

function StoryWrapper({ children }: { children: React.ReactNode }) {
  return <div className="relative flex min-h-[300px] flex-col">{children}</div>;
}

function CompareDrawerWrapper({ items: initialItems = [], ...props }: CompareDrawerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [items, setItems] = useState<CompareDrawerItem[]>(initialItems);

  useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handleRemove = (id: CompareDrawerItem['id']) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setItems(initialItems);
  };

  return (
    <div className="relative flex min-h-[300px] flex-col" ref={containerRef}>
      <div className="flex-1 bg-contrast-100 p-8">
        <p className="text-sm text-contrast-400">
          Page content area - the compare drawer appears below.
        </p>
        {items.length === 0 && (
          <Button className="mt-4" onClick={handleReset} size="small" variant="primary">
            Reset Items
          </Button>
        )}
      </div>
      {container && items.length > 0 && (
        <CompareDrawer {...props} container={container} items={items} onRemove={handleRemove} />
      )}
    </div>
  );
}

const meta: Meta<typeof CompareDrawer> = {
  title: 'Components/CompareDrawer',
  component: CompareDrawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A sticky drawer component for comparing products. Displays product thumbnails with remove buttons and a submit action.

## CSS Variables

\`\`\`css
:root {
  --compare-drawer-background: var(--background);
  --compare-drawer-font-family: var(--font-family-body);
  --compare-drawer-card-focus: var(--brand);
  --compare-drawer-card-border: var(--contrast-100);
  --compare-drawer-card-background: var(--background);
  --compare-drawer-card-background-hover: var(--contrast-100);
  --compare-drawer-card-image-background: var(--contrast-100);
  --compare-drawer-empty-image-text: var(--brand-shadow);
  --compare-drawer-card-text: var(--foreground);
  --compare-drawer-dismiss-border: var(--contast-100);
  --compare-drawer-dismiss-border-hover: var(--contast-200);
  --compare-drawer-dismiss-background: var(--background);
  --compare-drawer-dismiss-background-hover: var(--contrast-100);
  --compare-drawer-dismiss-icon: var(--contrast-400);
  --compare-drawer-dismiss-icon-hover: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`CompareDrawer\` component provides a data-driven API for product comparison:

\`\`\`tsx
import { CompareDrawer } from '@/components/compare-drawer';

<CompareDrawer
  items={[
    {
      id: '1',
      title: 'Product Name',
      image: { src: '/image.jpg', alt: 'Product' },
      link: { href: '/products/1', ariaLabel: 'View Product' },
    },
  ]}
  onRemove={(id) => handleRemove(id)}
  submitHref="/compare"
  submitLabel="Compare"
/>
\`\`\`

### Custom Link Components with asChild

Use the \`asChild\` prop to render your own link component (e.g., Next.js \`Link\`):

\`\`\`tsx
import Link from 'next/link';
import { CompareDrawer } from '@/components/compare-drawer';

<CompareDrawer
  items={[
    {
      id: '1',
      title: 'Product Name',
      image: { src: '/image.jpg', alt: 'Product' },
      link: {
        href: '/products/1',
        ariaLabel: 'View Product',
        asChild: true,
        children: (
          <Link href="/products/1">
            {/* Thumbnail and Title rendered by parent */}
          </Link>
        ),
      },
    },
  ]}
  onRemove={(id) => handleRemove(id)}
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as CompareDrawer from '@/components/compare-drawer';

<CompareDrawer.Root container={containerElement}>
  <CompareDrawer.Viewport>
    <CompareDrawer.Content>
      <CompareDrawer.ItemList>
        <CompareDrawer.Item>
          <CompareDrawer.Link href="/products/1" aria-label="View Product">
            <CompareDrawer.Thumbnail>
              <CompareDrawer.Image src="/image.jpg" alt="Product" />
            </CompareDrawer.Thumbnail>
            <CompareDrawer.Title>Product Name</CompareDrawer.Title>
          </CompareDrawer.Link>
          <CompareDrawer.Remove aria-label="Remove Product">
            <CompareDrawer.RemoveIcon />
          </CompareDrawer.Remove>
        </CompareDrawer.Item>
      </CompareDrawer.ItemList>
      <CompareDrawer.Submit href="/compare" variant="primary">
        Compare <CompareDrawer.SubmitIcon />
      </CompareDrawer.Submit>
    </CompareDrawer.Content>
  </CompareDrawer.Viewport>
</CompareDrawer.Root>
\`\`\`

With custom link components:

\`\`\`tsx
import Link from 'next/link';
import * as CompareDrawer from '@/components/compare-drawer';

<CompareDrawer.Link asChild>
  <Link href="/products/1">
    <CompareDrawer.Thumbnail>
      <CompareDrawer.Image src="/image.jpg" alt="Product" />
    </CompareDrawer.Thumbnail>
    <CompareDrawer.Title>Product Name</CompareDrawer.Title>
  </Link>
</CompareDrawer.Link>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      description: 'Array of items to display in the compare drawer',
    },
    removeLabel: {
      control: 'text',
      description: 'Label for the remove item button (used in aria-label)',
      table: {
        defaultValue: { summary: 'Remove' },
      },
    },
    submitLabel: {
      control: 'text',
      description: 'Label for the submit button',
      table: {
        defaultValue: { summary: 'Compare' },
      },
    },
    submitHref: {
      control: 'text',
      description: 'URL for the submit button link',
    },
    onRemove: {
      action: 'onRemove',
      description: 'Callback fired when an item is removed, receives the item id',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<CompareDrawerProps>;

/**
 * The default CompareDrawer displays product items with thumbnails, titles, and remove buttons.
 */
export const Default: Story = {
  args: {
    items: mockItems,
    removeLabel: 'Remove',
    submitLabel: 'Compare',
    submitHref: '/compare',
  },
  render: (args) => <CompareDrawerWrapper {...args} />,
};

/**
 * When items don't have images, a fallback displays the product initials.
 */
export const WithoutImages: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Natural Fiber Scrub Brush',
        link: {
          href: '/products/natural-fiber-scrub-brush',
          ariaLabel: 'View Natural Fiber Scrub Brush',
        },
      },
      {
        id: '2',
        title: 'Eco Dish Sponge Set',
        link: {
          href: '/products/eco-dish-sponge-set',
          ariaLabel: 'View Eco Dish Sponge Set',
        },
      },
    ],
    removeLabel: 'Remove',
    submitLabel: 'Compare',
    submitHref: '/compare',
  },
  render: (args) => <CompareDrawerWrapper {...args} />,
};

/**
 * Use the primitive components directly for full customization control.
 */
export const ComposableAnatomy: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const [items, setItems] = useState(mockItems);

    useEffect(() => {
      setContainer(containerRef.current);
    }, []);

    const handleRemove = (id: string) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleReset = () => {
      setItems(mockItems);
    };

    return (
      <div className="relative flex min-h-[300px] flex-col" ref={containerRef}>
        <div className="flex-1 bg-contrast-100 p-8">
          <p className="text-sm text-contrast-400">
            Page content area - the compare drawer appears below.
          </p>
          {items.length === 0 && (
            <Button className="mt-4" onClick={handleReset} size="small" variant="primary">
              Reset Items
            </Button>
          )}
        </div>
        {container && items.length > 0 && (
          <CompareDrawerPrimitive.Root container={container}>
            <CompareDrawerPrimitive.Viewport>
              <CompareDrawerPrimitive.Content>
                <CompareDrawerPrimitive.ItemList>
                  {items.map((item) => (
                    <CompareDrawerPrimitive.Item key={item.id}>
                      <CompareDrawerPrimitive.Link
                        aria-label={item.link.ariaLabel}
                        href={item.link.href}
                      >
                        <CompareDrawerPrimitive.Thumbnail>
                          {item.image != null ? (
                            <CompareDrawerPrimitive.Image
                              alt={item.image.alt}
                              src={item.image.src}
                            />
                          ) : (
                            <CompareDrawerPrimitive.Fallback>
                              {item.title}
                            </CompareDrawerPrimitive.Fallback>
                          )}
                        </CompareDrawerPrimitive.Thumbnail>
                        <CompareDrawerPrimitive.Title>{item.title}</CompareDrawerPrimitive.Title>
                      </CompareDrawerPrimitive.Link>
                      <CompareDrawerPrimitive.Remove
                        aria-label={`Remove ${item.title}`}
                        onClick={() => handleRemove(item.id)}
                      >
                        <CompareDrawerPrimitive.RemoveIcon asChild>
                          <X />
                        </CompareDrawerPrimitive.RemoveIcon>
                      </CompareDrawerPrimitive.Remove>
                    </CompareDrawerPrimitive.Item>
                  ))}
                </CompareDrawerPrimitive.ItemList>
                <CompareDrawerPrimitive.Submit
                  className="hidden @md:block"
                  href="/compare"
                  size="medium"
                  variant="primary"
                >
                  Compare <CompareDrawerPrimitive.SubmitIcon size="medium" />
                </CompareDrawerPrimitive.Submit>
                <CompareDrawerPrimitive.Submit
                  className="w-full @md:hidden"
                  href="/compare"
                  size="small"
                  variant="primary"
                >
                  Compare <CompareDrawerPrimitive.SubmitIcon size="small" />
                </CompareDrawerPrimitive.Submit>
              </CompareDrawerPrimitive.Content>
            </CompareDrawerPrimitive.Viewport>
          </CompareDrawerPrimitive.Root>
        )}
      </div>
    );
  },
};
