import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field';
import { Label } from '@/components/label';
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

## Composable Anatomy

The ProductCard can be built using composable primitives for full customization:

\`\`\`tsx
import * as ProductCardPrimitive from '@/components/product-card/primitives';

<ProductCardPrimitive.Root aspectRatio="5/6">
  <ProductCardPrimitive.Preview>
    <ProductCardPrimitive.Thumbnail>
      <ProductCardPrimitive.Image src="..." alt="..." />
      {/* Or use Fallback when no image is available */}
      <ProductCardPrimitive.Fallback>Product Name</ProductCardPrimitive.Fallback>
      <ProductCardPrimitive.Badge>Sale</ProductCardPrimitive.Badge>
    </ProductCardPrimitive.Thumbnail>
    <ProductCardPrimitive.Link href="..." aria-label="..." />
  </ProductCardPrimitive.Preview>
  <ProductCardPrimitive.Details>
    <ProductCardPrimitive.Header>
      <ProductCardPrimitive.Title>Product Name</ProductCardPrimitive.Title>
      <ProductCardPrimitive.Subtitle>Brand</ProductCardPrimitive.Subtitle>
      <ProductCardPrimitive.Price price={{ type: 'default', value: '$19.99' }} />
      <ProductCardPrimitive.Rating rating={4.5} />
      <ProductCardPrimitive.Link href="..." aria-label="..." />
    </ProductCardPrimitive.Header>
  </ProductCardPrimitive.Details>
  <ProductCardPrimitive.Actions>
    {/* Add to cart form or link */}
    {/* Compare checkbox */}
  </ProductCardPrimitive.Actions>
</ProductCardPrimitive.Root>
\`\`\`

## Components

| Component | Description |
|-----------|-------------|
| \`Root\` | Container with flex layout. Accepts \`aspectRatio\` prop (\`5/6\`, \`3/4\`, \`1/1\`). |
| \`Preview\` | Container for the product thumbnail and link overlay. |
| \`Thumbnail\` | Wrapper for the product image with aspect ratio support. |
| \`Image\` | Product image with hover zoom effect. Supports \`asChild\`. |
| \`Fallback\` | Text fallback when no image is available. |
| \`Badge\` | Positioned badge overlay (e.g., "Sale", "New"). |
| \`Link\` | Invisible link overlay for the card. |
| \`Details\` | Container for product details section. |
| \`Header\` | Groups title, subtitle, price, and rating. |
| \`Title\` | Product title heading. |
| \`Subtitle\` | Secondary text (brand, category, etc.). |
| \`Price\` | Price display with support for default, sale, and range formats. |
| \`Rating\` | Star rating display with count. |
| \`Actions\` | Container for action buttons and compare checkbox. |
| \`Skeleton\` | Loading placeholder for the card. |
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
  parameters: {
    docs: {
      description: {
        story:
          'Use the `badge` property to highlight products with labels like "Sale", "New", or "Best Seller".',
      },
    },
  },
};

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
  parameters: {
    docs: {
      description: {
        story:
          'Display sale pricing using the `sale` price type with `previousValue` and `currentValue`.',
      },
    },
  },
};

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
  parameters: {
    docs: {
      description: {
        story: 'Use `cartAction` with `type: "form"` to add form-based add-to-cart functionality.',
      },
    },
  },
};

export const WithCartLink: Story = {
  args: {
    product: {
      id: 'stoneware-soap-tray',
      title: 'Stoneware Soap Tray',
      subtitle: 'Bath Accessories',
      link: {
        href: '/products/stoneware-soap-tray',
        ariaLabel: 'View Stoneware Soap Tray',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=900',
        alt: 'Stoneware soap tray',
      },
      showRating: false,
      price: { type: 'default', value: '$16.00' },
    },
    cartAction: {
      type: 'link',
      href: '/products/stoneware-soap-tray',
      label: 'View Options',
    },
    aspectRatio: '5/6',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `cartAction` with `type: "link"` when the product requires selection before adding to cart.',
      },
    },
  },
};

function ProductCardWithCompare() {
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
}

export const WithCompareAction: Story = {
  render: () => <ProductCardWithCompare />,
  parameters: {
    docs: {
      description: {
        story:
          'Add a compare checkbox using the `compareAction` prop for product comparison functionality.',
      },
    },
  },
};

function ProductCardWithAllActions() {
  const [checked, setChecked] = useState(false);

  return (
    <ProductCard
      aspectRatio="5/6"
      cartAction={{
        type: 'form',
        action: (formData) => {
          console.log('Added to cart:', formData.get('id'));
        },
        label: 'Add to Cart',
      }}
      compareAction={{
        id: 'compare-amber-spray-bottle',
        checked,
        onCheckedChange: (value) => setChecked(value === true),
        label: 'Compare',
      }}
      product={{
        id: 'amber-glass-spray-bottle',
        title: 'Amber Glass Spray Bottle',
        subtitle: 'Cleaning',
        badge: 'New',
        link: {
          href: '/products/amber-glass-spray-bottle',
          ariaLabel: 'View Amber Glass Spray Bottle',
        },
        image: {
          src: 'https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?w=900',
          alt: 'Amber glass spray bottle',
        },
        showRating: true,
        rating: 4.6,
        price: { type: 'default', value: '$13.00' },
      }}
    />
  );
}

export const WithAllActions: Story = {
  render: () => <ProductCardWithAllActions />,
  parameters: {
    docs: {
      description: {
        story: 'Combine both `cartAction` and `compareAction` for full product card functionality.',
      },
    },
  },
};

export const SquareAspectRatio: Story = {
  args: {
    product: {
      id: 'linen-hand-towel',
      title: 'Linen Hand Towel',
      subtitle: 'Textiles',
      link: {
        href: '/products/linen-hand-towel',
        ariaLabel: 'View Linen Hand Towel',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=900',
        alt: 'Linen hand towel',
      },
      showRating: true,
      rating: 4.4,
      price: { type: 'default', value: '$12.00' },
    },
    aspectRatio: '1/1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `aspectRatio="1/1"` for a square product card layout.',
      },
    },
  },
};

export const WithoutImage: Story = {
  args: {
    product: {
      id: 'natural-loofah-sponge',
      title: 'Natural Loofah Sponge',
      subtitle: 'Bath',
      link: {
        href: '/products/natural-loofah-sponge',
        ariaLabel: 'View Natural Loofah Sponge',
      },
      showRating: true,
      rating: 4.1,
      price: { type: 'default', value: '$5.99' },
    },
    aspectRatio: '5/6',
  },
  parameters: {
    docs: {
      description: {
        story: 'When no image is provided, the product title is displayed as a fallback.',
      },
    },
  },
};

export const WithPriceRange: Story = {
  args: {
    product: {
      id: 'natural-cleaning-essentials-set',
      title: 'Natural Cleaning Essentials Set',
      subtitle: 'Bundle',
      link: {
        href: '/products/natural-cleaning-essentials-set',
        ariaLabel: 'View Natural Cleaning Essentials Set',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1551239330-2db25ffa5e90?w=900',
        alt: 'Natural cleaning essentials set',
      },
      showRating: true,
      rating: 4.9,
      price: { type: 'range', minValue: '$24.00', maxValue: '$34.00' },
    },
    aspectRatio: '5/6',
  },
  parameters: {
    docs: {
      description: {
        story: 'Display a price range using the `range` price type with `minValue` and `maxValue`.',
      },
    },
  },
};

/**
 * Use the composable primitives to build custom product card layouts.
 */
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
        <Button size="medium">Add to Cart</Button>
        <Field.Item orientation="horizontal">
          <Checkbox id="compare-wood-brush" />
          <Label htmlFor="compare-wood-brush">Compare</Label>
        </Field.Item>
      </ProductCardPrimitive.Actions>
    </ProductCardPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom product card layouts:

\`\`\`tsx
import * as ProductCardPrimitive from '@/components/product-card/primitives';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field';
import { Label } from '@/components/label';

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
    <Button size="medium">Add to Cart</Button>
    <Field.Item orientation="horizontal">
      <Checkbox id="compare-id" />
      <Label htmlFor="compare-id">Compare</Label>
    </Field.Item>
  </ProductCardPrimitive.Actions>
</ProductCardPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};

export const Skeleton: Story = {
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="5/6">
      <ProductCardPrimitive.Skeleton />
    </ProductCardPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use the `Skeleton` primitive to display a loading placeholder while product data is being fetched.',
      },
    },
  },
};
