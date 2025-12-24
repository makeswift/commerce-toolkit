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

The Textarea component supports the following CSS variables for theming:

| Variable | Description | Default |
|----------|-------------|---------|
| \`--textarea-light-background\` | Background color | \`var(--background)\` |
| \`--textarea-light-text\` | Text color | \`var(--foreground)\` |
| \`--textarea-light-placeholder\` | Placeholder text color | \`var(--contrast-500)\` |
| \`--textarea-light-border\` | Border color | \`var(--contrast-100)\` |
| \`--textarea-light-border-focus\` | Border color on focus | \`var(--foreground)\` |
| \`--textarea-light-border-error\` | Border color for error state | \`var(--error)\` |

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
    cols: {
      control: 'number',
      description: 'Visible width of the textarea in average character widths',
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

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const CustomRows: Story = {
  args: {
    rows: 6,
    placeholder: 'This textarea has 6 visible rows...',
  },
};

export const WithMaxLength: Story = {
  args: {
    maxLength: 100,
    placeholder: 'Limited to 100 characters...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
  },
};

export const DisabledWithValue: Story = {
  args: {
    disabled: true,
    defaultValue: 'This content cannot be edited',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: 'This content is read-only and cannot be modified.',
  },
};

export const ErrorState: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'This field has an error',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `aria-invalid` to indicate an error state. The border color changes to the error color.',
      },
    },
  },
};

export const ResizeNone: Story = {
  args: {
    placeholder: 'This textarea cannot be resized...',
    className: 'resize-none',
  },
  parameters: {
    docs: {
      description: {
        story: "Use Tailwind's `resize-none` class to prevent resizing.",
      },
    },
  },
};

export const ResizeVertical: Story = {
  args: {
    placeholder: 'This textarea can only be resized vertically...',
    className: 'resize-y',
  },
  parameters: {
    docs: {
      description: {
        story: "Use Tailwind's `resize-y` class to allow only vertical resizing.",
      },
    },
  },
};

export const CustomWidth: Story = {
  args: {
    placeholder: 'Fixed width textarea...',
    className: 'max-w-md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use Tailwind width utilities via `className` to control the width.',
      },
    },
  },
};
