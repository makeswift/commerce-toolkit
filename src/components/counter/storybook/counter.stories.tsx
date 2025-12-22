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
    defaultValue: {
      control: 'number',
      description: 'Initial count value (uncontrolled mode)',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    min: {
      control: 'number',
      description: 'Minimum count value (decrement button disabled at this value)',
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
    disabled: {
      control: 'boolean',
      description: 'Whether the counter is disabled',
      table: {
        defaultValue: { summary: 'false' },
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
    defaultValue: 0,
    min: 0,
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

export const WithInitialValue: Story = {
  args: {
    defaultValue: 5,
  },
};

export const SmallRange: Story = {
  args: {
    max: 3,
  },
};

export const AtMaximum: Story = {
  args: {
    defaultValue: 10,
    max: 10,
  },
};

export const LargeRange: Story = {
  args: {
    max: 100,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 3,
    disabled: true,
  },
};

export const WithMinValue: Story = {
  args: {
    defaultValue: 5,
    min: 3,
    max: 10,
  },
};
