import type { Meta, StoryObj } from '@storybook/react-vite';

import { ScrollArea } from '@/components/scroll-area';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
      description: 'The orientation of the scroll area',
    },
  },
  args: {
    className: 'h-64 w-64 border border-gray-300 rounded',
    children: 'Scroll content',
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    className: 'h-64 w-64 border border-gray-300 rounded p-4',
    orientation: 'vertical',
    children: (
      <div>
        <p>This is a vertical scroll area.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        <p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
      </div>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    className: 'h-32 w-64 border border-gray-300 rounded p-4',
    orientation: 'horizontal',
    children: (
      <div className="flex w-max gap-4">
        <div className="flex h-24 w-32 items-center justify-center rounded bg-gray-200">Box 1</div>
        <div className="flex h-24 w-32 items-center justify-center rounded bg-gray-200">Box 2</div>
        <div className="flex h-24 w-32 items-center justify-center rounded bg-gray-200">Box 3</div>
        <div className="flex h-24 w-32 items-center justify-center rounded bg-gray-200">Box 4</div>
        <div className="flex h-24 w-32 items-center justify-center rounded bg-gray-200">Box 5</div>
      </div>
    ),
  },
};

export const Both: Story = {
  args: {
    className: 'h-64 w-64 border border-gray-300 rounded p-4',
    orientation: 'both',
    children: (
      <div className="w-max">
        <p className="whitespace-nowrap">
          This scroll area scrolls both vertically and horizontally.
        </p>
        <p className="whitespace-nowrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <p className="whitespace-nowrap">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="whitespace-nowrap">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p className="whitespace-nowrap">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <p className="whitespace-nowrap">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
        <p className="whitespace-nowrap">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>
        <p className="whitespace-nowrap">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <p className="whitespace-nowrap">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
        <p className="whitespace-nowrap">
          Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
        </p>
      </div>
    ),
  },
};
