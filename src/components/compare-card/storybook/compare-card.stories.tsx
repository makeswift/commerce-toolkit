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
A product comparison card that extends the ProductCard with additional content nodes. Ideal for side-by-side product comparisons.

## CSS Variables

\`\`\`css
:root {
  --compare-card-font: var(--font-body);
  --compare-card-text-primary: var(--text-primary);
  --compare-card-text-secondary: var(--text-secondary);
}
\`\`\`

## Usage

The \`CompareCard\` component wraps a ProductCard with configurable content nodes:

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
      price: { type: 'default', value: '$19.99' },
    },
  }}
  nodes={[
    {
      type: 'content',
      label: 'Description',
      content: 'Product description text...',
      emptyLabel: 'No description available.',
    },
    {
      type: 'list',
      label: 'Specifications',
      items: [
        { name: 'Material', value: 'Bamboo' },
        { name: 'Dimensions', value: '6" x 2"' },
      ],
    },
  ]}
/>
\`\`\`

## Node Types

| Type | Description |
|------|-------------|
| \`content\` | Prose/rich text content with optional reveal animation |
| \`list\` | Key-value definition list for specifications |

## Node Properties

| Property | Type | Description |
|----------|------|-------------|
| \`type\` | \`'content' \\| 'list'\` | The type of node to render |
| \`label\` | \`string\` | Section heading |
| \`content\` | \`ReactNode\` | Content for \`content\` type nodes |
| \`items\` | \`Array<{ name: string; value: string }>\` | Items for \`list\` type nodes |
| \`emptyLabel\` | \`string\` | Message shown when content/items are empty |
| \`showReveal\` | \`boolean\` | Whether to show reveal animation (default: \`true\`) |

## Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as CompareCard from '@/components/compare-card/primitives';

<CompareCard.Root>
  <CompareCard.Product>
    <CompareCard.ProductCard product={...} />
  </CompareCard.Product>
  <CompareCard.Section>
    <CompareCard.Label>Description</CompareCard.Label>
    <CompareCard.Reveal>
      <CompareCard.Content>...</CompareCard.Content>
    </CompareCard.Reveal>
  </CompareCard.Section>
  <CompareCard.Section>
    <CompareCard.Label>Specifications</CompareCard.Label>
    <CompareCard.List>
      <CompareCard.Term>Material: </CompareCard.Term>
      <CompareCard.Definition>Bamboo</CompareCard.Definition>
    </CompareCard.List>
  </CompareCard.Section>
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
      description: 'Props passed to the embedded ProductCard',
    },
    nodes: {
      control: false,
      description: 'Array of content nodes to render below the product card',
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
    nodes: [
      {
        type: 'content',
        label: 'Description',
        content:
          'A sturdy, eco-friendly scrub brush made from natural plant fibers and a sustainably sourced wooden handle. Perfect for pots, pans, and tough kitchen messes.',
      },
      {
        type: 'list',
        label: 'Other details',
        items: [
          { name: 'Material', value: 'Natural plant fiber, beechwood' },
          { name: 'Dimensions', value: '6" x 2.5"' },
          { name: 'Care', value: 'Rinse and air dry' },
        ],
      },
    ],
  },
};

export const MultipleNodes: Story = {
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
    },
    nodes: [
      {
        type: 'content',
        label: 'Description',
        content:
          'A sleek glass pump bottle with a brushed metal pump mechanism. Perfect for hand soap, dish soap, or lotion.',
      },
      {
        type: 'list',
        label: 'Specifications',
        items: [
          { name: 'Capacity', value: '16 oz' },
          { name: 'Material', value: 'Recycled glass, stainless steel' },
          { name: 'Dimensions', value: '7.5" x 3"' },
        ],
      },
      {
        type: 'content',
        label: 'Care instructions',
        content: 'Hand wash only. Do not microwave. Refill with your favorite soap or lotion.',
      },
    ],
  },
};

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
    nodes: [
      {
        type: 'content',
        label: 'Description',
        emptyLabel: 'There is no description available.',
      },
      {
        type: 'list',
        label: 'Other details',
        emptyLabel: 'There are no other details.',
      },
    ],
  },
};

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
      <CompareCardPrimitive.Section>
        <CompareCardPrimitive.Label>Description</CompareCardPrimitive.Label>
        <CompareCardPrimitive.Reveal>
          <CompareCardPrimitive.Content>
            A versatile cleaning brush with an ergonomic wooden handle and durable bristles. Great
            for dishes, vegetables, and general cleaning tasks.
          </CompareCardPrimitive.Content>
        </CompareCardPrimitive.Reveal>
      </CompareCardPrimitive.Section>
      <CompareCardPrimitive.Section>
        <CompareCardPrimitive.Label>Specifications</CompareCardPrimitive.Label>
        <CompareCardPrimitive.Reveal>
          <CompareCardPrimitive.List>
            <Fragment>
              <CompareCardPrimitive.Term>Material: </CompareCardPrimitive.Term>
              <CompareCardPrimitive.Definition>
                Beechwood, natural bristle
              </CompareCardPrimitive.Definition>
            </Fragment>
            <Fragment>
              <CompareCardPrimitive.Term>Dimensions: </CompareCardPrimitive.Term>
              <CompareCardPrimitive.Definition>7" x 2"</CompareCardPrimitive.Definition>
            </Fragment>
          </CompareCardPrimitive.List>
        </CompareCardPrimitive.Reveal>
      </CompareCardPrimitive.Section>
    </CompareCardPrimitive.Root>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <CompareCardPrimitive.Root>
      <CompareCardPrimitive.Skeleton />
    </CompareCardPrimitive.Root>
  ),
};
