import type { Meta, StoryObj } from '@storybook/react-vite';

import { Label, type LabelProps } from '@/components/label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Dark: Story = {
  args: {
    colorScheme: 'dark',
    children: 'Label',
  },
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-contrast-500 p-4">
        <Story />
      </div>
    ),
  ],
};
