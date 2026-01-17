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
  --form-status-fill-error: var(--error-background);
  --form-status-text-error: var(--error-foreground);
  --form-status-fill-success: var(--success-background);
  --form-status-text-success: var(--success-foreground);
}
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
      description: 'Custom success icon configuration with `asChild` support',
    },
    errorIcon: {
      control: false,
      description: 'Custom error icon configuration with `asChild` support',
    },
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
};

export default meta;
type Story = StoryObj<FormStatusProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Success and error status messages with default icons.',
      },
      source: {
        code: `
<FormStatus type="success">Your changes have been saved successfully.</FormStatus>
<FormStatus type="error">Something went wrong. Please try again.</FormStatus>
        `,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <FormStatus type="success">Your changes have been saved successfully.</FormStatus>
      <FormStatus type="error">Something went wrong. Please try again.</FormStatus>
    </div>
  ),
};

export const WithCustomIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `successIcon` or `errorIcon` props with `asChild: true` to provide custom icons.',
      },
      source: {
        code: `
<FormStatus
  type="success"
  successIcon={{ asChild: true, children: <CheckCircle size={20} /> }}
>
  Custom success icon
</FormStatus>

<FormStatus
  type="error"
  errorIcon={{ asChild: true, children: <AlertCircle size={20} /> }}
>
  Custom error icon
</FormStatus>
        `,
      },
    },
  },
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                       | Description                                         |
|---------------------------------|-----------------------------------------------------|
| \`FormStatusPrimitive.Root\`       | Container with background/text color based on type. |
| \`FormStatusPrimitive.SuccessIcon\` | Success icon with \`asChild\` support.                |
| \`FormStatusPrimitive.ErrorIcon\`   | Error icon with \`asChild\` support.                  |
        `,
      },
      source: {
        code: `
import * as FormStatusPrimitive from '@/components/form-status/primitives';

<FormStatusPrimitive.Root type="success">
  <FormStatusPrimitive.SuccessIcon />
  Using primitives for success messages.
</FormStatusPrimitive.Root>

<FormStatusPrimitive.Root type="error">
  <FormStatusPrimitive.ErrorIcon />
  Using primitives for error messages.
</FormStatusPrimitive.Root>
        `,
      },
    },
  },
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
