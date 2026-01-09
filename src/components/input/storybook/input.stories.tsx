import type { Meta, StoryObj } from '@storybook/react-vite';
import { DollarSign } from 'lucide-react';

import { Input, type InputProps } from '@/components/input';
import * as InputPrimitive from '@/components/input/primitives';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A text input component with support for prepended icons. Built for forms and user input scenarios.

## CSS Variables

\`\`\`css
:root {
  --input-light-background: var(--background);
  --input-light-border: var(--contrast-100);
  --input-light-focus: var(--foreground);
  --input-light-border-error: var(--error);
  --input-light-text: var(--foreground);
  --input-light-placeholder: var(--contrast-500);
  --input-light-icon: var(--contrast-400);
}
\`\`\`

## Usage

### High-Level Component

The \`Input\` component provides a simple API with an optional \`prependIcon\` prop:

\`\`\`tsx
import { Input } from '@/components/input';
import { DollarSign } from 'lucide-react';

// Basic input
<Input placeholder="Enter text..." />

// With default search icon
<Input prependIcon={{}} placeholder="Search..." />

// With custom icon using asChild
<Input prependIcon={{ asChild: true, children: <DollarSign /> }} type="number" placeholder="0.00" />
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Input from '@/components/input';
import { DollarSign } from 'lucide-react';

// Default search icon
<Input.Root prepend>
  <Input.Prepend>
    <Input.PrependIcon />
  </Input.Prepend>
  <Input.Field placeholder="Search products..." />
</Input.Root>

// Custom icon with asChild
<Input.Root prepend>
  <Input.Prepend>
    <Input.PrependIcon asChild>
      <DollarSign />
    </Input.PrependIcon>
  </Input.Prepend>
  <Input.Field type="number" placeholder="0.00" />
</Input.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    prependIcon: {
      control: false,
      description: 'Icon configuration to prepend before the input',
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
};

export default meta;
type Story = StoryObj<InputProps>;

// Default input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// With prepended icons
export const WithPrependIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Search..." prependIcon={{}} />
      <Input
        placeholder="0.00"
        prependIcon={{ asChild: true, children: <DollarSign /> }}
        type="number"
      />
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <InputPrimitive.Root prepend>
      <InputPrimitive.Prepend>
        <InputPrimitive.PrependIcon />
      </InputPrimitive.Prepend>
      <InputPrimitive.Field placeholder="Search products..." />
    </InputPrimitive.Root>
  ),
};
