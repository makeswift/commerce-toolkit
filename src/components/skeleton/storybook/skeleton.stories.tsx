import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image as ImageIcon } from 'lucide-react';

import * as Skeleton from '@/components/skeleton';

const meta = {
  title: 'Components/Skeleton',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    pending: {
      control: 'boolean',
      description: 'When true, announces loading to screen readers',
      table: { defaultValue: { summary: 'false' } },
    },
    hideOverflow: {
      control: 'boolean',
      description: 'Hides overflow of the root container',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basics: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton.Root pending>
        <Skeleton.Box className="h-4 w-40 rounded" />
      </Skeleton.Root>
      <Skeleton.Root>
        <Skeleton.Text />
        <Skeleton.Text characterCount={20} />
        <Skeleton.Text characterCount="full" />
      </Skeleton.Root>
      <Skeleton.Root>
        <Skeleton.Icon icon={<ImageIcon size={24} />} />
      </Skeleton.Root>
    </div>
  ),
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="rounded-lg bg-foreground p-8">
        <Story />
      </div>
    ),
  ],
  parameters: { backgrounds: { default: 'dark' } },
  render: () => (
    <Skeleton.Root className="w-64 space-y-2" pending>
      <Skeleton.Box className="h-4 w-40 rounded" />
      <Skeleton.Text characterCount={20} className="rounded" />
      <Skeleton.Icon className="h-6 w-6" icon={<ImageIcon size={24} />} />
    </Skeleton.Root>
  ),
};
