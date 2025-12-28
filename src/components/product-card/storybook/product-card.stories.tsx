import type { Meta, StoryObj } from '@storybook/react-vite';

import * as ProductCardPrimitive from '@/components/product-card';
import { ProductCard, type ProductCardProps } from '@/components/product-card/product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The ProductCard component displays a product with image, title, subtitle, price, badge, and optional compare functionality.

## CSS Variables

The following CSS variables can be used to customize the ProductCard component:

\`\`\`css
:root {
  --product-card-focus: var(--primary);
  --product-card-empty-text: color-mix(in oklab, hsl(var(--foreground)) 15%, transparent);
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

## Aspect Ratios

The component supports three aspect ratios for the product image:
- \`5/6\` (default) - Slightly tall, ideal for most product photography
- \`3/4\` - Portrait orientation
- \`1/1\` - Square format
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['5/6', '3/4', '1/1'],
      description: 'The aspect ratio of the product image',
    },
    product: {
      control: 'object',
      description: 'The product data object',
    },
    compareActions: {
      control: 'object',
      description: 'Configuration for the compare checkbox feature',
    },
  },
};

export default meta;
type Story = StoryObj<ProductCardProps>;

function StoryWrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-72">{children}</div>;
}

/**
 * The default ProductCard displays an image, title, subtitle, and price.
 */
export const Default: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    product: {
      id: '1',
      title: 'Minimal Ceramic Soap Dispenser',
      subtitle: 'White Matte Finish',
      link: {
        href: '/products/ceramic-soap-dispenser',
        ariaLabel: 'View Minimal Ceramic Soap Dispenser',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=900',
        alt: 'Minimal Ceramic Soap Dispenser',
      },
      price: {
        type: 'default',
        value: '$18.00',
      },
    },
  },
};

/**
 * ProductCard with a badge overlay to highlight product status.
 */
export const WithBadge: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    product: {
      id: '2',
      title: 'Natural Fiber Scrub Brush',
      subtitle: 'Eco-Friendly',
      link: {
        href: '/products/natural-fiber-scrub-brush',
        ariaLabel: 'View Natural Fiber Scrub Brush',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=900',
        alt: 'Natural Fiber Scrub Brush',
      },
      price: {
        type: 'default',
        value: '$8.99',
      },
      badge: 'New',
    },
  },
};

/**
 * ProductCard displaying a sale price with the original price struck through.
 */
export const SalePrice: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    product: {
      id: '3',
      title: 'Amber Glass Spray Bottle',
      subtitle: 'Refillable',
      link: {
        href: '/products/amber-glass-spray-bottle',
        ariaLabel: 'View Amber Glass Spray Bottle',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?w=900',
        alt: 'Amber Glass Spray Bottle',
      },
      price: {
        type: 'sale',
        previousValue: '$13.00',
        currentValue: '$9.99',
      },
      badge: 'Sale',
    },
  },
};

/**
 * ProductCard with a square aspect ratio.
 */
export const SquareAspectRatio: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    aspectRatio: '1/1',
    product: {
      id: '4',
      title: 'Stoneware Soap Tray',
      subtitle: 'Handcrafted',
      link: {
        href: '/products/stoneware-soap-tray',
        ariaLabel: 'View Stoneware Soap Tray',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=900',
        alt: 'Stoneware Soap Tray',
      },
      price: {
        type: 'default',
        value: '$16.00',
      },
    },
  },
};

/**
 * ProductCard with compare actions for product comparison functionality.
 */
export const WithCompare: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    product: {
      id: '5',
      title: 'Eco Cleaning Starter Kit',
      subtitle: 'Complete Set',
      link: {
        href: '/products/eco-cleaning-starter-kit',
        ariaLabel: 'View Eco Cleaning Starter Kit',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1685052392996-5c042ab4c170?w=900',
        alt: 'Eco Cleaning Starter Kit',
      },
      price: {
        type: 'default',
        value: '$29.00',
      },
    },
    compareActions: {
      label: 'Compare',
      checked: false,
      onCheckedChange: (checked) => console.log('Compare changed:', checked),
    },
  },
};

/**
 * ## Composable Anatomy
 *
 * For advanced customization, you can use the primitive components directly. The primitives include:
 *
 * - `Root` - Container with context provider for aspect ratio and color scheme
 * - `Preview` - Wrapper for the image area
 * - `Thumbnail` - Image container with aspect ratio
 * - `Image` - Product image with hover effects
 * - `Fallback` - Displayed when no image is available
 * - `Badge` - Overlay badge for status/labels
 * - `Link` - Invisible link overlay for click area
 * - `Details` - Container for product information
 * - `Header` - Groups title, subtitle, and price
 * - `Title` - Product title
 * - `Subtitle` - Product subtitle
 * - `Price` - Product price display
 * - `Compare` - Compare checkbox container
 * - `Checkbox` - Compare checkbox input
 * - `Label` - Compare checkbox label
 *
 * ```tsx
 * import * as ProductCardPrimitive from '@/components/product-card';
 *
 * <ProductCardPrimitive.Root aspectRatio="5/6">
 *   <ProductCardPrimitive.Preview>
 *     <ProductCardPrimitive.Thumbnail>
 *       <ProductCardPrimitive.Image src="..." alt="..." />
 *       <ProductCardPrimitive.Badge>New</ProductCardPrimitive.Badge>
 *     </ProductCardPrimitive.Thumbnail>
 *     <ProductCardPrimitive.Link href="/product" aria-label="View product" />
 *   </ProductCardPrimitive.Preview>
 *   <ProductCardPrimitive.Details>
 *     <ProductCardPrimitive.Header>
 *       <ProductCardPrimitive.Title>Product Name</ProductCardPrimitive.Title>
 *       <ProductCardPrimitive.Subtitle>Subtitle</ProductCardPrimitive.Subtitle>
 *       <ProductCardPrimitive.Price price={{ type: 'default', value: '$19.99' }} />
 *       <ProductCardPrimitive.Link href="/product" aria-label="View product" />
 *     </ProductCardPrimitive.Header>
 *   </ProductCardPrimitive.Details>
 * </ProductCardPrimitive.Root>
 * ```
 */
export const ComposableAnatomy: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="5/6">
      <ProductCardPrimitive.Preview>
        <ProductCardPrimitive.Thumbnail>
          <ProductCardPrimitive.Image
            alt="Glass Soap Pump Bottle"
            src="https://images.unsplash.com/photo-1606448009227-af1758630e60?w=900"
          />
          <ProductCardPrimitive.Badge>Popular</ProductCardPrimitive.Badge>
        </ProductCardPrimitive.Thumbnail>
        <ProductCardPrimitive.Link
          aria-label="View Glass Soap Pump Bottle"
          href="/products/glass-soap-pump"
        />
      </ProductCardPrimitive.Preview>
      <ProductCardPrimitive.Details>
        <ProductCardPrimitive.Header>
          <ProductCardPrimitive.Title>Glass Soap Pump Bottle</ProductCardPrimitive.Title>
          <ProductCardPrimitive.Subtitle>Clear Glass</ProductCardPrimitive.Subtitle>
          <ProductCardPrimitive.Price price={{ type: 'default', value: '$14.50' }} />
          <ProductCardPrimitive.Link
            aria-label="View Glass Soap Pump Bottle"
            href="/products/glass-soap-pump"
          />
        </ProductCardPrimitive.Header>
      </ProductCardPrimitive.Details>
    </ProductCardPrimitive.Root>
  ),
};

/**
 * The skeleton state is displayed while product data is loading.
 */
export const Skeleton: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="5/6">
      <ProductCardPrimitive.Skeleton />
    </ProductCardPrimitive.Root>
  ),
};
