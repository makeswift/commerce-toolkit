import type { Meta, StoryObj } from '@storybook/react-vite';

import { Counter } from '@/components/counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: 'Initial count value',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum count value (increment button disabled at this value)',
      table: {
        defaultValue: { summary: '10' },
      },
    },
    decrementAriaLabel: {
      control: 'text',
      description: 'Accessible label for the decrement button',
      table: {
        defaultValue: { summary: 'Decrease count' },
      },
    },
    incrementAriaLabel: {
      control: 'text',
      description: 'Accessible label for the increment button',
      table: {
        defaultValue: { summary: 'Increase count' },
      },
    },
  },
  args: {
    current: 0,
    max: 10,
    decrementAriaLabel: 'Decrease count',
    incrementAriaLabel: 'Increase count',
  },
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const StartingAtZero: Story = {
  args: {
    current: 0,
    max: 10,
  },
};

export const StartingAtFive: Story = {
  args: {
    current: 5,
    max: 10,
  },
};

export const LargeMaximum: Story = {
  args: {
    current: 0,
    max: 99,
  },
};

export const SmallRange: Story = {
  args: {
    current: 0,
    max: 3,
  },
};

export const NearMaximum: Story = {
  args: {
    current: 8,
    max: 10,
  },
};

export const CustomAriaLabels: Story = {
  args: {
    current: 1,
    max: 5,
    decrementAriaLabel: 'Remove one item',
    incrementAriaLabel: 'Add one item',
  },
};

export const ProductQuantity: Story = {
  args: {
    current: 1,
    max: 10,
    decrementAriaLabel: 'Decrease quantity',
    incrementAriaLabel: 'Increase quantity',
  },
};

export const LimitedStock: Story = {
  args: {
    current: 1,
    max: 3,
    decrementAriaLabel: 'Decrease quantity',
    incrementAriaLabel: 'Increase quantity (only 3 in stock)',
  },
};

export const InProductCard: Story = {
  render: () => (
    <div className="w-80 rounded-lg border border-contrast-200 bg-background p-4">
      <div className="mb-4 flex items-start gap-4">
        <div className="h-20 w-20 rounded bg-contrast-100" />
        <div className="flex-1">
          <h3 className="text-base font-semibold">Product Name</h3>
          <p className="mt-1 text-sm text-contrast-400">$29.99</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Quantity:</span>
        <Counter
          current={1}
          decrementAriaLabel="Decrease quantity"
          incrementAriaLabel="Increase quantity"
          max={5}
        />
      </div>
    </div>
  ),
};

export const InCartItem: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-contrast-200 bg-background p-4">
      <div className="flex gap-4">
        <div className="h-24 w-24 flex-shrink-0 rounded bg-contrast-100" />
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold">Wireless Headphones</h3>
            <p className="mt-1 text-sm text-contrast-400">Color: Black</p>
          </div>
          <div className="flex items-end justify-between">
            <Counter
              current={2}
              decrementAriaLabel="Decrease quantity"
              incrementAriaLabel="Increase quantity"
              max={10}
            />
            <p className="text-base font-semibold">$159.98</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const MultipleCounters: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg border border-contrast-200 bg-background p-4">
        <div>
          <p className="font-semibold">Adults</p>
          <p className="text-sm text-contrast-400">Ages 13+</p>
        </div>
        <Counter
          current={2}
          decrementAriaLabel="Decrease adults"
          incrementAriaLabel="Increase adults"
          max={10}
        />
      </div>
      <div className="flex items-center justify-between rounded-lg border border-contrast-200 bg-background p-4">
        <div>
          <p className="font-semibold">Children</p>
          <p className="text-sm text-contrast-400">Ages 2-12</p>
        </div>
        <Counter
          current={0}
          decrementAriaLabel="Decrease children"
          incrementAriaLabel="Increase children"
          max={10}
        />
      </div>
      <div className="flex items-center justify-between rounded-lg border border-contrast-200 bg-background p-4">
        <div>
          <p className="font-semibold">Infants</p>
          <p className="text-sm text-contrast-400">Under 2</p>
        </div>
        <Counter
          current={0}
          decrementAriaLabel="Decrease infants"
          incrementAriaLabel="Increase infants"
          max={10}
        />
      </div>
    </div>
  ),
};

export const FormIntegration: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="w-96 rounded-lg border border-contrast-200 bg-background p-6">
      <h3 className="mb-4 text-lg font-semibold">Order Details</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium" htmlFor="quantity">
            Quantity
          </label>
          <Counter
            current={1}
            decrementAriaLabel="Decrease quantity"
            incrementAriaLabel="Increase quantity"
            max={20}
          />
        </div>
        <div className="border-t border-contrast-200 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-contrast-400">Unit Price:</span>
            <span>$49.99</span>
          </div>
          <div className="mt-2 flex items-center justify-between font-semibold">
            <span>Total:</span>
            <span>$49.99</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CompactLayout: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <div className="flex items-center gap-3 rounded-lg border border-contrast-200 bg-background p-3">
        <span className="text-sm font-medium">Qty:</span>
        <Counter current={1} max={5} />
      </div>
      <div className="flex items-center gap-3 rounded-lg border border-contrast-200 bg-background p-3">
        <span className="text-sm font-medium">Qty:</span>
        <Counter current={3} max={10} />
      </div>
      <div className="flex items-center gap-3 rounded-lg border border-contrast-200 bg-background p-3">
        <span className="text-sm font-medium">Qty:</span>
        <Counter current={0} max={8} />
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="quantity">
          Select Quantity
        </label>
        <Counter
          current={1}
          decrementAriaLabel="Decrease quantity"
          incrementAriaLabel="Increase quantity"
          max={10}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="tickets">
          Number of Tickets
        </label>
        <Counter
          current={2}
          decrementAriaLabel="Decrease tickets"
          incrementAriaLabel="Increase tickets"
          max={8}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="guests">
          Number of Guests
        </label>
        <Counter
          current={0}
          decrementAriaLabel="Decrease guests"
          incrementAriaLabel="Increase guests"
          max={12}
        />
      </div>
    </div>
  ),
};

export const BookingSelection: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="w-96 rounded-lg border border-contrast-200 bg-background p-6">
      <h3 className="mb-4 text-lg font-semibold">Select Guests</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Rooms</p>
            <p className="text-sm text-contrast-400">Maximum 5 rooms</p>
          </div>
          <Counter
            current={1}
            decrementAriaLabel="Decrease rooms"
            incrementAriaLabel="Increase rooms"
            max={5}
          />
        </div>
        <div className="border-t border-contrast-200" />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Adults</p>
            <p className="text-sm text-contrast-400">Ages 18+</p>
          </div>
          <Counter
            current={2}
            decrementAriaLabel="Decrease adults"
            incrementAriaLabel="Increase adults"
            max={10}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Children</p>
            <p className="text-sm text-contrast-400">Ages 0-17</p>
          </div>
          <Counter
            current={0}
            decrementAriaLabel="Decrease children"
            incrementAriaLabel="Increase children"
            max={10}
          />
        </div>
      </div>
    </div>
  ),
};
