import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertCircle, CheckCircle } from 'lucide-react';

import { FormStatus, type FormStatusProps } from '@/components/form-status';
import * as FormStatusPrimitive from '@/components/form-status/primitives';

const meta: Meta<typeof FormStatus> = {
  title: 'Components/FormStatus',
  component: FormStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A status message component for displaying success or error feedback in forms. Shows an appropriate icon and styled message based on the status type.

## CSS Variables

\`\`\`css
:root {
  --form-status-background-error: var(--error-highlight);
  --form-status-text-error: var(--error-shadow);
  --form-status-background-success: var(--success-highlight);
  --form-status-text-success: var(--success-shadow);
}
\`\`\`

## Usage

### High-Level Component

The \`FormStatus\` component provides a simple API for displaying form feedback:

\`\`\`tsx
import { FormStatus } from '@/components/form-status';

<FormStatus type="success">Your changes have been saved.</FormStatus>
<FormStatus type="error">Something went wrong. Please try again.</FormStatus>
\`\`\`

### Custom Icons

Use the \`successIcon\` or \`errorIcon\` props with \`asChild\` to provide custom icons:

\`\`\`tsx
import { FormStatus } from '@/components/form-status';
import { CheckCircle } from 'lucide-react';

<FormStatus
  type="success"
  successIcon={{ asChild: true, children: <CheckCircle size={20} /> }}
>
  Custom icon success message
</FormStatus>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as FormStatus from '@/components/form-status';

<FormStatus.Root type="success">
  <FormStatus.SuccessIcon />
  Your changes have been saved.
</FormStatus.Root>

<FormStatus.Root type="error">
  <FormStatus.ErrorIcon />
  Something went wrong.
</FormStatus.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error'],
      description: 'The type of status message to display',
    },
    children: {
      control: 'text',
      description: 'The message content',
    },
    successIcon: {
      control: false,
      description: 'Custom success icon configuration with asChild support',
    },
    errorIcon: {
      control: false,
      description: 'Custom error icon configuration with asChild support',
    },
  },
};

export default meta;
type Story = StoryObj<FormStatusProps>;

// All variants
export const Default: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-4">
      <FormStatus type="success">Your changes have been saved successfully.</FormStatus>
      <FormStatus type="error">Something went wrong. Please try again.</FormStatus>
    </div>
  ),
};

// With custom icons
export const WithCustomIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <FormStatus
        successIcon={{ asChild: true, children: <CheckCircle size={20} /> }}
        type="success"
      >
        Custom success icon
      </FormStatus>
      <FormStatus errorIcon={{ asChild: true, children: <AlertCircle size={20} /> }} type="error">
        Custom error icon
      </FormStatus>
    </div>
  ),
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <FormStatusPrimitive.Root type="success">
        <FormStatusPrimitive.SuccessIcon />
        Using primitives for success messages.
      </FormStatusPrimitive.Root>
      <FormStatusPrimitive.Root type="error">
        <FormStatusPrimitive.ErrorIcon />
        Using primitives for error messages.
      </FormStatusPrimitive.Root>
    </div>
  ),
};
