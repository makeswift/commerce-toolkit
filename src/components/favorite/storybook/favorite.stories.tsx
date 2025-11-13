import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Favorite } from '@/components/favorite';

const meta = {
  title: 'Components/Favorite',
  component: Favorite,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the favorite is active/checked',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    setChecked: {
      action: 'toggled',
      description: 'Callback function called when the favorite state changes',
    },
  },
} satisfies Meta<typeof Favorite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    setChecked: () => undefined,
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Favorite checked={checked} setChecked={setChecked} />;
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    setChecked: () => undefined,
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Favorite checked={checked} setChecked={setChecked} />;
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    setChecked: () => undefined,
  },
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Favorite checked={checked} setChecked={setChecked} />;
  },
};
