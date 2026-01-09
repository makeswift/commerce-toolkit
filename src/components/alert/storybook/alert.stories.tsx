import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert, type AlertProps } from '@/components/alert';
import * as AlertPrimitive from '@/components/alert/primitives';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A notification component for displaying important messages to users with support for different severity levels.

## CSS Variables

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
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
      description: 'The visual style variant of the alert',
    },
    message: {
      control: 'text',
      description: 'The main message to display',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Payment successful',
    description: 'Your payment has been processed successfully.',
    dismiss: {
      label: 'Dismiss payment alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Low inventory',
    description: 'Only 3 items left in stock.',
    dismiss: {
      label: 'Dismiss inventory alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Payment failed',
    description: 'There was an error processing your payment. Please try again.',
    dismiss: {
      label: 'Dismiss payment failure alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'New feature available',
    description: 'Check out our new shopping experience.',
    dismiss: {
      label: 'Dismiss new feature alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const WithAction: Story = {
  args: {
    variant: 'info',
    message: 'Update available',
    description: 'A new version of the app is available.',
    action: {
      label: 'Update',
      onClick: () => console.log('Update clicked'),
    },
    dismiss: {
      label: 'Dismiss update alert',
      onClick: () => console.log('Dismissed'),
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Alerts can include an action button for user interaction.',
      },
    },
  },
};

/**
 * The Alert can be built using composable primitives for full customization.
 * This example shows the component anatomy using the primitive components.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <AlertPrimitive.Root
      dismiss={{ label: 'Dismiss alert', onClick: () => console.log('Dismissed') }}
      variant="success"
    >
      <AlertPrimitive.Header>
        <AlertPrimitive.Title>Order confirmed</AlertPrimitive.Title>
        <AlertPrimitive.Description>
          Your order #12345 has been placed successfully.
        </AlertPrimitive.Description>
      </AlertPrimitive.Header>
      <AlertPrimitive.Actions>
        <AlertPrimitive.Dismiss />
      </AlertPrimitive.Actions>
    </AlertPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom alert layouts:

\`\`\`tsx
import * as AlertPrimitive from '@/components/alert/primitives';

<AlertPrimitive.Root
  variant="success"
  dismiss={{ label: 'Dismiss', onClick: handleDismiss }}
>
  <AlertPrimitive.Header>
    <AlertPrimitive.Title>Title</AlertPrimitive.Title>
    <AlertPrimitive.Description>Description text</AlertPrimitive.Description>
  </AlertPrimitive.Header>
  <AlertPrimitive.Actions>
    <AlertPrimitive.Action />
    <AlertPrimitive.Dismiss />
  </AlertPrimitive.Actions>
</AlertPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
