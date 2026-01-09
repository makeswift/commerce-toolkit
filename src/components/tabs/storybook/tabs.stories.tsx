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
A tabbed interface component for organizing content into separate views. Built on Radix UI primitives with scrollable tab list support.

## CSS Variables

\`\`\`css
:root {
  --tabs-focus: var(--brand);
  --tabs-font-family: var(--font-family-body);
  --tabs-text: var(--contrast-500);
  --tabs-text-hover: var(--foreground);
  --tabs-text-active: var(--foreground);
  --tabs-underline-default: var(--contrast-200);
  --tabs-underline-active: var(--brand);
  --tabs-underline-hover: var(--contrast-200);
  --tabs-border: var(--contrast-100);
}
\`\`\`

## Usage

### High-Level Component

The \`Tabs\` component provides a simple API with a \`tabs\` array:

\`\`\`tsx
import { Tabs } from '@/components/tabs';

const tabs = [
  { value: 'description', label: 'Description', content: <p>Product description...</p> },
  { value: 'shipping', label: 'Shipping', content: <p>Shipping info...</p> },
  { value: 'specs', label: 'Specs', content: <p>Product specs...</p> },
];

<Tabs defaultValue="description" tabs={tabs} />
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Tabs from '@/components/tabs';

<Tabs.Root defaultValue="description">
  <Tabs.List>
    <Tabs.Trigger value="description">Description</Tabs.Trigger>
    <Tabs.Trigger value="shipping">Shipping</Tabs.Trigger>
    <Tabs.Trigger value="specs">Specs</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="description">
    <p>Product description...</p>
  </Tabs.Content>
  <Tabs.Content value="shipping">
    <p>Shipping info...</p>
  </Tabs.Content>
  <Tabs.Content value="specs">
    <p>Product specs...</p>
  </Tabs.Content>
</Tabs.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab to select by default',
    },
    tabs: {
      control: false,
      description: 'Array of tabs with value, label, and content',
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'How tabs are activated when navigating with keyboard',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
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

// Default tabs
export const Default: Story = {
  args: {
    defaultValue: 'description',
    tabs: productTabs,
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
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
