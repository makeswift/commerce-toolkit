import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dot } from 'lucide-react';
import type { ComponentType } from 'react';

import { AnimatedUnderline } from '@/components/animated-underline';
import { Breadcrumbs, type BreadcrumbsProps } from '@/components/breadcrumbs';
import * as BreadcrumbsPrimitive from '@/components/breadcrumbs/primitives';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A navigation component that displays the current page's location within a hierarchy, helping users understand their position and navigate back through parent pages.

## CSS Variables

\`\`\`css
:root {
  --breadcrumbs-font-family: var(--font-family-body);
  --breadcrumbs-primary-text: var(--foreground);
  --breadcrumbs-secondary-text: var(--contrast-500);
  --breadcrumbs-icon: var(--contrast-500);
}
\`\`\`

## Usage

### High-Level Component

The \`Breadcrumbs\` component provides a simple API for breadcrumb navigation:

\`\`\`tsx
import { Breadcrumbs } from '@/components/breadcrumbs';

<Breadcrumbs
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Cleaning Supplies', href: '/products/cleaning' },
  ]}
  ariaLabel="Breadcrumb"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Breadcrumbs from '@/components/breadcrumbs';
import { AnimatedUnderline } from '@/components/animated-underline';

<Breadcrumbs.Root aria-label="Breadcrumb">
  <Breadcrumbs.List>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/">
        <AnimatedUnderline>Home</AnimatedUnderline>
      </Breadcrumbs.Link>
      <Breadcrumbs.Icon />
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Link href="/products">
        <AnimatedUnderline>Products</AnimatedUnderline>
      </Breadcrumbs.Link>
      <Breadcrumbs.Icon />
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Current>Cleaning Supplies</Breadcrumbs.Current>
    </Breadcrumbs.Item>
  </Breadcrumbs.List>
</Breadcrumbs.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    breadcrumbs: {
      control: false,
      description: 'Array of breadcrumb items with label and href',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the navigation landmark',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="bg-background p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

// Default breadcrumbs
export const Default: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Cleaning Supplies', href: '/products/cleaning' },
    ],
    ariaLabel: 'Breadcrumb',
  },
};

// Longer breadcrumb trail
export const LongPath: Story = {
  args: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Kitchen', href: '/products/kitchen' },
      { label: 'Cleaning', href: '/products/kitchen/cleaning' },
      { label: 'Natural Fiber Scrub Brush', href: '/products/kitchen/cleaning/scrub-brush' },
    ],
    ariaLabel: 'Breadcrumb',
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <BreadcrumbsPrimitive.Root aria-label="Breadcrumb">
      <BreadcrumbsPrimitive.List>
        <BreadcrumbsPrimitive.Item>
          <BreadcrumbsPrimitive.Link href="/">
            <AnimatedUnderline>Home</AnimatedUnderline>
          </BreadcrumbsPrimitive.Link>
          <BreadcrumbsPrimitive.Icon />
        </BreadcrumbsPrimitive.Item>
        <BreadcrumbsPrimitive.Item>
          <BreadcrumbsPrimitive.Link href="/products">
            <AnimatedUnderline>Products</AnimatedUnderline>
          </BreadcrumbsPrimitive.Link>
          <BreadcrumbsPrimitive.Icon />
        </BreadcrumbsPrimitive.Item>
        <BreadcrumbsPrimitive.Item>
          <BreadcrumbsPrimitive.Current>Eco Dish Sponge Set</BreadcrumbsPrimitive.Current>
        </BreadcrumbsPrimitive.Item>
      </BreadcrumbsPrimitive.List>
    </BreadcrumbsPrimitive.Root>
  ),
};

// Custom separator icon
export const CustomSeparator: Story = {
  render: () => (
    <BreadcrumbsPrimitive.Root aria-label="Breadcrumb">
      <BreadcrumbsPrimitive.List>
        <BreadcrumbsPrimitive.Item>
          <BreadcrumbsPrimitive.Link href="/">
            <AnimatedUnderline>Home</AnimatedUnderline>
          </BreadcrumbsPrimitive.Link>
          <BreadcrumbsPrimitive.Icon asChild>
            <Dot absoluteStrokeWidth strokeWidth={1.5} />
          </BreadcrumbsPrimitive.Icon>
        </BreadcrumbsPrimitive.Item>
        <BreadcrumbsPrimitive.Item>
          <BreadcrumbsPrimitive.Link href="/categories">
            <AnimatedUnderline>Categories</AnimatedUnderline>
          </BreadcrumbsPrimitive.Link>
          <BreadcrumbsPrimitive.Icon asChild>
            <Dot absoluteStrokeWidth strokeWidth={1.5} />
          </BreadcrumbsPrimitive.Icon>
        </BreadcrumbsPrimitive.Item>
        <BreadcrumbsPrimitive.Item>
          <BreadcrumbsPrimitive.Current>Bathroom</BreadcrumbsPrimitive.Current>
        </BreadcrumbsPrimitive.Item>
      </BreadcrumbsPrimitive.List>
    </BreadcrumbsPrimitive.Root>
  ),
};
