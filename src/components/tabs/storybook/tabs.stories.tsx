import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { ButtonLink } from '@/components/button-link';
import { Tabs, type TabsProps } from '@/components/tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: ' fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab to select by default',
    },
    tabs: {
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
      <div className="prose prose-sm max-w-none py-4">
        <p>
          Crafted with premium materials and thoughtful design, this product combines exceptional
          quality with everyday functionality. Features include durable construction, versatile use
          across multiple settings, and eco-friendly manufacturing processes that reduce
          environmental impact. Perfect for both beginners and enthusiasts alike, it offers the
          ideal balance of performance and style.
        </p>
      </div>
    ),
  },
  {
    value: 'shipping',
    label: 'Shipping & Returns',
    content: (
      <div className="prose prose-sm max-w-none py-4">
        <p>
          Orders ship within 1-2 business days with delivery typically arriving in 3-7 days
          (expedited options available). All purchases include tracking information sent via email.
          Returns are accepted within 30 days of delivery for unused items in original packaging
          with tags attached. Simply contact customer service or initiate a return through your
          account for a full refund processed within 5-7 business days of receipt.
        </p>
        <ButtonLink className="not-prose" href="#" size="x-small">
          Start a return
        </ButtonLink>
      </div>
    ),
  },
  {
    value: 'specs',
    label: 'Specs',
    content: (
      <div className="prose prose-sm max-w-none py-4">
        <dl className="not-prose grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm text-foreground [&>dd]:font-normal [&>dt]:font-semibold">
          <dt>Dimensions</dt>
          <dd>12&quot; × 8&quot; × 4&quot; (30cm × 20cm × 10cm)</dd>

          <dt>Weight</dt>
          <dd>1.2 lbs (550g)</dd>

          <dt>Materials</dt>
          <dd>Recycled polyester, organic cotton, aluminum hardware</dd>

          <dt>Country of Origin</dt>
          <dd>Made in Portugal</dd>

          <dt>Care</dt>
          <dd>Spot clean or hand wash with mild detergent</dd>

          <dt>Capacity</dt>
          <dd>15L / Holds up to 15 lbs</dd>
        </dl>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    defaultValue: 'description',
    tabs: productTabs,
  },
};
