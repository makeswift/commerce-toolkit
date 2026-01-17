import type { Meta, StoryObj } from '@storybook/react-vite';
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
  --select-fill: var(--form-fill);
  --select-fill-hover: var(--form-fill-hover);
  --select-fill-focus: var(--form-fill-hover);
  --select-fill-icon: var(--form-fill-icon);
  --select-text-primary: var(--form-text-primary);
  --select-text-secondary: var(--form-text-secondary);
  --select-text-hover: var(--form-text-hover);
  --select-text-focus: var(--form-text-hover);
}
\`\`\`

## Container Queries

The dropdown content adapts based on container width.

| Element  | Below @4xl     | @4xl and above |
|----------|----------------|----------------|
| Content  | rounded-xl p-2 | rounded-3xl p-4 |
| Item     | text-sm        | text-base       |
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
      description: 'Array of options with `label` and `value`',
    },
  },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
};

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    id: 'select-default',
    label: 'Size',
    options: sizeOptions,
    placeholder: 'Select a size',
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Two trigger variants are available: `rectangle` (default) and `round`.',
      },
      source: {
        code: `
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
        `,
      },
    },
  },
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

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `value` and `onValueChange` for controlled selection.',
      },
      source: {
        code: `
const [value, setValue] = useState<string>('');

<Select
  id="select-controlled"
  label="Size"
  options={sizeOptions}
  placeholder="Select a size"
  value={value}
  onValueChange={setValue}
/>
        `,
      },
    },
  },
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                         | Description                              |
|-----------------------------------|------------------------------------------|
| \`SelectPrimitive.Root\`          | Provider with variant and pending state. |
| \`SelectPrimitive.Trigger\`       | Button that opens the dropdown.          |
| \`SelectPrimitive.Value\`         | Displays current selection or placeholder. |
| \`SelectPrimitive.Icon\`          | Container for the trigger icon.          |
| \`SelectPrimitive.TriggerIcon\`   | Chevron icon with \`asChild\` support.   |
| \`SelectPrimitive.Portal\`        | Portals content to document body.        |
| \`SelectPrimitive.Content\`       | Dropdown container with animations.      |
| \`SelectPrimitive.ScrollUpButton\`| Scroll indicator for overflow.           |
| \`SelectPrimitive.ScrollUpIcon\`  | Up chevron with \`asChild\` support.     |
| \`SelectPrimitive.Viewport\`      | Scrollable area for items.               |
| \`SelectPrimitive.Item\`          | Individual option item.                  |
| \`SelectPrimitive.ItemText\`      | Text content of an option.               |
| \`SelectPrimitive.ScrollDownButton\`| Scroll indicator for overflow.         |
| \`SelectPrimitive.ScrollDownIcon\`| Down chevron with \`asChild\` support.   |
        `,
      },
      source: {
        code: `
import * as SelectPrimitive from '@/components/select/primitives';

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
        <SelectPrimitive.Item value="sm">
          <SelectPrimitive.ItemText>Small</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
        <SelectPrimitive.Item value="md">
          <SelectPrimitive.ItemText>Medium</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
      </SelectPrimitive.Viewport>
      <SelectPrimitive.ScrollDownButton>
        <SelectPrimitive.ScrollDownIcon />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
</SelectPrimitive.Root>
        `,
      },
    },
  },
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
