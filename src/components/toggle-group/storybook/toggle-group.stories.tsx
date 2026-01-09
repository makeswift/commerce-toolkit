import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import * as ToggleGroupPrimitive from '@/components/toggle-group/primitives';
import { ToggleGroup, type ToggleGroupProps } from '@/components/toggle-group/toggle-group';

const sizeOptions = [
  { id: 'size-sm', label: 'Small', value: 'sm' },
  { id: 'size-md', label: 'Medium', value: 'md' },
  { id: 'size-lg', label: 'Large', value: 'lg' },
  { id: 'size-xl', label: 'XL', value: 'xl' },
];

const colorOptions = [
  { id: 'color-red', label: 'Red', value: 'red' },
  { id: 'color-blue', label: 'Blue', value: 'blue' },
  { id: 'color-green', label: 'Green', value: 'green' },
];

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A toggle group component for selecting one or multiple options from a set of choices. Built on Radix UI primitives.

## CSS Variables

\`\`\`css
:root {
  --toggle-group-light-focus: var(--brand);
  --toggle-group-light-border: var(--contrast-100);
  --toggle-group-light-on-border: var(--foreground);
  --toggle-group-light-on-background: var(--foreground);
  --toggle-group-light-off-background: var(--background);
  --toggle-group-light-off-text: var(--foreground);
  --toggle-group-light-on-text: var(--background);
  --toggle-group-light-off-border-hover: var(--contrast-200);
  --toggle-group-light-off-background-hover: var(--contrast-100);
}
\`\`\`

## Usage

### High-Level Component

The \`ToggleGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { ToggleGroup } from '@/components/toggle-group';

const options = [
  { id: 'size-sm', value: 'sm', label: 'Small' },
  { id: 'size-md', value: 'md', label: 'Medium' },
  { id: 'size-lg', value: 'lg', label: 'Large' },
];

<ToggleGroup type="single" options={options} defaultValue="md" />
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as ToggleGroup from '@/components/toggle-group';

<ToggleGroup.Root type="single" defaultValue="md">
  <ToggleGroup.Item value="sm">Small</ToggleGroup.Item>
  <ToggleGroup.Item value="md">Medium</ToggleGroup.Item>
  <ToggleGroup.Item value="lg">Large</ToggleGroup.Item>
</ToggleGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether a single or multiple items can be selected',
    },
    options: {
      description: 'Array of options with id, value, label, and optional disabled flag',
    },
    defaultValue: {
      description: 'The default selected value(s)',
    },
    value: {
      description: 'The controlled selected value(s)',
    },
    onValueChange: {
      description: 'Callback when the selected value(s) change',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire toggle group is disabled',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<ToggleGroupProps>;

// Single selection (default)
export const Default: Story = {
  args: {
    type: 'single',
    options: sizeOptions,
    defaultValue: 'md',
  },
};

// Multiple selection
export const MultipleSelection: Story = {
  args: {
    type: 'multiple',
    options: colorOptions,
    defaultValue: ['red', 'blue'],
  },
};

// Disabled items
export const DisabledItems: Story = {
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="md" type="single">
      <ToggleGroupPrimitive.Item value="sm">Small</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="md">Medium</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item disabled value="lg">
        Large
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="xl">XL</ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  ),
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('md');

    return (
      <ToggleGroup onValueChange={setValue} options={sizeOptions} type="single" value={value} />
    );
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="md" type="single">
      <ToggleGroupPrimitive.Item value="sm">Small</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="md">Medium</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="lg">Large</ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  ),
};
