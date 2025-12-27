import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea, type TextareaProps } from '@/components/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A multi-line text input component for collecting longer form text content.

## CSS Variables

\`\`\`css
:root {
  --textarea-focus: var(--brand);
  --textarea-light-background: var(--background);
  --textarea-light-text: var(--foreground);
  --textarea-light-placeholder: var(--contrast-300);
  --textarea-light-border: var(--contrast-100);
  --textarea-light-border-focus: var(--foreground);
  --textarea-light-border-error: var(--error);
}
\`\`\`

## Usage

\`\`\`tsx
import { Textarea } from '@/components/textarea';

<Textarea placeholder="Enter your message..." rows={4} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when the textarea is empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the textarea is read-only',
    },
  },
  args: {
    placeholder: 'Enter your message...',
  },
};

export default meta;
type Story = StoryObj<TextareaProps>;

// Default textarea
export const Default: Story = {};

// With default value
export const WithValue: Story = {
  args: {
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This content cannot be edited',
  },
};

// Error state
export const ErrorState: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'This field has an error',
  },
};
