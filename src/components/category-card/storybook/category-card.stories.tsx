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
  --category-card-focus: hsl(var(--primary));
  --category-card-light-offset: hsl(var(--background));
  --category-card-light-text: hsl(var(--foreground));
  --category-card-light-icon: hsl(var(--foreground));
  --category-card-light-background: hsl(var(--contrast-100));
  --category-card-dark-offset: hsl(var(--foreground));
  --category-card-dark-text: hsl(var(--background));
  --category-card-dark-icon: hsl(var(--background));
  --category-card-dark-background: hsl(var(--contrast-500));
  --category-card-font-family: var(--font-family-body);
  --category-card-border-radius: 1rem;
}
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
    showOverlay: true,
  },
};

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
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `textPosition` is set to `"inside"`, the title appears overlaid on the image with an optional gradient overlay.',
      },
    },
  },
};

export const SquareAspectRatio: Story = {
  args: {
    title: 'Bath & Body',
    image: {
      src: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=900',
      alt: 'Linen hand towel',
    },
    link: {
      href: '/categories/bath',
      ariaLabel: 'Shop Bath & Body',
    },
    aspectRatio: '1/1',
    textSize: 'small',
    textPosition: 'outside',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `aspectRatio="1/1"` for a square card layout.',
      },
    },
  },
};

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
  parameters: {
    docs: {
      description: {
        story:
          'When no image is provided, a fallback displays the title text as a decorative background.',
      },
    },
  },
};

/**
 * The CategoryCard can be built using composable primitives for full customization.
 * This example shows the component anatomy using the primitive components.
 */
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
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom category card layouts:

\`\`\`tsx
import * as CategoryCardPrimitive from '@/components/category-card/primitives';
import { ArrowUpRight } from 'lucide-react';

<CategoryCardPrimitive.Root aspectRatio="5/6" textSize="small" showOverlay>
  <CategoryCardPrimitive.Icon>
    <ArrowUpRight />
  </CategoryCardPrimitive.Icon>
  <CategoryCardPrimitive.Thumbnail>
    <CategoryCardPrimitive.Image src="..." alt="..." />
    {/* Or use Fallback when no image is available */}
    <CategoryCardPrimitive.Fallback>Title</CategoryCardPrimitive.Fallback>
    {/* For text inside the thumbnail */}
    <CategoryCardPrimitive.Overlay>
      <CategoryCardPrimitive.Title>Title</CategoryCardPrimitive.Title>
    </CategoryCardPrimitive.Overlay>
  </CategoryCardPrimitive.Thumbnail>
  {/* For text outside the thumbnail */}
  <CategoryCardPrimitive.Title>Title</CategoryCardPrimitive.Title>
  <CategoryCardPrimitive.Link href="..." aria-label="..." />
</CategoryCardPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
