import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { Select, type SelectProps } from '@/components/select';
import * as SelectPrimitive from '@/components/select/primitives';

const sizeOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable select dropdown component built on Radix UI primitives. Supports two visual variants and extensive theming.

## CSS Variables

\`\`\`css
:root {
  --select-light-trigger-background: var(--background);
  --select-light-trigger-background-hover: var(--contrast-100);
  --select-light-trigger-border: var(--contrast-100);
  --select-light-trigger-border-hover: var(--contrast-300);
  --select-light-trigger-border-error: var(--error);
  --select-light-trigger-text: var(--foreground);
  --select-light-trigger-focus: var(--brand);
  --select-light-icon: var(--foreground);
  --select-light-content-background: var(--background);
  --select-light-content-border: color-mix(in oklab, var(--foreground) 10%, transparent);
  --select-light-item-background-hover: var(--contrast-100);
  --select-light-item-background-focus: var(--contrast-100);
  --select-light-item-text: var(--contrast-400);
  --select-light-item-text-hover: var(--foreground);
  --select-light-item-text-focus: var(--foreground);
  --select-light-item-checked-text-focus: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`Select\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { Select } from '@/components/select';

const options = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
];

<Select
  id="size-select"
  label="Size"
  options={options}
  placeholder="Select a size"
  variant="rectangle"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Select from '@/components/select';

<Select.Root>
  <Select.Trigger aria-label="Size">
    <Select.Value placeholder="Select a size" />
    <Select.Icon>
      <Select.TriggerIcon />
    </Select.Icon>
  </Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.ScrollUpButton>
        <Select.ScrollUpIcon />
      </Select.ScrollUpButton>
      <Select.Viewport>
        <Select.Item value="sm">
          <Select.ItemText>Small</Select.ItemText>
        </Select.Item>
        <Select.Item value="md">
          <Select.ItemText>Medium</Select.ItemText>
        </Select.Item>
      </Select.Viewport>
      <Select.ScrollDownButton>
        <Select.ScrollDownIcon />
      </Select.ScrollDownButton>
    </Select.Content>
  </Select.Portal>
</Select.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['rectangle', 'round'],
      description: 'The visual variant of the select trigger',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when no option is selected',
    },
    pending: {
      control: 'boolean',
      description: 'Whether the select is in a pending/loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the select',
    },
    options: {
      control: false,
      description: 'Array of options with label and value',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<SelectProps>;

// Default select
export const Default: Story = {
  args: {
    id: 'select-default',
    label: 'Size',
    options: sizeOptions,
    placeholder: 'Select a size',
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Select
        id="variant-rectangle"
        label="Size"
        options={sizeOptions}
        placeholder="Rectangle variant"
        variant="rectangle"
      />
      <Select
        id="variant-round"
        label="Size"
        options={sizeOptions}
        placeholder="Round variant"
        variant="round"
      />
    </div>
  ),
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');

    return (
      <Select
        id="select-controlled"
        label="Size"
        onValueChange={setValue}
        options={sizeOptions}
        placeholder="Select a size"
        value={value}
      />
    );
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger aria-label="Size" id="select-composable">
        <SelectPrimitive.Value placeholder="Select a size" />
        <SelectPrimitive.Icon>
          <SelectPrimitive.TriggerIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.ScrollUpIcon />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>
            {sizeOptions.map((option) => (
              <SelectPrimitive.Item key={option.value} value={option.value}>
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton>
            <SelectPrimitive.ScrollDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  ),
};
