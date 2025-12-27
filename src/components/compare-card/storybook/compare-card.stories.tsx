import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentType, Fragment } from 'react';

import { CompareCard, type CompareCardProps } from '@/components/compare-card';
import * as CompareCardPrimitive from '@/components/compare-card/primitives';

const meta: Meta<typeof CompareCard> = {
  title: 'Components/CompareCard',
  component: CompareCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A product comparison card that extends the ProductCard with additional description and specification sections. Ideal for side-by-side product comparisons.

## CSS Variables

\`\`\`css
:root {
  --compare-card-divider: var(--contrast-100);
  --compare-card-label: var(--foreground);
  --compare-card-description: var(--contrast-400);
  --compare-card-field: var(--foreground);
  --compare-card-font-family-brand: var(--font-family-body);
  --compare-card-font-family-secondary: var(--font-family-body);
}
\`\`\`

## Usage

### High-Level Component

The \`CompareCard\` component wraps a ProductCard with description and specs sections:

\`\`\`tsx
import { CompareCard } from '@/components/compare-card';

<CompareCard
  productCard={{
    product: {
      id: 'product-id',
      title: 'Product Name',
      subtitle: 'Category',
      link: { href: '/products/id', ariaLabel: 'View Product' },
      image: { src: '...', alt: '...' },
      showRating: true,
      rating: 4.5,
      price: { type: 'default', value: '$19.99' },
    },
    cartAction: {
      type: 'form',
      action: (formData) => console.log('Add to cart:', formData.get('id')),
      label: 'Add to Cart',
    },
  }}
  description="Product description text..."
  specs={[
    { name: 'Material', value: 'Bamboo' },
    { name: 'Dimensions', value: '6" x 2"' },
  ]}
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as CompareCard from '@/components/compare-card';

<CompareCard.Root>
  <CompareCard.Product>
    <CompareCard.ProductCard product={...} />
  </CompareCard.Product>
  <CompareCard.Description>
    <CompareCard.DescriptionLabel>Description</CompareCard.DescriptionLabel>
    <CompareCard.Reveal>
      <CompareCard.DescriptionContent>...</CompareCard.DescriptionContent>
    </CompareCard.Reveal>
  </CompareCard.Description>
  <CompareCard.Specs>
    <CompareCard.SpecsLabel>Specifications</CompareCard.SpecsLabel>
    <CompareCard.Reveal>
      <CompareCard.SpecsList>
        <CompareCard.SpecsTerm>Material: </CompareCard.SpecsTerm>
        <CompareCard.SpecsDefinition>Bamboo</CompareCard.SpecsDefinition>
      </CompareCard.SpecsList>
    </CompareCard.Reveal>
  </CompareCard.Specs>
</CompareCard.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    productCard: {
      control: false,
      description:
        'Props passed to the embedded ProductCard (product, cartAction, compareAction, aspectRatio)',
    },
    description: {
      control: 'text',
      description: 'Product description text',
    },
    descriptionLabel: {
      control: 'text',
      description: 'Label for the description section (default: "Description")',
    },
    emptyDescriptionLabel: {
      control: 'text',
      description: 'Message shown when no description is available',
    },
    specs: {
      control: false,
      description: 'Array of specification objects with name and value',
    },
    specsLabel: {
      control: 'text',
      description: 'Label for the specifications section (default: "Other details")',
    },
    emptySpecsLabel: {
      control: 'text',
      description: 'Message shown when no specs are available',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-80 bg-background p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CompareCardProps>;

// Default with description and specs
export const Default: Story = {
  args: {
    productCard: {
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
    },
    description:
      'A sturdy, eco-friendly scrub brush made from natural plant fibers and a sustainably sourced wooden handle. Perfect for pots, pans, and tough kitchen messes.',
    specs: [
      { name: 'Material', value: 'Natural plant fiber, beechwood' },
      { name: 'Dimensions', value: '6" x 2.5"' },
      { name: 'Care', value: 'Rinse and air dry' },
    ],
  },
};

// With cart action
export const WithCartAction: Story = {
  args: {
    productCard: {
      product: {
        id: 'glass-soap-pump-bottle',
        title: 'Glass Soap Pump Bottle',
        subtitle: 'Bathroom',
        link: {
          href: '/products/glass-soap-pump-bottle',
          ariaLabel: 'View Glass Soap Pump Bottle',
        },
        image: {
          src: 'https://images.unsplash.com/photo-1606448009227-af1758630e60?w=900',
          alt: 'Clear glass soap pump bottle',
        },
        showRating: true,
        rating: 4.6,
        price: { type: 'default', value: '$14.50' },
      },
      cartAction: {
        type: 'form',
        action: (formData) => {
          console.log('Added to cart:', formData.get('id'));
        },
        label: 'Add to Cart',
      },
    },
    description:
      'A sleek glass pump bottle with a brushed metal pump mechanism. Perfect for hand soap, dish soap, or lotion.',
    specs: [
      { name: 'Capacity', value: '16 oz' },
      { name: 'Material', value: 'Recycled glass, stainless steel' },
    ],
  },
};

// Empty states (no description or specs)
export const EmptyStates: Story = {
  args: {
    productCard: {
      product: {
        id: 'eco-dish-sponge-set',
        title: 'Eco Dish Sponge Set (2-Pack)',
        subtitle: 'Kitchen',
        link: {
          href: '/products/eco-dish-sponge-set',
          ariaLabel: 'View Eco Dish Sponge Set',
        },
        image: {
          src: 'https://images.unsplash.com/photo-1685052391251-e09402a6b8e8?w=900',
          alt: 'Eco dish sponge set',
        },
        showRating: true,
        rating: 4.2,
        price: { type: 'default', value: '$6.49' },
      },
    },
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <CompareCardPrimitive.Root>
      <CompareCardPrimitive.Product>
        <CompareCardPrimitive.ProductCard
          product={{
            id: 'wood-handle-cleaning-brush',
            title: 'Wood Handle Cleaning Brush',
            subtitle: 'Kitchen Essentials',
            link: {
              href: '/products/wood-handle-cleaning-brush',
              ariaLabel: 'View Wood Handle Cleaning Brush',
            },
            image: {
              src: 'https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=900',
              alt: 'Wood handle cleaning brush',
            },
            showRating: true,
            rating: 4.5,
            price: { type: 'default', value: '$9.99' },
          }}
        />
      </CompareCardPrimitive.Product>
      <CompareCardPrimitive.Description>
        <CompareCardPrimitive.DescriptionLabel>Description</CompareCardPrimitive.DescriptionLabel>
        <CompareCardPrimitive.Reveal>
          <CompareCardPrimitive.DescriptionContent>
            A versatile cleaning brush with an ergonomic wooden handle and durable bristles. Great
            for dishes, vegetables, and general cleaning tasks.
          </CompareCardPrimitive.DescriptionContent>
        </CompareCardPrimitive.Reveal>
      </CompareCardPrimitive.Description>
      <CompareCardPrimitive.Specs>
        <CompareCardPrimitive.SpecsLabel>Specifications</CompareCardPrimitive.SpecsLabel>
        <CompareCardPrimitive.Reveal>
          <CompareCardPrimitive.SpecsList>
            <Fragment>
              <CompareCardPrimitive.SpecsTerm>Material: </CompareCardPrimitive.SpecsTerm>
              <CompareCardPrimitive.SpecsDefinition>
                Beechwood, natural bristle
              </CompareCardPrimitive.SpecsDefinition>
            </Fragment>
            <Fragment>
              <CompareCardPrimitive.SpecsTerm>Dimensions: </CompareCardPrimitive.SpecsTerm>
              <CompareCardPrimitive.SpecsDefinition>7" x 2"</CompareCardPrimitive.SpecsDefinition>
            </Fragment>
          </CompareCardPrimitive.SpecsList>
        </CompareCardPrimitive.Reveal>
      </CompareCardPrimitive.Specs>
    </CompareCardPrimitive.Root>
  ),
};

// Skeleton loading state
export const Skeleton: Story = {
  render: () => (
    <CompareCardPrimitive.Root>
      <CompareCardPrimitive.Skeleton />
    </CompareCardPrimitive.Root>
  ),
};
