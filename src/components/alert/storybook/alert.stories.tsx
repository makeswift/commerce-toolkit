import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert, type AlertProps } from '@/components/alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
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

export const WithoutDescription: Story = {
  args: {
    variant: 'success',
    message: 'Changes saved',
    dismiss: {
      label: 'Dismiss changes saved alert',
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
};

export const WithActionNoDescription: Story = {
  args: {
    variant: 'warning',
    message: 'Confirm your email',
    action: {
      label: 'Resend',
      onClick: () => console.log('Resend clicked'),
    },
    dismiss: {
      label: 'Dismiss email confirmation alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const LongMessage: Story = {
  args: {
    variant: 'error',
    message: 'Unable to process your request at this time',
    description:
      'We are experiencing technical difficulties. Please try again later or contact support if the problem persists.',
    dismiss: {
      label: 'Dismiss technical difficulties alert',
      onClick: () => console.log('Dismissed'),
    },
  },
};

export const CustomDismissLabel: Story = {
  args: {
    variant: 'info',
    message: 'Cookie consent',
    description: 'We use cookies to improve your experience.',
    dismiss: {
      label: 'Close cookie notice',
      onClick: () => console.log('Dismissed'),
    },
  },
};
