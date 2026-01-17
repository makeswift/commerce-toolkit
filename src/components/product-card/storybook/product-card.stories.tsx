import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { ProductCard, type ProductCardProps } from '@/components/product-card';
import * as ProductCardPrimitive from '@/components/product-card/primitives';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A product card for displaying product information with optional actions like add-to-cart and compare.

## CSS Variables

\`\`\`css
:root {
  --product-card-text-primary: var(--text-primary);
  --product-card-text-secondary: var(--text-secondary);
  --product-card-font-title: var(--font-body);
  --product-card-font-subtitle: var(--font-body);
  --product-card-radius: 1rem;
}
\`\`\`

## Price Types

The \`price\` prop supports three formats:

- \`{ type: 'default', value: '$19.99' }\` — Standard price
- \`{ type: 'sale', previousValue: '$29.99', currentValue: '$19.99' }\` — Sale price
- \`{ type: 'range', minValue: '$19.99', maxValue: '$29.99' }\` — Price range
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['5/6', '3/4', '1/1'],
      description: 'Thumbnail aspect ratio',
    },
    product: {
      control: false,
      description: 'Product data (title, image, price, rating, link, badge)',
    },
    compareAction: {
      control: false,
      description: 'Compare checkbox configuration',
    },
    cartAction: {
      control: false,
      description: 'Cart action (form submission or link)',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-72 bg-background p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<ProductCardProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Product card with badge, rating, and standard price.',
      },
    },
  },
  args: {
    product: {
      id: 'eco-cleaning-starter-kit',
      title: 'Eco Cleaning Starter Kit',
      subtitle: 'Bundle',
      badge: 'Best Seller',
      link: {
        href: '/products/eco-cleaning-starter-kit',
        ariaLabel: 'View Eco Cleaning Starter Kit',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1685052392996-5c042ab4c170?w=900',
        alt: 'Eco cleaning starter kit with various brushes and cloths',
      },
      showRating: true,
      rating: 4.8,
      price: { type: 'default', value: '$29.00' },
    },
    aspectRatio: '5/6',
  },
};

export const WithSalePrice: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `{ type: "sale" }` price to show original and discounted prices.',
      },
    },
  },
  args: {
    product: {
      id: 'glass-soap-pump-bottle',
      title: 'Glass Soap Pump Bottle',
      subtitle: 'Bathroom',
      badge: 'Sale',
      link: {
        href: '/products/glass-soap-pump-bottle',
        ariaLabel: 'View Glass Soap Pump Bottle',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1606448009227-af1758630e60?w=900',
        alt: 'Clear glass soap pump bottle',
      },
      showRating: true,
      rating: 4.2,
      price: { type: 'sale', previousValue: '$14.50', currentValue: '$11.99' },
    },
    aspectRatio: '5/6',
  },
};

export const WithCartAction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `cartAction` with `type: "form"` for server action integration.',
      },
    },
  },
  args: {
    product: {
      id: 'minimal-ceramic-soap-dispenser',
      title: 'Minimal Ceramic Soap Dispenser',
      subtitle: 'Home Decor',
      link: {
        href: '/products/minimal-ceramic-soap-dispenser',
        ariaLabel: 'View Minimal Ceramic Soap Dispenser',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=900',
        alt: 'White ceramic soap dispenser',
      },
      showRating: true,
      rating: 4.7,
      price: { type: 'default', value: '$18.00' },
    },
    cartAction: {
      type: 'form',
      action: (formData) => {
        console.log('Added to cart:', formData.get('id'));
      },
      label: 'Add to Cart',
    },
    aspectRatio: '5/6',
  },
};

export const WithCompareAction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `compareAction` for a controlled compare checkbox.',
      },
      source: {
        code: `
const [checked, setChecked] = useState(false);

<ProductCard
  aspectRatio="5/6"
  compareAction={{
    id: 'compare-product',
    checked,
    onCheckedChange: (value) => setChecked(value === true),
    label: 'Compare',
  }}
  product={{
    id: 'product-id',
    title: 'Product Name',
    subtitle: 'Category',
    link: { href: '/products/id', ariaLabel: 'View Product' },
    image: { src: '...', alt: '...' },
    showRating: true,
    rating: 4.3,
    price: { type: 'default', value: '$10.50' },
  }}
