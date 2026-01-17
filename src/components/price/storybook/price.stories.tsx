import type { Meta, StoryObj } from '@storybook/react-vite';

import * as PricePrimitive from '@/components/price';
import { Price, type PriceProps } from '@/components/price/price';

const meta: Meta<typeof Price> = {
  title: 'Components/Price',
  component: Price,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A price display component supporting default, range, and sale price formats.

## CSS Variables

\`\`\`css
:root {
  --price-text: var(--text-primary);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'object',
      description:
        'Price object with `type` ("default", "range", or "sale") and corresponding value fields',
    },
  },
};

export default meta;
type Story = StoryObj<PriceProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A single price display.',
      },
    },
  },
  args: {
    price: {
      type: 'default',
      value: '$18.00',
    },
  },
};

export const Range: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A price range for products with multiple variants.',
      },
    },
  },
  args: {
    price: {
      type: 'range',
      minValue: '$8.99',
      maxValue: '$29.00',
    },
  },
};

export const Sale: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A sale price with the original price struck through.',
      },
    },
  },
  args: {
    price: {
      type: 'sale',
      previousValue: '$18.00',
      currentValue: '$12.00',
    },
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
<PricePrimitive.Root>
  <PricePrimitive.Strike>$18.00</PricePrimitive.Strike>{' '}
  <PricePrimitive.Default>$12.00</PricePrimitive.Default>
</PricePrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <PricePrimitive.Root>
      <PricePrimitive.Strike>$18.00</PricePrimitive.Strike>{' '}
      <PricePrimitive.Default>$12.00</PricePrimitive.Default>
    </PricePrimitive.Root>
  ),
};
