import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image as ImageIcon } from 'lucide-react';

import * as SkeletonPrimitive from '@/components/skeleton';

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
      <SkeletonPrimitive.Root pending>
        <SkeletonPrimitive.Box className="h-4 w-40 rounded" />
      </SkeletonPrimitive.Root>
      <SkeletonPrimitive.Root>
        <SkeletonPrimitive.Text />
        <SkeletonPrimitive.Text characterCount={20} />
        <SkeletonPrimitive.Text characterCount="full" />
      </SkeletonPrimitive.Root>
      <SkeletonPrimitive.Root>
        <SkeletonPrimitive.Icon icon={<ImageIcon size={24} />} />
      </SkeletonPrimitive.Root>
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
    <SkeletonPrimitive.Root className="w-64 space-y-2" pending>
      <SkeletonPrimitive.Box className="h-4 w-40 rounded" />
      <SkeletonPrimitive.Text characterCount={20} className="rounded" />
      <SkeletonPrimitive.Icon className="h-6 w-6" icon={<ImageIcon size={24} />} />
    </SkeletonPrimitive.Root>
  ),
};
