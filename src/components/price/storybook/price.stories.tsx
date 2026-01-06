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
The Price component displays product pricing in various formats including default, range, and sale prices.

## CSS Variables

The following CSS variables can be used to customize the Price component:

\`\`\`css
:root {
  --price-light-text: var(--foreground);
  --price-light-sale-text: var(--foreground);
  --price-dark-text: var(--background);
  --price-dark-sale-text: var(--background);
}
\`\`\`

## Price Types

The component supports three price types:

- **default**: A single price value
- **range**: A minimum and maximum price (e.g., "$10.00 – $25.00")
- **sale**: Shows the current sale price with the original price struck through
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'object',
      description: 'The price object containing type and values',
    },
  },
};

export default meta;
type Story = StoryObj<PriceProps>;

/**
 * The default price display shows a single price value.
 */
export const Default: Story = {
  args: {
    price: {
      type: 'default',
      value: '$18.00',
    },
  },
};

/**
 * Range prices display a minimum and maximum value, useful for products with variants.
 */
export const Range: Story = {
  args: {
    price: {
      type: 'range',
      minValue: '$8.99',
      maxValue: '$29.00',
    },
  },
};

/**
 * Sale prices display the current discounted price alongside the original price with a strikethrough.
 */
export const Sale: Story = {
  args: {
    price: {
      type: 'sale',
      previousValue: '$12.00',
      currentValue: '$9.99',
    },
  },
};

/**
 * ## Composable Anatomy
 *
 * For advanced customization, you can use the primitive components directly to build
 * your own price display. The primitives include:
 *
 * - `Root` - The container element
 * - `Default` - Standard price text
 * - `Strike` - Strikethrough price text (for original/previous prices)
 *
 * ```tsx
 * import * as PricePrimitive from '@/components/price';
 *
 * <PricePrimitive.Root>
 *   <PricePrimitive.Strike>$18.00</PricePrimitive.Strike>{' '}
 *   <PricePrimitive.Default>$12.00</PricePrimitive.Default>
 * </PricePrimitive.Root>
 * ```
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <PricePrimitive.Root>
      <PricePrimitive.Strike>$18.00</PricePrimitive.Strike>{' '}
      <PricePrimitive.Default>$12.00</PricePrimitive.Default>
    </PricePrimitive.Root>
  ),
};
