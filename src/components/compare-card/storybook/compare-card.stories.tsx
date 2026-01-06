import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentType, Fragment } from 'react';

import { CompareCard, type CompareCardProps } from '@/components/compare-card';
import * as CompareCardPrimitive from '@/components/compare-card/primitives';
import { ProductCard } from '@/components/product-card';
import { Reveal } from '@/index';

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

## Composable Anatomy

The CompareCard can be built using composable primitives for full customization:

\`\`\`tsx
import * as CompareCardPrimitive from '@/components/compare-card/primitives';
import { ProductCard } from '@/components/product-card';

<CompareCardPrimitive.Root>
  <CompareCardPrimitive.Product>
    <ProductCard product={...} cartAction={...} compareAction={...} />
  </CompareCardPrimitive.Product>
  <CompareCardPrimitive.Description>
    <CompareCardPrimitive.DescriptionLabel>Description</CompareCardPrimitive.DescriptionLabel>
    <CompareCardPrimitive.DescriptionContent>...</CompareCardPrimitive.DescriptionContent>
    {/* Or use DescriptionEmpty when no description is available */}
    <CompareCardPrimitive.DescriptionEmpty>No description</CompareCardPrimitive.DescriptionEmpty>
  </CompareCardPrimitive.Description>
  <CompareCardPrimitive.Specs>
    <CompareCardPrimitive.SpecsLabel>Specifications</CompareCardPrimitive.SpecsLabel>
    <CompareCardPrimitive.SpecsList>
      <CompareCardPrimitive.SpecsTerm>Material:</CompareCardPrimitive.SpecsTerm>
      <CompareCardPrimitive.SpecsDefinition>Bamboo</CompareCardPrimitive.SpecsDefinition>
    </CompareCardPrimitive.SpecsList>
    {/* Or use SpecsEmpty when no specs are available */}
    <CompareCardPrimitive.SpecsEmpty>No specifications</CompareCardPrimitive.SpecsEmpty>
  </CompareCardPrimitive.Specs>
</CompareCardPrimitive.Root>
\`\`\`

## Components

| Component | Description |
|-----------|-------------|
| \`Root\` | Container with flex layout and dividers between sections. |
| \`Product\` | Wrapper for the embedded ProductCard. |
| \`Description\` | Container for the description section. |
| \`DescriptionLabel\` | Label heading for the description section. |
| \`DescriptionContent\` | The product description text. |
| \`DescriptionEmpty\` | Empty state message when no description is available. |
| \`Specs\` | Container for the specifications section. |
| \`SpecsLabel\` | Label heading for the specifications section. |
| \`SpecsList\` | Definition list container for spec items. |
| \`SpecsTerm\` | The name/label of a specification. |
| \`SpecsDefinition\` | The value of a specification. |
| \`SpecsEmpty\` | Empty state message when no specs are available. |
| \`Skeleton\` | Loading placeholder for the card. |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: false,
      description: 'Product data object passed to the embedded ProductCard',
    },
    cartAction: {
      control: false,
      description: 'Cart action configuration passed to the embedded ProductCard',
    },
    compareAction: {
      control: false,
      description: 'Compare action configuration passed to the embedded ProductCard',
    },
    description: {
      control: 'text',
      description: 'Product description text',
    },
    descriptionLabel: {
      control: 'text',
      description: 'Label for the description section',
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
      description: 'Label for the specifications section',
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

const defaultProduct = {
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
  price: { type: 'default' as const, value: '$8.99' },
};

export const Default: Story = {
  args: {
    product: defaultProduct,
    description:
      'A sturdy, eco-friendly scrub brush made from natural plant fibers and a sustainably sourced wooden handle. Perfect for pots, pans, and tough kitchen messes.',
    specs: [
      { name: 'Material', value: 'Natural plant fiber, beechwood' },
      { name: 'Dimensions', value: '6" x 2.5"' },
      { name: 'Care', value: 'Rinse and air dry' },
    ],
  },
};

export const WithDescription: Story = {
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
      price: { type: 'default' as const, value: '$18.00' },
    },
    description:
      'A beautifully crafted ceramic soap dispenser with a matte finish and stainless steel pump. Elevates any bathroom or kitchen counter with its minimalist design.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When only a description is provided, the specs section displays an empty state message.',
      },
    },
  },
};

export const WithSpecs: Story = {
  args: {
    product: {
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
      price: { type: 'default' as const, value: '$10.50' },
    },
    specs: [
      { name: 'Material', value: 'Bamboo, horsehair bristles' },
      { name: 'Dimensions', value: '8" x 3"' },
      { name: 'Weight', value: '4 oz' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'When only specs are provided, the description section displays an empty state message.',
      },
    },
  },
};

export const EmptyStates: Story = {
  args: {
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
      price: { type: 'default' as const, value: '$6.49' },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'When no description or specs are provided, empty state messages are displayed for both sections.',
      },
    },
  },
};

export const WithCartAction: Story = {
  args: {
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
      price: { type: 'default' as const, value: '$14.50' },
    },
    cartAction: {
      type: 'form',
      action: (formData) => {
        console.log('Added to cart:', formData.get('id'));
      },
      label: 'Add to Cart',
    },
    description:
      'A sleek glass pump bottle with a brushed metal pump mechanism. Perfect for hand soap, dish soap, or lotion.',
    specs: [
      { name: 'Capacity', value: '16 oz' },
      { name: 'Material', value: 'Recycled glass, stainless steel' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `cartAction` prop is passed through to the embedded ProductCard to enable add-to-cart functionality.',
      },
    },
  },
};

export const WithCompareAction: Story = {
  args: {
    product: {
      id: 'amber-glass-spray-bottle',
      title: 'Amber Glass Spray Bottle',
      subtitle: 'Cleaning Supplies',
      link: {
        href: '/products/amber-glass-spray-bottle',
        ariaLabel: 'View Amber Glass Spray Bottle',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?w=900',
        alt: 'Amber glass spray bottle',
      },
      showRating: true,
      rating: 4.8,
      price: { type: 'default' as const, value: '$12.00' },
    },
    compareAction: {
      id: 'compare-amber-glass-spray-bottle',
      label: 'Compare',
    },
    description:
      'A durable amber glass spray bottle that protects light-sensitive solutions. Great for DIY cleaning products.',
    specs: [
      { name: 'Capacity', value: '16 oz' },
      { name: 'Material', value: 'Amber glass, plastic trigger' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `compareAction` prop is passed through to the embedded ProductCard to enable product comparison functionality.',
      },
    },
  },
};

export const CustomLabels: Story = {
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
      price: { type: 'default' as const, value: '$12.00' },
    },
    descriptionLabel: 'About this product',
    emptyDescriptionLabel: 'No product details available.',
    specsLabel: 'Specifications',
    emptySpecsLabel: 'No specifications listed.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize section labels and empty state messages using the label props.',
      },
    },
  },
};

/**
 * Use the composable primitives to build custom compare card layouts.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <CompareCardPrimitive.Root>
      <CompareCardPrimitive.Product>
        <ProductCard
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
        <Reveal>
          <CompareCardPrimitive.DescriptionContent>
            A versatile cleaning brush with an ergonomic wooden handle and durable bristles. Great
            for dishes, vegetables, and general cleaning tasks.
          </CompareCardPrimitive.DescriptionContent>
        </Reveal>
      </CompareCardPrimitive.Description>
      <CompareCardPrimitive.Specs>
        <CompareCardPrimitive.SpecsLabel>Specifications</CompareCardPrimitive.SpecsLabel>
        <Reveal>
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
        </Reveal>
      </CompareCardPrimitive.Specs>
    </CompareCardPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom compare card layouts:

\`\`\`tsx
import * as CompareCardPrimitive from '@/components/compare-card/primitives';
import { ProductCard } from '@/components/product-card';
import { Reveal } from '@/index';

<CompareCardPrimitive.Root>
  <CompareCardPrimitive.Product>
    <ProductCard product={...} />
  </CompareCardPrimitive.Product>
  <CompareCardPrimitive.Description>
    <CompareCardPrimitive.DescriptionLabel>Description</CompareCardPrimitive.DescriptionLabel>
    <Reveal>
      <CompareCardPrimitive.DescriptionContent>
        Product description text...
      </CompareCardPrimitive.DescriptionContent>
    </Reveal>
  </CompareCardPrimitive.Description>
  <CompareCardPrimitive.Specs>
    <CompareCardPrimitive.SpecsLabel>Specifications</CompareCardPrimitive.SpecsLabel>
    <Reveal>
      <CompareCardPrimitive.SpecsList>
        <CompareCardPrimitive.SpecsTerm>Material: </CompareCardPrimitive.SpecsTerm>
        <CompareCardPrimitive.SpecsDefinition>Wood</CompareCardPrimitive.SpecsDefinition>
      </CompareCardPrimitive.SpecsList>
    </Reveal>
  </CompareCardPrimitive.Specs>
</CompareCardPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};

export const Skeleton: Story = {
  render: () => (
    <CompareCardPrimitive.Root>
      <CompareCardPrimitive.Skeleton />
    </CompareCardPrimitive.Root>
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
