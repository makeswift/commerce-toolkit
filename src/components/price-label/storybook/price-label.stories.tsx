import type { Meta, StoryObj } from '@storybook/react-vite';

import { PriceLabel } from '@/components/price-label';

const meta = {
  title: 'Components/PriceLabel',
  component: PriceLabel,
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
      description: 'Color scheme for the price label',
      table: {
        defaultValue: { summary: 'light' },
      },
    },
    price: {
      description: 'Price value - can be a string, range object, or sale object',
    },
  },
  args: {
    colorScheme: 'light',
  },
} satisfies Meta<typeof PriceLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimplePrice: Story = {
  args: {
    price: '$49.99',
  },
};

export const SimplePriceHigher: Story = {
  args: {
    price: '$199.99',
  },
};

export const SimplePriceLarge: Story = {
  args: {
    price: '$1,299.99',
    className: 'text-2xl',
  },
};

export const PriceRange: Story = {
  args: {
    price: {
      type: 'range' as const,
      minValue: '$29.99',
      maxValue: '$79.99',
    },
  },
};

export const PriceRangeLarge: Story = {
  args: {
    price: {
      type: 'range' as const,
      minValue: '$99',
      maxValue: '$249',
    },
  },
};

export const SalePrice: Story = {
  args: {
    price: {
      type: 'sale' as const,
      previousValue: '$79.99',
      currentValue: '$59.99',
    },
  },
};

export const SalePriceLargeDiscount: Story = {
  args: {
    price: {
      type: 'sale' as const,
      previousValue: '$199.99',
      currentValue: '$99.99',
    },
  },
};

export const DarkColorScheme: Story = {
  args: {
    price: '$49.99',
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
      type: 'sale' as const,
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
