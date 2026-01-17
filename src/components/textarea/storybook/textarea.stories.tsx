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
A multi-line text input for collecting longer form text content.

## CSS Variables

\`\`\`css
:root {
  --textarea-fill: var(--form-fill);
  --textarea-fill-disabled: var(--form-fill-disabled);
  --textarea-text: var(--form-text-primary);
  --textarea-text-placeholder: var(--form-text-placeholder);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character count',
    },
    readOnly: {
      control: 'boolean',
      description: 'Make the textarea read-only',
    },
  },
  args: {
    placeholder: 'Enter your message...',
  },
};

export default meta;
type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic textarea with placeholder text.',
      },
    },
  },
};

export const WithValue: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Textarea with pre-filled content.',
      },
    },
  },
  args: {
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction.',
      },
    },
  },
  args: {
    disabled: true,
    defaultValue: 'This content cannot be edited',
  },
};

export const ErrorState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `aria-invalid` to indicate validation errors.',
      },
    },
  },
  args: {
    'aria-invalid': true,
    defaultValue: 'This field has an error',
  },
};
