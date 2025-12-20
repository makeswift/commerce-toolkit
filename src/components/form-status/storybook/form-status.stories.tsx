import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormStatus, type FormStatusProps } from '@/components/form-status';

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
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The color scheme of the component',
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

// Type stories
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

// Color scheme stories
export const LightSuccess: Story = {
  args: {
    type: 'success',
    colorScheme: 'light',
    children: 'Success message on light background.',
  },
};

export const LightError: Story = {
  args: {
    type: 'error',
    colorScheme: 'light',
    children: 'Error message on light background.',
  },
};

export const DarkSuccess: Story = {
  args: {
    type: 'success',
    colorScheme: 'dark',
    children: 'Success message on dark background.',
  },
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-contrast-500 p-4">
        <Story />
      </div>
    ),
  ],
};

export const DarkError: Story = {
  args: {
    type: 'error',
    colorScheme: 'dark',
    children: 'Error message on dark background.',
  },
  decorators: [
    (Story) => (
      <div className="rounded-xl bg-contrast-500 p-4">
        <Story />
      </div>
    ),
  ],
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-contrast-400">Light</span>
        <FormStatus colorScheme="light" type="success">
          Success message
        </FormStatus>
        <FormStatus colorScheme="light" type="error">
          Error message
        </FormStatus>
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-contrast-500 p-4">
        <span className="text-xs font-medium text-contrast-300">Dark</span>
        <FormStatus colorScheme="dark" type="success">
          Success message
        </FormStatus>
        <FormStatus colorScheme="dark" type="error">
          Error message
        </FormStatus>
      </div>
    </div>
  ),
};
