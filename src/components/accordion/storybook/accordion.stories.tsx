import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Accordion, type AccordionProps } from '@/components/accordion';

const defaultItems = [
  {
    title: 'What is your return policy?',
    content:
      'Our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in their original condition and packaging.',
  },
  {
    title: 'How long does shipping take?',
    content:
      'Shipping typically takes 3-5 business days for domestic orders. International shipping may take longer depending on the destination.',
  },
  {
    title: 'Do you offer international shipping?',
    content:
      'Yes, we offer international shipping to select countries. Please check our shipping policy for more details on available locations.',
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The color scheme of the accordion',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<AccordionProps>;

export const Light: Story = {
  args: {
    items: defaultItems,
    colorScheme: 'light',
    type: 'multiple',
  },
};

export const Dark: Story = {
  args: {
    items: defaultItems,
    colorScheme: 'dark',
    type: 'multiple',
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-[600px] max-w-full rounded-lg bg-foreground p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const SingleOpen: Story = {
  args: {
    items: defaultItems,
    colorScheme: 'light',
    type: 'single',
    collapsible: true,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: defaultItems,
    colorScheme: 'light',
    type: 'multiple',
  },
};

export const WithDefaultValue: Story = {
  args: {
    items: defaultItems,
    colorScheme: 'light',
    type: 'single',
    collapsible: true,
    defaultValue: 'What is your return policy?',
  },
};

export const FAQ: Story = {
  args: {
    colorScheme: 'light',
    type: 'single',
    collapsible: true,
    items: [
      {
        title: 'What is your return policy?',
        content:
          'Our return policy allows you to return items within 30 days of purchase for a full refund. Items must be in their original condition and packaging.',
      },
      {
        title: 'How long does shipping take?',
        content:
          'Shipping typically takes 3-5 business days for domestic orders. International shipping may take longer depending on the destination.',
      },
      {
        title: 'Do you offer international shipping?',
        content:
          'Yes, we offer international shipping to select countries. Please check our shipping policy for more details on available locations.',
      },
      {
        title: 'How can I track my order?',
        content:
          'Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your order on our website.',
      },
      {
        title: 'What payment methods do you accept?',
        content:
          'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay for your convenience.',
      },
    ],
  },
};

export const ProductDetails: Story = {
  args: {
    colorScheme: 'light',
    type: 'multiple',
    items: [
      {
        title: 'Product Specifications',
        content:
          'Dimensions: 15" x 10" x 5"\nWeight: 2.5 lbs\nMaterial: Premium leather and cotton\nColor options: Black, Brown, Navy',
      },
      {
        title: 'Care Instructions',
        content:
          'Clean with a damp cloth. Avoid harsh chemicals. Store in a cool, dry place away from direct sunlight.',
      },
      {
        title: 'Warranty Information',
        content:
          'This product comes with a 2-year manufacturer warranty covering defects in materials and workmanship.',
      },
    ],
  },
};
