import type { Meta, StoryObj } from '@storybook/react-vite';

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
  --breadcrumbs-font: var(--font-body);
  --breadcrumbs-text-primary: var(--foreground);
  --breadcrumbs-text-secondary: var(--contrast-500);
  --breadcrumbs-fill-icon: var(--contrast-500);
}
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
    icon: {
      description: 'Configuration for a custom separator icon with `asChild` and `children` props',
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

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
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs automatically wrap when the path is long.',
      },
    },
  },
};

/**
 * Use the composable primitives to build custom breadcrumb layouts.
 */
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
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom breadcrumb layouts:

\`\`\`tsx
import * as BreadcrumbsPrimitive from '@/components/breadcrumbs/primitives';
import { AnimatedUnderline } from '@/components/animated-underline';

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
      <BreadcrumbsPrimitive.Current>Current Page</BreadcrumbsPrimitive.Current>
    </BreadcrumbsPrimitive.Item>
  </BreadcrumbsPrimitive.List>
</BreadcrumbsPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
