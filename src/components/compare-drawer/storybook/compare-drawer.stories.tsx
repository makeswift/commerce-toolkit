import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import {
  CompareDrawer,
  type CompareDrawerItem,
  type CompareDrawerProps,
} from '@/components/compare-drawer/compare-drawer';

const mockItems: CompareDrawerItem[] = [
  {
    id: '1',
    title: 'Classic Leather Jacket',
    image: {
      src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop',
      alt: 'Classic Leather Jacket',
    },
    link: {
      href: '/products/classic-leather-jacket',
      ariaLabel: 'View Classic Leather Jacket',
    },
  },
  {
    id: '2',
    title: 'Vintage Denim Jacket',
    image: {
      src: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=200&h=200&fit=crop',
      alt: 'Vintage Denim Jacket',
    },
    link: {
      href: '/products/vintage-denim-jacket',
      ariaLabel: 'View Vintage Denim Jacket',
    },
  },
  {
    id: '3',
    title: 'Wool Blend Coat',
    image: {
      src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=200&fit=crop',
      alt: 'Wool Blend Coat',
    },
    link: {
      href: '/products/wool-blend-coat',
      ariaLabel: 'View Wool Blend Coat',
    },
  },
];

const meta: Meta<typeof CompareDrawer> = {
  title: 'Components/CompareDrawer',
  component: CompareDrawer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    removeLabel: {
      control: 'text',
      description: 'Label for the remove item button (used in aria-label)',
      table: {
        defaultValue: { summary: 'Remove' },
      },
    },
    onRemove: {
      action: 'onRemove',
      description: 'Callback fired when an item is removed, receives the item id',
    },
  },
};

export default meta;

type Story = StoryObj<CompareDrawerProps>;

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

export const Default: Story = {
  args: {
    items: mockItems,
    removeLabel: 'Remove',
  },
  render: (args) => <CompareDrawerWrapper {...args} />,
};

export const WithCustomRemoveLabel: Story = {
  args: {
    items: mockItems,
    removeLabel: 'Delete',
  },
  render: (args) => <CompareDrawerWrapper {...args} />,
};

export const WithoutImages: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Product Without Image',
        link: {
          href: '/products/product-1',
          ariaLabel: 'View Product Without Image',
        },
      },
      {
        id: '2',
        title: 'Another Product',
        link: {
          href: '/products/product-2',
          ariaLabel: 'View Another Product',
        },
      },
    ],
    removeLabel: 'Remove',
  },
  render: (args) => <CompareDrawerWrapper {...args} />,
};
