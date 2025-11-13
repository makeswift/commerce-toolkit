import type { Meta, StoryObj } from '@storybook/react-vite';

import { FieldError } from '@/components/field-error';

const meta = {
  title: 'Components/FieldError',
  component: FieldError,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: { control: 'text', description: 'The error message content' },
    className: { control: 'text', description: 'Additional Tailwind classes' },
  },
  args: {
    children: 'This field is required.',
  },
} satisfies Meta<typeof FieldError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongText: Story = {
  args: {
    children:
      'There was a problem submitting your request. Please check the highlighted fields and try again.',
  },
};
