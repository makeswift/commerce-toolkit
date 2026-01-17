import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { Button } from '@/components/button';
import * as RadioGroupPrimitive from '@/components/radio-group/primitives';
import { RadioGroup, type RadioGroupProps } from '@/components/radio-group/radio-group';

const sizeOptions = [
  { value: 'sm', label: 'Small', id: 'size-sm' },
  { value: 'md', label: 'Medium', id: 'size-md' },
  { value: 'lg', label: 'Large', id: 'size-lg' },
];

const shippingOptions = [
  { value: 'standard', label: 'Standard Shipping (5-7 days)', id: 'shipping-standard' },
  { value: 'express', label: 'Express Shipping (2-3 days)', id: 'shipping-express' },
  { value: 'overnight', label: 'Overnight Delivery', id: 'shipping-overnight' },
];

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component for selecting a single option from a set of choices. Built on Radix UI Radio Group primitives.

## CSS Variables

\`\`\`css
:root {
  --radio-group-fill: var(--form-fill);
  --radio-group-fill-checked: var(--form-fill-checked);
}
\`\`\`

## Usage

### High-Level Component

The \`RadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { RadioGroup } from '@/components/radio-group';

const options = [
  { value: 'sm', label: 'Small', id: 'size-sm' },
  { value: 'md', label: 'Medium', id: 'size-md' },
  { value: 'lg', label: 'Large', id: 'size-lg' },
];

<RadioGroup
  options={options}
  defaultValue="md"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components:

\`\`\`tsx
import * as RadioGroup from '@/components/radio-group';

<RadioGroup.Root defaultValue="md">
  <RadioGroup.FieldItem>
    <RadioGroup.Item value="sm" id="size-sm">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <RadioGroup.Label htmlFor="size-sm">Small</RadioGroup.Label>
  </RadioGroup.FieldItem>
  <RadioGroup.FieldItem>
    <RadioGroup.Item value="md" id="size-md">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <RadioGroup.Label htmlFor="size-md">Medium</RadioGroup.Label>
  </RadioGroup.FieldItem>
</RadioGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of options with value, label, id, and optional disabled flag',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value (uncontrolled)',
    },
    value: {
      control: 'text',
      description: 'The controlled selected value',
    },
    onValueChange: {
      control: false,
      description: 'Callback when the selected value changes',
    },
    onOptionMouseEnter: {
      control: false,
      description: 'Callback when hovering over an option (useful for previews)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
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
type Story = StoryObj<RadioGroupProps>;

// Default using high-level component
export const Default: Story = {
  args: {
    options: sizeOptions,
    defaultValue: 'md',
  },
};

// Disabled items (e.g., unavailable options)
export const DisabledItems: Story = {
  args: {
    options: [
      { value: 'standard', label: 'Standard Shipping (5-7 days)', id: 'disabled-standard' },
      { value: 'express', label: 'Express Shipping (2-3 days)', id: 'disabled-express' },
      {
        value: 'overnight',
        label: 'Overnight Delivery (Not Available)',
        id: 'disabled-overnight',
        disabled: true,
      },
    ],
    defaultValue: 'standard',
  },
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('md');

    return (
      <div className="space-y-4">
        <RadioGroup onValueChange={setValue} options={sizeOptions} value={value} />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected:</span>{' '}
          <span className="text-foreground">
            {sizeOptions.find((o) => o.value === value)?.label}
          </span>
        </div>
        <Button onClick={() => setValue('sm')} size="small" variant="primary">
          Reset to Small
        </Button>
      </div>
    );
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <RadioGroupPrimitive.Root defaultValue="express">
      {shippingOptions.map((option) => (
        <RadioGroupPrimitive.FieldItem key={option.id}>
          <RadioGroupPrimitive.Item id={option.id} value={option.value}>
            <RadioGroupPrimitive.Indicator />
          </RadioGroupPrimitive.Item>
          <RadioGroupPrimitive.Label htmlFor={option.id}>{option.label}</RadioGroupPrimitive.Label>
        </RadioGroupPrimitive.FieldItem>
      ))}
    </RadioGroupPrimitive.Root>
  ),
};
