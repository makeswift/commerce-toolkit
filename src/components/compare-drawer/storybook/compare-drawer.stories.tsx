import type { Meta, StoryObj } from '@storybook/react-vite';
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
  --compare-drawer-fill-primary: var(--background);
  --compare-drawer-fill-secondary: var(--contrast-100);
  --compare-drawer-fill-hover: var(--contrast-100);
  --compare-drawer-text-primary: var(--text-primary);
  --compare-drawer-text-secondary: var(--text-secondary);
}
\`\`\`

## Container Queries

The component uses container queries to adapt its layout:

| Element | Below @md | @md and above |
|---------|-----------|---------------|
| Layout | Column, full-width button | Row, medium button |
| Title | Hidden | Visible (@4xl) |
| Padding | px-3, py-4 | py-5 (@md), px-6 (@xl), px-10 (@5xl) |
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
      description: 'Label for the remove button (used in aria-label)',
    },
    submitLabel: {
      control: 'text',
      description: 'Label for the submit button',
    },
    submitHref: {
      control: 'text',
      description: 'URL for the submit button link',
    },
    onRemove: {
      description: 'Callback fired when an item is removed, receives the item id',
    },
    removeIcon: {
      control: false,
      description: 'Custom remove icon configuration with `asChild` support',
    },
    submitIcon: {
      control: false,
      description: 'Custom submit icon configuration with `asChild` support',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="relative flex min-h-[300px] flex-col">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<CompareDrawerProps>;

export const Default: Story = {
  args: {
    items: mockItems,
    removeLabel: 'Remove',
    submitLabel: 'Compare',
    submitHref: '/compare',
  },
  render: (args) => <CompareDrawerWrapper {...args} />,
};

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
  parameters: {
    docs: {
      description: {
        story: 'When items have no images, a fallback displays the product initials.',
      },
    },
  },
};

/**
 * Use the composable primitives to build custom compare drawer layouts.
 */
export const ComposableAnatomy: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
      setContainer(containerRef.current);
    }, []);

    return (
      <div className="relative flex min-h-[300px] flex-col" ref={containerRef}>
        <div className="flex-1 bg-contrast-100 p-8">
          <p className="text-sm text-contrast-400">Page content area</p>
        </div>
        {container && (
          <CompareDrawerPrimitive.Root container={container}>
            <CompareDrawerPrimitive.Viewport>
              <CompareDrawerPrimitive.Content>
                <CompareDrawerPrimitive.ItemList>
                  <CompareDrawerPrimitive.Item>
                    <CompareDrawerPrimitive.Link
                      aria-label="View Natural Fiber Scrub Brush"
                      href="/products/scrub-brush"
                    >
                      <CompareDrawerPrimitive.Thumbnail>
                        <CompareDrawerPrimitive.Image
                          alt="Natural Fiber Scrub Brush"
                          src="https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=200&h=200&fit=crop"
                        />
                      </CompareDrawerPrimitive.Thumbnail>
                      <CompareDrawerPrimitive.Title>
                        Natural Fiber Scrub Brush
                      </CompareDrawerPrimitive.Title>
                    </CompareDrawerPrimitive.Link>
                    <CompareDrawerPrimitive.Remove aria-label="Remove Natural Fiber Scrub Brush">
                      <CompareDrawerPrimitive.RemoveIcon />
                    </CompareDrawerPrimitive.Remove>
                  </CompareDrawerPrimitive.Item>
                </CompareDrawerPrimitive.ItemList>
                <CompareDrawerPrimitive.Submit href="/compare" size="medium" variant="primary">
                  Compare <CompareDrawerPrimitive.SubmitIcon size="medium" />
                </CompareDrawerPrimitive.Submit>
              </CompareDrawerPrimitive.Content>
            </CompareDrawerPrimitive.Viewport>
          </CompareDrawerPrimitive.Root>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom compare drawer layouts:

\`\`\`tsx
import * as CompareDrawerPrimitive from '@/components/compare-drawer/primitives';

<CompareDrawerPrimitive.Root container={containerElement}>
  <CompareDrawerPrimitive.Viewport>
    <CompareDrawerPrimitive.Content>
      <CompareDrawerPrimitive.ItemList>
        <CompareDrawerPrimitive.Item>
          <CompareDrawerPrimitive.Link href="/product" aria-label="View Product">
            <CompareDrawerPrimitive.Thumbnail>
              <CompareDrawerPrimitive.Image src="..." alt="..." />
            </CompareDrawerPrimitive.Thumbnail>
            <CompareDrawerPrimitive.Title>Product Name</CompareDrawerPrimitive.Title>
          </CompareDrawerPrimitive.Link>
          <CompareDrawerPrimitive.Remove aria-label="Remove Product">
            <CompareDrawerPrimitive.RemoveIcon />
          </CompareDrawerPrimitive.Remove>
        </CompareDrawerPrimitive.Item>
      </CompareDrawerPrimitive.ItemList>
      <CompareDrawerPrimitive.Submit href="/compare" variant="primary">
        Compare <CompareDrawerPrimitive.SubmitIcon />
      </CompareDrawerPrimitive.Submit>
    </CompareDrawerPrimitive.Content>
  </CompareDrawerPrimitive.Viewport>
</CompareDrawerPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
