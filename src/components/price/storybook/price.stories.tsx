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
  --price-light-text: var(--foreground);
  --price-light-sale-text: var(--foreground);
  --price-dark-text: var(--background);
  --price-dark-sale-text: var(--background);
}
\`\`\`

## Usage

### High-Level Component

The \`Price\` component provides a simple API with a \`price\` object:

\`\`\`tsx
import { Price } from '@/components/price';

// Default price
<Price price={{ type: 'default', value: '$18.00' }} />

// Range price (for products with variants)
<Price price={{ type: 'range', minValue: '$8.99', maxValue: '$29.00' }} />

// Sale price (with strikethrough)
<Price price={{ type: 'sale', previousValue: '$18.00', currentValue: '$12.00' }} />
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Price from '@/components/price';

<Price.Root>
  <Price.Strike>$18.00</Price.Strike>{' '}
  <Price.Default>$12.00</Price.Default>
</Price.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'object',
      description: 'The price object with type and values',
    },
  },
};

export default meta;
type Story = StoryObj<PriceProps>;

// Default single price
export const Default: Story = {
  args: {
    price: {
      type: 'default',
      value: '$18.00',
    },
  },
};

// Range price for products with variants
export const Range: Story = {
  args: {
    price: {
      type: 'range',
      minValue: '$8.99',
      maxValue: '$29.00',
    },
  },
};

// Sale price with strikethrough
export const Sale: Story = {
  args: {
    price: {
      type: 'sale',
      previousValue: '$18.00',
      currentValue: '$12.00',
    },
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <PricePrimitive.Root>
      <PricePrimitive.Strike>$18.00</PricePrimitive.Strike>{' '}
      <PricePrimitive.Default>$12.00</PricePrimitive.Default>
    </PricePrimitive.Root>
  ),
};
