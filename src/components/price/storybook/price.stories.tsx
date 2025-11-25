import type { Meta, StoryObj } from '@storybook/react-vite';

import { Price } from '@/components/price';

const meta = {
  title: 'Components/Price',
  component: Price,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Color scheme for the price',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
    price: {
      description: 'Price value - can be a default, range, or sale object',
    },
  },
  args: {
    colorScheme: 'light',
  },
} satisfies Meta<typeof Price>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimplePrice: Story = {
  args: {
    price: {
      type: 'default',
      value: '$49.99',
    },
  },
};

export const SimplePriceLarge: Story = {
  args: {
    price: {
      type: 'default',
      value: '$1,299.99',
    },
    className: 'text-2xl',
  },
};

export const PriceRange: Story = {
  args: {
    price: {
      type: 'range',
      minValue: '$29.99',
      maxValue: '$79.99',
    },
  },
};

export const SalePrice: Story = {
  args: {
    price: {
      type: 'sale',
      previousValue: '$79.99',
      currentValue: '$59.99',
    },
  },
};

export const DarkColorScheme: Story = {
  args: {
    price: {
      type: 'default',
      value: '$49.99',
    },
    colorScheme: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-foreground p-8">
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

export const DarkColorSchemeSale: Story = {
  args: {
    price: {
      type: 'sale',
      previousValue: '$79.99',
      currentValue: '$59.99',
    },
    colorScheme: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-foreground p-8">
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
