import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Tabs, type TabsProps } from '@/components/tabs';
import * as TabsPrimitive from '@/components/tabs/primitives';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A tabbed interface for organizing content into separate views. Built on Radix UI with scrollable tab list support.

## CSS Variables

\`\`\`css
:root {
  --tabs-text: var(--text-secondary);
  --tabs-text-hover: var(--text-primary);
  --tabs-text-active: var(--text-primary);
  --tabs-font: var(--font-body);
  --tabs-underline: var(--contrast-200);
  --tabs-underline-active: var(--brand);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initially selected tab value',
    },
    tabs: {
      control: false,
      description: 'Array of tab objects with `value`, `label`, and `content`',
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'Keyboard navigation behavior',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tab list orientation',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="mx-auto max-w-3xl bg-background px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<TabsProps>;

const productTabs: TabsProps['tabs'] = [
  {
    value: 'description',
    label: 'Description',
    content: (
      <p className="py-4 text-sm">
        Crafted with premium materials and thoughtful design, this product combines exceptional
        quality with everyday functionality. Features include durable construction, versatile use
        across multiple settings, and eco-friendly manufacturing processes.
      </p>
    ),
  },
  {
    value: 'shipping',
    label: 'Shipping & Returns',
    content: (
      <p className="py-4 text-sm">
        Orders ship within 1-2 business days with delivery typically arriving in 3-7 days. Returns
        are accepted within 30 days of delivery for unused items in original packaging.
      </p>
    ),
  },
  {
    value: 'specs',
    label: 'Specs',
    content: (
      <p className="py-4 text-sm">
        Dimensions: 12&quot; × 8&quot; × 4&quot; | Weight: 1.2 lbs | Materials: Recycled polyester,
        organic cotton | Made in Portugal
      </p>
    ),
  },
];

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabbed interface with product information sections.',
      },
    },
  },
  args: {
    defaultValue: 'description',
    tabs: productTabs,
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitive components for custom layouts.',
      },
      source: {
        code: `
<TabsPrimitive.Root defaultValue="overview">
  <TabsPrimitive.List>
    <TabsPrimitive.Trigger value="overview">Overview</TabsPrimitive.Trigger>
    <TabsPrimitive.Trigger value="features">Features</TabsPrimitive.Trigger>
    <TabsPrimitive.Trigger value="reviews">Reviews</TabsPrimitive.Trigger>
  </TabsPrimitive.List>
  <TabsPrimitive.Content value="overview">
    <p>Product overview content.</p>
  </TabsPrimitive.Content>
  <TabsPrimitive.Content value="features">
    <p>Product features content.</p>
  </TabsPrimitive.Content>
  <TabsPrimitive.Content value="reviews">
    <p>Customer reviews content.</p>
  </TabsPrimitive.Content>
</TabsPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <TabsPrimitive.Root defaultValue="overview">
      <TabsPrimitive.List>
        <TabsPrimitive.Trigger value="overview">Overview</TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger value="features">Features</TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger value="reviews">Reviews</TabsPrimitive.Trigger>
      </TabsPrimitive.List>
      <TabsPrimitive.Content value="overview">
        <p className="py-4 text-sm">Product overview content using composable primitives.</p>
      </TabsPrimitive.Content>
      <TabsPrimitive.Content value="features">
        <p className="py-4 text-sm">Product features content.</p>
      </TabsPrimitive.Content>
      <TabsPrimitive.Content value="reviews">
        <p className="py-4 text-sm">Customer reviews content.</p>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  ),
};
