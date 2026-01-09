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
A versatile product card component for displaying product information with optional actions. Supports product images, badges, ratings, pricing, and both cart and compare actions.

## CSS Variables

\`\`\`css
:root {
  --product-card-focus: var(--brand);
  --product-card-empty-text: color-mix(in oklab, var(--foreground) 15%, transparent);
  --product-card-light-offset: var(--background);
  --product-card-light-background: var(--contrast-100);
  --product-card-light-title: var(--foreground);
  --product-card-light-subtitle: color-mix(in oklab, var(--foreground) 75%, transparent);
  --product-card-dark-offset: var(--foreground);
  --product-card-dark-background: var(--contrast-500);
  --product-card-dark-title: var(--background);
  --product-card-dark-subtitle: color-mix(in oklab, var(--background) 75%, transparent);
  --product-card-font-family: var(--font-family-body);
  --product-card-border-radius: 1rem;
}
\`\`\`

## Usage

### High-Level Component

The \`ProductCard\` component provides a comprehensive API for displaying products:

\`\`\`tsx
import { ProductCard } from '@/components/product-card';

<ProductCard
  aspectRatio="5/6"
  product={{
    id: 'product-id',
    title: 'Product Name',
    subtitle: 'Category',
    badge: 'Sale',
    link: { href: '/products/id', ariaLabel: 'View Product' },
    image: { src: '...', alt: '...' },
    showRating: true,
    rating: 4.5,
    price: { type: 'default', value: '$19.99' },
  }}
  cartAction={{
    type: 'form',
    action: (formData) => console.log('Add to cart:', formData.get('id')),
    label: 'Add to Cart',
  }}
/>
\`\`\`

### Price Types

The \`price\` prop supports three formats:

- \`{ type: 'default', value: '$19.99' }\` - Standard price
- \`{ type: 'sale', previousValue: '$29.99', currentValue: '$19.99' }\` - Sale price
- \`{ type: 'range', minValue: '$19.99', maxValue: '$29.99' }\` - Price range

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as ProductCard from '@/components/product-card';

<ProductCard.Root aspectRatio="5/6">
  <ProductCard.Preview>
    <ProductCard.Thumbnail>
      <ProductCard.Image src="..." alt="..." />
      <ProductCard.Badge>Sale</ProductCard.Badge>
    </ProductCard.Thumbnail>
    <ProductCard.Link href="..." aria-label="..." />
  </ProductCard.Preview>
  <ProductCard.Details>
    <ProductCard.Header>
      <ProductCard.Title>Product Name</ProductCard.Title>
      <ProductCard.Subtitle>Category</ProductCard.Subtitle>
      <ProductCard.Price price={{ type: 'default', value: '$19.99' }} />
      <ProductCard.Rating rating={4.5} />
      <ProductCard.Link href="..." aria-label="..." />
    </ProductCard.Header>
  </ProductCard.Details>
  <ProductCard.Actions>
    <ProductCard.CartButton>Add to Cart</ProductCard.CartButton>
    <ProductCard.Compare id="compare-id" label="Compare" />
  </ProductCard.Actions>
</ProductCard.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['5/6', '3/4', '1/1'],
      description: 'The aspect ratio of the product thumbnail',
    },
    product: {
      control: false,
      description: 'Product data object including title, image, price, rating, and link',
    },
    compareAction: {
      control: false,
      description: 'Configuration for the compare checkbox action',
    },
    cartAction: {
      control: false,
      description: 'Configuration for the cart action (form submission or link)',
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

// Default product card
export const Default: Story = {
  args: {
    product: {
      id: 'natural-fiber-scrub-brush',
      title: 'Natural Fiber Scrub Brush',
      subtitle: 'Kitchen Essentials',
      link: {
        href: '/products/natural-fiber-scrub-brush',
        ariaLabel: 'View Natural Fiber Scrub Brush',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=900',
        alt: 'Natural fiber scrub brush with wooden handle',
      },
      showRating: true,
      rating: 4.5,
      price: { type: 'default', value: '$8.99' },
    },
    aspectRatio: '5/6',
  },
};

// With badge overlay
export const WithBadge: Story = {
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

// With sale price
export const WithSalePrice: Story = {
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

// With cart action
export const WithCartAction: Story = {
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

// With compare action (controlled)
export const WithCompareAction: Story = {
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

// Composable anatomy example
export const ComposableAnatomy: Story = {
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

// Skeleton loading state
export const Skeleton: Story = {
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="5/6">
      <ProductCardPrimitive.Skeleton />
    </ProductCardPrimitive.Root>
  ),
};
