import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowUpRight } from 'lucide-react';
import type { ComponentType } from 'react';

import { CategoryCard, type CategoryCardProps } from '@/components/category-card';
import * as CategoryCardPrimitive from '@/components/category-card/primitives';

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A card component for displaying product categories with an image, title, and link. Supports customizable aspect ratios, text sizes, and text positioning.

## CSS Variables

\`\`\`css
:root {
  --category-card-radius:     1rem;
  --category-card-font:       var(--font-body);
  --category-card-text-light: var(--background);
  --category-card-text-dark:  var(--foreground);
  --category-card-icon-light: var(--background);
  --category-card-icon-dark:  var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`CategoryCard\` component provides a simple API for category display:

\`\`\`tsx
import { CategoryCard } from '@/components/category-card';

<CategoryCard
  title="Kitchen Essentials"
  image={{
    src: '/images/kitchen.jpg',
    alt: 'Kitchen products',
  }}
  link={{
    href: '/categories/kitchen',
    ariaLabel: 'Shop Kitchen Essentials',
  }}
  aspectRatio="5/6"
  textSize="small"
  textPosition="outside"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as CategoryCard from '@/components/category-card';
import { ArrowUpRight } from 'lucide-react';

<CategoryCard.Root aspectRatio="5/6" textSize="small" showOverlay>
  <CategoryCard.Icon>
    <ArrowUpRight />
  </CategoryCard.Icon>
  <CategoryCard.Thumbnail>
    <CategoryCard.Image src="..." alt="..." />
    {/* Or use Fallback when no image is available */}
    <CategoryCard.Fallback>Title</CategoryCard.Fallback>
    {/* For text inside the thumbnail */}
    <CategoryCard.Overlay>
      <CategoryCard.Title>Title</CategoryCard.Title>
    </CategoryCard.Overlay>
  </CategoryCard.Thumbnail>
  {/* For text outside the thumbnail */}
  <CategoryCard.Title>Title</CategoryCard.Title>
  <CategoryCard.Link href="..." aria-label="..." />
</CategoryCard.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The category title displayed on the card',
    },
    aspectRatio: {
      control: 'select',
      options: ['5/6', '3/4', '1/1'],
      description: 'The aspect ratio of the card thumbnail',
    },
    textSize: {
      control: 'select',
      options: ['small', 'medium', 'large', 'x-large'],
      description: 'The size of the title text',
    },
    textPosition: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Whether the title appears inside or outside the thumbnail',
    },
    showOverlay: {
      control: 'boolean',
      description: 'Whether to show the gradient overlay when text is inside',
    },
    textColor: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The color scheme for the title text',
    },
    iconColor: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The color scheme for the icon',
    },
    image: {
      control: false,
      description: 'Image object with src and alt properties',
    },
    link: {
      control: false,
      description: 'Link object with href and ariaLabel properties',
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
type Story = StoryObj<CategoryCardProps>;

// Default with text outside
export const Default: Story = {
  args: {
    title: 'Kitchen Essentials',
    image: {
      src: 'https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=900',
      alt: 'Minimal ceramic soap dispenser',
    },
    link: {
      href: '/categories/kitchen',
      ariaLabel: 'Shop Kitchen Essentials',
    },
    aspectRatio: '5/6',
    textSize: 'small',
    textPosition: 'outside',
  },
};

// Text inside with overlay
export const TextInside: Story = {
  args: {
    title: 'Cleaning Supplies',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392996-5c042ab4c170?w=900',
      alt: 'Eco cleaning starter kit',
    },
    link: {
      href: '/categories/cleaning',
      ariaLabel: 'Shop Cleaning Supplies',
    },
    aspectRatio: '5/6',
    textSize: 'medium',
    textPosition: 'inside',
    showOverlay: true,
    textColor: 'light',
    iconColor: 'dark',
  },
};

// Without image (fallback)
export const WithoutImage: Story = {
  args: {
    title: 'New Arrivals',
    link: {
      href: '/categories/new',
      ariaLabel: 'Shop New Arrivals',
    },
    aspectRatio: '3/4',
    textSize: 'large',
    textPosition: 'outside',
  },
};

// Light text and icon colors (for dark images)
export const LightTextAndIcon: Story = {
  args: {
    title: 'Bathroom Storage',
    image: {
      src: 'https://images.unsplash.com/photo-1664815122586-05fe094fb536?w=900',
      alt: 'Minimal bathroom storage jar',
    },
    link: {
      href: '/categories/storage',
      ariaLabel: 'Shop Bathroom Storage',
    },
    aspectRatio: '3/4',
    textSize: 'large',
    textPosition: 'inside',
    showOverlay: true,
    textColor: 'light',
    iconColor: 'light',
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <CategoryCardPrimitive.Root aspectRatio="5/6" showOverlay textSize="small">
      <CategoryCardPrimitive.Icon>
        <ArrowUpRight absoluteStrokeWidth strokeWidth={1.5} />
      </CategoryCardPrimitive.Icon>
      <CategoryCardPrimitive.Thumbnail>
        <CategoryCardPrimitive.Image
          alt="Bamboo countertop brush"
          src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900"
        />
      </CategoryCardPrimitive.Thumbnail>
      <CategoryCardPrimitive.Title>Home Accessories</CategoryCardPrimitive.Title>
      <CategoryCardPrimitive.Link aria-label="Shop Home Accessories" href="/categories/home" />
    </CategoryCardPrimitive.Root>
  ),
};

// Skeleton loading state
export const Skeleton: Story = {
  render: () => (
    <div className="group/category-card" data-aspect-ratio="5/6">
      <CategoryCardPrimitive.Skeleton />
    </div>
  ),
};
