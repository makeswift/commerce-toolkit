import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from '@/components/spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Spinner size',
      table: { defaultValue: { summary: 'sm' } },
    },
    loadingAriaLabel: {
      control: 'text',
      description: 'ARIA label for screen readers',
      table: { defaultValue: { summary: 'Loading...' } },
    },
  },
  args: {
    size: 'sm',
    loadingAriaLabel: 'Loading...',
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" />
        <span className="text-xs text-contrast-400">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-contrast-400">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-contrast-400">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-contrast-400">lg</span>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button
      className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background disabled:opacity-70"
      disabled
    >
      <Spinner size="xs" />
      Saving...
    </button>
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
  render: () => <Spinner size="md" />,
};
