import type { CheckedState } from '@radix-ui/react-checkbox';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { Checkbox } from '@/components/checkbox/checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Visual theme for light/dark backgrounds',
    },
    disabled: { control: 'boolean', description: 'Disabled state' },
    required: { control: 'boolean', description: 'Required state' },
  },
  args: {
    colorScheme: 'light',
    required: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Dark: Story = {
  args: {
    colorScheme: 'dark',
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="rounded-lg bg-foreground p-6">
        <Story />
      </div>
    ),
  ],
};

export const Controlled: Story = {
  args: {},
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          onCheckedChange={(value: CheckedState) => setChecked(Boolean(value))}
        />
        <div className="text-sm text-contrast-500">Current value: {String(checked)}</div>
      </div>
    );
  },
};
