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
A toast notification system built on Sonner with Alert component styling. Displays temporary messages for user feedback.

## CSS Variables

The Toaster uses the Alert component internally, which supports theming through CSS variables:

\`\`\`css
:root {
  --alert-success-background: color-mix(in oklab, var(--success), white 75%);
  --alert-warning-background: color-mix(in oklab, var(--warning), white 75%);
  --alert-error-background: color-mix(in oklab, var(--error), white 75%);
  --alert-info-background: var(--background);
  --alert-font-family: var(--font-family-body);
  --alert-border: color-mix(in oklab, var(--foreground) 10%, transparent);
  --alert-message-text: var(--foreground);
  --alert-description-text: color-mix(in oklab, var(--foreground) 50%, transparent);
}
\`\`\`

## Usage

Add the \`Toaster\` component to your app layout, then use the \`toast\` object to trigger notifications:

\`\`\`tsx
import { toast, Toaster } from '@/components/toaster';

// In your layout
<Toaster position="top-right" />

// Trigger toasts from anywhere
toast.success('Settings saved');
toast.error('Something went wrong');
toast.warning('Low disk space');
toast.info('New update available');

// With options
toast.success('Item added to cart', {
  description: 'You can view your cart anytime',
  action: { label: 'View Cart', onClick: () => navigateToCart() },
});
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

// All toast variants
export const Default: Story = {
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

// With action button
export const WithAction: Story = {
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

// With description
export const WithDescription: Story = {
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
