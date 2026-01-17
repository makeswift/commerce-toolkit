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
    action: {
      description: 'Optional action button configuration with label and onClick handler',
    },
    dismiss: {
      description:
        'Dismiss button configuration with label (for accessibility) and onClick handler',
    },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Default: Story = {
  args: {
    variant: 'info',
    message: 'New feature available',
    description: 'Check out our new shopping experience.',
    dismiss: {
      label: 'Dismiss alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert
        description="Your order has been placed successfully."
        dismiss={{ label: 'Dismiss success alert', onClick: () => console.log('Dismissed') }}
        message="Order confirmed"
        variant="success"
      />
      <Alert
        description="Only 3 items left in stock."
        dismiss={{ label: 'Dismiss warning alert', onClick: () => console.log('Dismissed') }}
        message="Low inventory"
        variant="warning"
      />
      <Alert
        description="There was an error processing your payment."
        dismiss={{ label: 'Dismiss error alert', onClick: () => console.log('Dismissed') }}
        message="Payment failed"
        variant="error"
      />
      <Alert
        description="Check out our new shopping experience."
        dismiss={{ label: 'Dismiss info alert', onClick: () => console.log('Dismissed') }}
        message="New feature available"
        variant="info"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The alert supports four semantic variants: `success`, `warning`, `error`, and `info`.',
      },
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
    <AlertPrimitive.Root variant="success">
      <AlertPrimitive.Header>
        <AlertPrimitive.Title>Order confirmed</AlertPrimitive.Title>
        <AlertPrimitive.Description>
          Your order #12345 has been placed successfully.
        </AlertPrimitive.Description>
      </AlertPrimitive.Header>
      <AlertPrimitive.Actions>
        <AlertPrimitive.Action onClick={() => console.log('View order')}>
          View Order
        </AlertPrimitive.Action>
        <AlertPrimitive.Dismiss onClick={() => console.log('Dismissed')}>
          Dismiss alert
        </AlertPrimitive.Dismiss>
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

<AlertPrimitive.Root variant="success">
  <AlertPrimitive.Header>
    <AlertPrimitive.Title>Title</AlertPrimitive.Title>
    <AlertPrimitive.Description>Description text</AlertPrimitive.Description>
  </AlertPrimitive.Header>
  <AlertPrimitive.Actions>
    <AlertPrimitive.Action onClick={handleAction}>Action</AlertPrimitive.Action>
    <AlertPrimitive.Dismiss onClick={handleDismiss}>Dismiss</AlertPrimitive.Dismiss>
  </AlertPrimitive.Actions>
</AlertPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
