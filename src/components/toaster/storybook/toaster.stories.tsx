import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/button';
import { toast, Toaster, type ToasterProps } from '@/components/toaster';

const noop = () => {
  // no-op for storybook
};

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A toast notification system built on Sonner. Uses the Alert component internally for consistent styling across variants.

## CSS Variables

The Toaster inherits theming from the Alert component:

\`\`\`css
:root {
  --alert-text: var(--text-primary);
  --alert-fill-info: var(--background);
  --alert-fill-success: var(--success-background);
  --alert-fill-warning: var(--warning-background);
  --alert-fill-error: var(--error-background);
  --alert-font-title: var(--font-body);
  --alert-font-description: var(--font-body);
}
\`\`\`
        `,
      },
    },
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
      description: 'Position of toast notifications on the screen',
    },
  },
  args: {
    position: 'top-right',
  },
};

export default meta;
type Story = StoryObj<ToasterProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All toast variants: success, error, warning, and info.',
      },
    },
  },
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
      </div>
    </div>
  ),
};

export const WithAction: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toast with an action button for user interaction.',
      },
    },
  },
  render: (args) => (
    <div className="space-y-4">
      <Toaster position={args.position} />
      <Button
        onClick={() =>
          toast.success('Item added to cart', {
            position: args.position,
            action: { label: 'View Cart', onClick: noop },
          })
        }
      >
        Add to Cart
      </Button>
    </div>
  ),
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toast with additional description text.',
      },
    },
  },
  render: (args) => (
    <div className="space-y-4">
      <Toaster position={args.position} />
      <Button
        onClick={() =>
          toast.info('Order shipped', {
            position: args.position,
            description: 'Your order is on its way and will arrive in 2-3 business days.',
          })
        }
      >
        Show Notification
      </Button>
    </div>
  ),
};
