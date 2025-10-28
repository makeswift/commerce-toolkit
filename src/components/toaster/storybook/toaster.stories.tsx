import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/button';
import { Toaster } from '@/components/toaster';
import { toast } from '@/components/toaster/toaster';

const meta = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
  },
  args: {
    position: 'top-right',
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Examples: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toaster position={args.position} />
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => toast.success('Settings saved', { position: args.position })}>
          Success
        </Button>
        <Button onClick={() => toast.error('Something went wrong', { position: args.position })}>
          Error
        </Button>
        <Button onClick={() => toast.warning('Low disk space', { position: args.position })}>
          Warning
        </Button>
        <Button onClick={() => toast.info('New update available', { position: args.position })}>
          Info
        </Button>
        <Button
          onClick={() =>
            toast.success('Item added to cart', {
              position: args.position,
              action: { label: 'Undo', onClick: () => console.log('Undo clicked') },
            })
          }
        >
          Success with action
        </Button>
      </div>
    </div>
  ),
};
