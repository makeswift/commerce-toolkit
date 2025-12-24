import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormStatus, type FormStatusProps } from '@/components/form-status';

/**
 * The FormStatus component displays success or error messages with an appropriate icon.
 *
 * ## CSS Variables
 *
 * This component supports the following CSS variables for theming:
 *
 * ```css
 * :root {
 *   --form-status-background-error: color-mix(in oklab, hsl(var(--error)), white 75%);
 *   --form-status-text-error: color-mix(in oklab, hsl(var(--error)), black 75%);
 *   --form-status-background-success: color-mix(in oklab, hsl(var(--success)), white 75%);
 *   --form-status-text-success: color-mix(in oklab, hsl(var(--success)), black 75%);
 * }
 * ```
 */
const meta: Meta<typeof FormStatus> = {
  title: 'Components/FormStatus',
  component: FormStatus,
  parameters: {
    layout: 'centered',
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
  },
  args: {
    children: 'Your message here',
  },
};

export default meta;
type Story = StoryObj<FormStatusProps>;

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'Something went wrong. Please try again.',
  },
};

export const LongMessage: Story = {
  args: {
    type: 'error',
    children:
      'There was a problem submitting your request. Please check the highlighted fields and try again.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <FormStatus type="success">Success message</FormStatus>
      <FormStatus type="error">Error message</FormStatus>
    </div>
  ),
};