/>
        `,
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <ProductCard
        aspectRatio="5/6"
        compareAction={{
          id: 'compare-bamboo-brush',
          checked,
          onCheckedChange: (value) => setChecked(value === true),
          label: 'Compare',
        }}
        product={{
          id: 'bamboo-countertop-brush',
          title: 'Bamboo Countertop Brush',
          subtitle: 'Kitchen',
          link: {
            href: '/products/bamboo-countertop-brush',
            ariaLabel: 'View Bamboo Countertop Brush',
          },
          image: {
            src: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900',
            alt: 'Bamboo countertop brush',
          },
          showRating: true,
          rating: 4.3,
          price: { type: 'default', value: '$10.50' },
        }}
      />
    );
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitives to build custom product card layouts.',
      },
      source: {
        code: `
import * as ProductCardPrimitive from '@/components/product-card/primitives';

<ProductCardPrimitive.Root aspectRatio="5/6">
  <ProductCardPrimitive.Preview>
    <ProductCardPrimitive.Thumbnail>
      <ProductCardPrimitive.Image src="..." alt="..." />
      <ProductCardPrimitive.Badge>Popular</ProductCardPrimitive.Badge>
    </ProductCardPrimitive.Thumbnail>
    <ProductCardPrimitive.Link href="..." aria-label="..." />
  </ProductCardPrimitive.Preview>
  <ProductCardPrimitive.Details>
    <ProductCardPrimitive.Header>
      <ProductCardPrimitive.Title>Product Name</ProductCardPrimitive.Title>
      <ProductCardPrimitive.Subtitle>Category</ProductCardPrimitive.Subtitle>
      <ProductCardPrimitive.Price price={{ type: 'default', value: '$9.99' }} />
      <ProductCardPrimitive.Rating rating={4.5} />
      <ProductCardPrimitive.Link href="..." aria-label="..." />
    </ProductCardPrimitive.Header>
  </ProductCardPrimitive.Details>
  <ProductCardPrimitive.Actions>
    <ProductCardPrimitive.CartButton>Add to Cart</ProductCardPrimitive.CartButton>
    <ProductCardPrimitive.Compare id="compare-id" label="Compare" />
  </ProductCardPrimitive.Actions>
</ProductCardPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="5/6">
      <ProductCardPrimitive.Preview>
        <ProductCardPrimitive.Thumbnail>
          <ProductCardPrimitive.Image
            alt="Wood handle cleaning brush"
            src="https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=900"
          />
          <ProductCardPrimitive.Badge>Popular</ProductCardPrimitive.Badge>
        </ProductCardPrimitive.Thumbnail>
        <ProductCardPrimitive.Link
          aria-label="View Wood Handle Cleaning Brush"
          href="/products/wood-handle-cleaning-brush"
        />
      </ProductCardPrimitive.Preview>
      <ProductCardPrimitive.Details>
        <ProductCardPrimitive.Header>
          <ProductCardPrimitive.Title>Wood Handle Cleaning Brush</ProductCardPrimitive.Title>
          <ProductCardPrimitive.Subtitle>Kitchen Essentials</ProductCardPrimitive.Subtitle>
          <ProductCardPrimitive.Price price={{ type: 'default', value: '$9.99' }} />
          <ProductCardPrimitive.Rating rating={4.5} />
          <ProductCardPrimitive.Link
            aria-label="View Wood Handle Cleaning Brush"
            href="/products/wood-handle-cleaning-brush"
          />
        </ProductCardPrimitive.Header>
      </ProductCardPrimitive.Details>
      <ProductCardPrimitive.Actions>
        <ProductCardPrimitive.CartButton>Add to Cart</ProductCardPrimitive.CartButton>
        <ProductCardPrimitive.Compare id="compare-wood-brush" label="Compare" />
      </ProductCardPrimitive.Actions>
    </ProductCardPrimitive.Root>
  ),
};

export const Skeleton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state while product data loads.',
      },
      source: {
        code: `
<ProductCardPrimitive.Root aspectRatio="5/6">
  <ProductCardPrimitive.Skeleton />
</ProductCardPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="5/6">
      <ProductCardPrimitive.Skeleton />
    </ProductCardPrimitive.Root>
  ),
};
