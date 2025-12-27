import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, Package } from 'lucide-react';

import { Card, type CardProps } from '@/components/card';
import * as CardPrimitive from '@/components/card/primitives';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile card component for displaying content in a contained, styled container. Supports optional link behavior for clickable cards.

## CSS Variables

The Card component supports theming through CSS variables:

\`\`\`css
:root {
  --card-focus: var(--brand);
  --card-border-color: var(--contrast-200);
  --card-background: var(--background);
  --card-hover-background: color-mix(in oklab, var(--contrast-100) 50%, transparent);
}
\`\`\`

## Usage

### High-Level Component

The \`Card\` component provides a simple API with an optional \`link\` prop for clickable cards:

\`\`\`tsx
import { Card } from '@/components/card';

<Card
  link={{
    href: '/products',
    ariaLabel: 'View all products',
  }}
>
  <h3>Shop Products</h3>
  <p>Browse our collection</p>
</Card>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Card from '@/components/card';

<Card.Root>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
  <Card.Link href="/page" aria-label="Go to page" />
</Card.Root>
\`\`\`

\`Card.Root\` supports the \`as\` prop for semantic elements, and \`Card.Link\` supports \`asChild\` for router integration:

\`\`\`tsx
import * as Card from '@/components/card';
import Link from 'next/link';

<Card.Root as="article">
  <h3>Products</h3>
  <Card.Link asChild>
    <Link href="/products" aria-label="View products" />
  </Card.Link>
</Card.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'article', 'section', 'aside'],
      description: 'The HTML element to render as',
    },
    link: {
      control: false,
      description: 'Link configuration with href and ariaLabel for clickable cards',
    },
    children: {
      control: false,
      description: 'Content to display inside the card',
    },
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export default meta;
type Story = StoryObj<CardProps>;

// Default card
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="mt-2 text-sm text-contrast-400">
          This is a simple card component with some basic content.
        </p>
      </div>
    ),
  },
};

// Clickable card with link
export const WithLink: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Clickable Card</h3>
        <p className="mt-2 text-sm text-contrast-400">
          This card is clickable and will navigate to a new page.
        </p>
        <div className="mt-4 flex items-center gap-2 font-semibold text-foreground">
          <span>Learn more</span>
          <ArrowRight
            className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
            size={20}
          />
        </div>
      </div>
    ),
    link: {
      href: '#',
      ariaLabel: 'Learn more about this card',
    },
  },
};

// Card with asChild link for router integration
export const WithAsChildLink: Story = {
  name: 'With asChild Link (Monolith)',
  render: () => (
    <Card
      link={{
        href: '/products',
        ariaLabel: 'View products',
        asChild: true,
        children: (
          <a
            href="/products"
            onClick={(e) => {
              e.preventDefault();
              alert('This would navigate using your routing library');
            }}
          />
        ),
      }}
    >
      <h3 className="text-lg font-semibold">Router Integration</h3>
      <p className="mt-2 text-sm text-contrast-400">
        Using asChild on the link for Next.js Link or React Router.
      </p>
    </Card>
  ),
};

// Card with as prop for semantic element
export const WithAsRoot: Story = {
  name: 'With as Prop (Monolith)',
  render: () => (
    <Card as="article" link={{ href: '#', ariaLabel: 'Learn more' }}>
      <h3 className="text-lg font-semibold">Semantic Article</h3>
      <p className="mt-2 text-sm text-contrast-400">
        Using the as prop to render as an article element for better semantics.
      </p>
    </Card>
  ),
};

// Card with icon
export const WithIcon: Story = {
  args: {
    children: (
      <div>
        <div className="bg-brand-background mb-4 flex h-12 w-12 items-center justify-center rounded-full">
          <Package className="text-brand-shadow" size={24} />
        </div>
        <h3 className="text-lg font-semibold">Free Shipping</h3>
        <p className="mt-2 text-sm text-contrast-400">Get free shipping on all orders over $50.</p>
      </div>
    ),
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <CardPrimitive.Root>
      <h3 className="text-lg font-semibold">Composable Card</h3>
      <p className="mt-2 text-sm text-contrast-400">Using primitives for custom card layouts.</p>
      <CardPrimitive.Link aria-label="View details" href="#" />
    </CardPrimitive.Root>
  ),
};

// With as prop for semantic element (primitives)
export const WithAsRootPrimitive: Story = {
  name: 'With as Prop (Primitive)',
  render: () => (
    <CardPrimitive.Root as="article">
      <h3 className="text-lg font-semibold">Semantic Article</h3>
      <p className="mt-2 text-sm text-contrast-400">
        Using the as prop to render as an article element for better semantics.
      </p>
      <CardPrimitive.Link aria-label="View details" href="#" />
    </CardPrimitive.Root>
  ),
};

// With asChild for router integration (primitives)
export const WithAsChildLinkPrimitive: Story = {
  name: 'With asChild Link (Primitive)',
  render: () => (
    <CardPrimitive.Root>
      <h3 className="text-lg font-semibold">Router Integration</h3>
      <p className="mt-2 text-sm text-contrast-400">
        The Card.Link supports asChild for Next.js Link or React Router.
      </p>
      <CardPrimitive.Link asChild>
        <a
          aria-label="View products"
          href="/products"
          onClick={(e) => {
            e.preventDefault();
            alert('This would navigate using your routing library');
          }}
        />
      </CardPrimitive.Link>
    </CardPrimitive.Root>
  ),
};

// Skeleton loading state
export const Skeleton: Story = {
  render: () => <CardPrimitive.Skeleton className="h-40 w-96" />,
};
