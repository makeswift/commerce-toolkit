import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  ButtonRadioGroup,
  type ButtonRadioGroupProps,
} from '@/components/button-radio-group/button-radio-group';
import * as ButtonRadioGroupPrimitive from '@/components/button-radio-group/primitives';

const sizeOptions = [
  { id: 'size-xs', value: 'xs', label: 'XS' },
  { id: 'size-s', value: 's', label: 'S' },
  { id: 'size-m', value: 'm', label: 'M' },
  { id: 'size-l', value: 'l', label: 'L' },
  { id: 'size-xl', value: 'xl', label: 'XL' },
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

\`\`\`css
:root {
  --button-radio-group-font: var(--font-body);
  --button-radio-group-fill-unchecked: var(--form-fill-unchecked);
  --button-radio-group-fill-checked: var(--form-fill-checked);
  --button-radio-group-fill-hover: var(--form-fill-hover);
  --button-radio-group-text-unchecked: var(--form-text-unchecked);
  --button-radio-group-text-checked: var(--form-text-checked);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of options with `id`, `value`, `label`, and optional `disabled`',
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
      description: 'Callback when hovering over an option',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonRadioGroupProps>;

export const Default: Story = {
  args: {
    options: sizeOptions,
    defaultValue: 'm',
  },
};

export const DisabledItems: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Individual options can be disabled (e.g., out of stock sizes).',
      },
      source: {
        code: `
<ButtonRadioGroupPrimitive.Root defaultValue="m">
  <ButtonRadioGroupPrimitive.Item value="xs">XS</ButtonRadioGroupPrimitive.Item>
  <ButtonRadioGroupPrimitive.Item value="s">S</ButtonRadioGroupPrimitive.Item>
  <ButtonRadioGroupPrimitive.Item value="m">M</ButtonRadioGroupPrimitive.Item>
  <ButtonRadioGroupPrimitive.Item value="l" disabled>L</ButtonRadioGroupPrimitive.Item>
  <ButtonRadioGroupPrimitive.Item value="xl" disabled>XL</ButtonRadioGroupPrimitive.Item>
</ButtonRadioGroupPrimitive.Root>
        `,
      },
    },
  },
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                          | Description                     |
|------------------------------------|---------------------------------|
| \`ButtonRadioGroupPrimitive.Root\`    | Radio group container.          |
| \`ButtonRadioGroupPrimitive.Item\`    | Individual button option.       |
        `,
      },
      source: {
        code: `
import * as ButtonRadioGroupPrimitive from '@/components/button-radio-group/primitives';

<ButtonRadioGroupPrimitive.Root defaultValue="natural">
  <ButtonRadioGroupPrimitive.Item value="natural">Natural</ButtonRadioGroupPrimitive.Item>
  <ButtonRadioGroupPrimitive.Item value="charcoal">Charcoal</ButtonRadioGroupPrimitive.Item>
  <ButtonRadioGroupPrimitive.Item value="sage">Sage</ButtonRadioGroupPrimitive.Item>
</ButtonRadioGroupPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="natural">
      <ButtonRadioGroupPrimitive.Item value="natural">Natural</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="charcoal">Charcoal</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="sage">Sage</ButtonRadioGroupPrimitive.Item>
    </ButtonRadioGroupPrimitive.Root>
  ),
};
