import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { ButtonRadioGroup } from '@/components/button-radio-group/button-radio-group';
import * as ButtonRadioGroupPrimitive from '@/components/button-radio-group/primitives';

const sizeOptions = [
  { id: 'size-xs', value: 'xs', label: 'XS' },
  { id: 'size-s', value: 's', label: 'S' },
  { id: 'size-m', value: 'm', label: 'M' },
  { id: 'size-l', value: 'l', label: 'L' },
  { id: 'size-xl', value: 'xl', label: 'XL' },
];

const colorOptions = [
  { id: 'color-natural', value: 'natural', label: 'Natural' },
  { id: 'color-charcoal', value: 'charcoal', label: 'Charcoal' },
  { id: 'color-sage', value: 'sage', label: 'Sage' },
];

const meta: Meta<typeof ButtonRadioGroup> = {
  title: 'Components/ButtonRadioGroup',
  component: ButtonRadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component styled as a set of selectable buttons. Perfect for product options like size or color selection. Built on Radix UI Radio Group primitives.

## CSS Variables

The ButtonRadioGroup component supports extensive theming through CSS variables:

\`\`\`css
:root {
  --button-radio-group-focus: var(--brand);
  --button-radio-group-light-unchecked-border: var(--contrast-100);
  --button-radio-group-light-unchecked-background: var(--background);
  --button-radio-group-light-unchecked-text: var(--foreground);
  --button-radio-group-light-unchecked-border-hover: var(--contrast-200);
  --button-radio-group-light-unchecked-background-hover: var(--contrast-100);
  --button-radio-group-light-checked-background: var(--foreground);
  --button-radio-group-light-checked-text: var(--background);
  --button-radio-group-light-border-error: var(--error);
}
\`\`\`

## Usage

### High-Level Component

The \`ButtonRadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { ButtonRadioGroup } from '@/components/button-radio-group';

const sizeOptions = [
  { id: 'size-xs', value: 'xs', label: 'XS' },
  { id: 'size-s', value: 's', label: 'S' },
  { id: 'size-m', value: 'm', label: 'M' },
  { id: 'size-l', value: 'l', label: 'L' },
];

<ButtonRadioGroup
  options={sizeOptions}
  defaultValue="m"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as ButtonRadioGroup from '@/components/button-radio-group';

<ButtonRadioGroup.Root defaultValue="m">
  <ButtonRadioGroup.Item value="xs">XS</ButtonRadioGroup.Item>
  <ButtonRadioGroup.Item value="s">S</ButtonRadioGroup.Item>
  <ButtonRadioGroup.Item value="m">M</ButtonRadioGroup.Item>
  <ButtonRadioGroup.Item value="l">L</ButtonRadioGroup.Item>
</ButtonRadioGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of options with id, value, label, and optional disabled flag',
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
      description: 'Callback when the selected value changes',
    },
    onOptionMouseEnter: {
      description: 'Callback when hovering over an option (useful for previews)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonRadioGroup>;

// Default story using high-level component
export const Default: Story = {
  args: {
    options: sizeOptions,
    defaultValue: 'm',
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="natural">
      <ButtonRadioGroupPrimitive.Item value="natural">Natural</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="charcoal">Charcoal</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="sage">Sage</ButtonRadioGroupPrimitive.Item>
    </ButtonRadioGroupPrimitive.Root>
  ),
};

// Disabled items (e.g., out of stock)
export const DisabledItems: Story = {
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="m">
      <ButtonRadioGroupPrimitive.Item value="xs">XS</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="s">S</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="m">M</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item disabled value="l">
        L
      </ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item disabled value="xl">
        XL
      </ButtonRadioGroupPrimitive.Item>
    </ButtonRadioGroupPrimitive.Root>
  ),
};

// Fully disabled group
export const Disabled: Story = {
  args: {
    options: sizeOptions,
    defaultValue: 'm',
    disabled: true,
  },
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('m');

    return <ButtonRadioGroup onValueChange={setValue} options={sizeOptions} value={value} />;
  },
};

// With onOptionMouseEnter callback
export const WithHoverCallback: Story = {
  render: () => {
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    return (
      <div>
        <ButtonRadioGroup
          defaultValue="natural"
          onOptionMouseEnter={setHoveredValue}
          options={colorOptions}
        />
        <p className="mt-4 text-sm text-contrast-500">Hovered: {hoveredValue ?? 'None'}</p>
      </div>
    );
  },
};
