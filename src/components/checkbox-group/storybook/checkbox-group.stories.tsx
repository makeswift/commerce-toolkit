import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CheckboxGroup, type CheckboxGroupProps } from '@/components/checkbox-group/checkbox-group';
import * as CheckboxGroupPrimitive from '@/components/checkbox-group/primitives';

const categoryOptions = [
  { value: 'brushes', label: 'Brushes & Scrubbers', id: 'cat-brushes' },
  { value: 'sponges', label: 'Sponges & Cloths', id: 'cat-sponges' },
  { value: 'bottles', label: 'Bottles & Dispensers', id: 'cat-bottles' },
  { value: 'towels', label: 'Towels & Linens', id: 'cat-towels' },
];

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A checkbox group component for selecting multiple options from a set of choices. Unlike RadioGroup, CheckboxGroup allows any number of selections.

## CSS Variables

The CheckboxGroup uses the Checkbox component internally. See Checkbox for theming variables:

\`\`\`css
:root {
  --checkbox-fill-unchecked: var(--form-fill-unchecked);
  --checkbox-fill-checked: var(--form-fill-checked);
  --checkbox-fill-disabled: var(--form-fill-disabled);
  --checkbox-text-unchecked: var(--form-text-unchecked);
  --checkbox-text-checked: var(--form-text-checked);
  --checkbox-text-disabled: var(--form-text-disabled);
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
      description:
        'Array of options with `value`, `label`, `id`, optional `disabled`, and optional `icon`',
    },
    value: {
      control: false,
      description: 'Array of selected option values (controlled)',
    },
    onValueChange: {
      control: false,
      description: 'Callback when the selected values change',
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxGroupProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A controlled checkbox group allowing multiple selections.',
      },
      source: {
        code: `
const [selected, setSelected] = useState<string[]>(['brushes']);

const options = [
  { value: 'brushes', label: 'Brushes & Scrubbers', id: 'cat-brushes' },
  { value: 'sponges', label: 'Sponges & Cloths', id: 'cat-sponges' },
  { value: 'bottles', label: 'Bottles & Dispensers', id: 'cat-bottles' },
  { value: 'towels', label: 'Towels & Linens', id: 'cat-towels' },
];

<CheckboxGroup
  options={options}
  value={selected}
  onValueChange={setSelected}
/>
        `,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>(['brushes']);

    return <CheckboxGroup onValueChange={setSelected} options={categoryOptions} value={selected} />;
  },
};

export const DisabledItems: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Individual options can be disabled using the `disabled` property.',
      },
      source: {
        code: `
const [selected, setSelected] = useState<string[]>(['email']);

const options = [
  { value: 'email', label: 'Email notifications', id: 'notify-email' },
  { value: 'sms', label: 'SMS notifications', id: 'notify-sms' },
  { value: 'push', label: 'Push notifications (Coming Soon)', id: 'notify-push', disabled: true },
];

<CheckboxGroup
  options={options}
  value={selected}
  onValueChange={setSelected}
/>
        `,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);

    const options = [
      { value: 'email', label: 'Email notifications', id: 'disabled-email' },
      { value: 'sms', label: 'SMS notifications', id: 'disabled-sms' },
      {
        value: 'push',
        label: 'Push notifications (Coming Soon)',
        id: 'disabled-push',
        disabled: true,
      },
    ];

    return <CheckboxGroup onValueChange={setSelected} options={options} value={selected} />;
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                          | Description                              |
|------------------------------------|------------------------------------------|
| \`CheckboxGroupPrimitive.Root\`       | Grid container for the checkboxes.       |
| \`CheckboxGroupPrimitive.FieldItem\`  | Horizontal field wrapper for each item.  |
| \`CheckboxGroupPrimitive.Checkbox\`   | The checkbox input (wraps Checkbox).     |
| \`CheckboxGroupPrimitive.Label\`      | Label for each checkbox option.          |
        `,
      },
      source: {
        code: `
import * as CheckboxGroupPrimitive from '@/components/checkbox-group/primitives';

const [selected, setSelected] = useState<string[]>(['email']);

const handleChange = (value: string, checked: boolean) => {
  setSelected((prev) =>
    checked ? [...prev, value] : prev.filter((v) => v !== value)
  );
};

<CheckboxGroupPrimitive.Root>
  <CheckboxGroupPrimitive.FieldItem>
    <CheckboxGroupPrimitive.Checkbox
      id="email-notif"
      value="email"
      checked={selected.includes('email')}
      onCheckedChange={(checked) => handleChange('email', Boolean(checked))}
    />
    <CheckboxGroupPrimitive.Label htmlFor="email-notif">
      Email notifications
    </CheckboxGroupPrimitive.Label>
  </CheckboxGroupPrimitive.FieldItem>
  <CheckboxGroupPrimitive.FieldItem>
    <CheckboxGroupPrimitive.Checkbox
      id="sms-notif"
      value="sms"
      checked={selected.includes('sms')}
      onCheckedChange={(checked) => handleChange('sms', Boolean(checked))}
    />
    <CheckboxGroupPrimitive.Label htmlFor="sms-notif">
      SMS notifications
    </CheckboxGroupPrimitive.Label>
  </CheckboxGroupPrimitive.FieldItem>
</CheckboxGroupPrimitive.Root>
        `,
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);

    const handleChange = (value: string, checked: boolean) => {
      setSelected((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)));
    };

    return (
      <CheckboxGroupPrimitive.Root>
        <CheckboxGroupPrimitive.FieldItem>
          <CheckboxGroupPrimitive.Checkbox
            checked={selected.includes('email')}
            id="email-notif"
            onCheckedChange={(checked) => handleChange('email', Boolean(checked))}
            value="email"
          />
          <CheckboxGroupPrimitive.Label htmlFor="email-notif">
            Email notifications
          </CheckboxGroupPrimitive.Label>
        </CheckboxGroupPrimitive.FieldItem>
        <CheckboxGroupPrimitive.FieldItem>
          <CheckboxGroupPrimitive.Checkbox
            checked={selected.includes('sms')}
            id="sms-notif"
            onCheckedChange={(checked) => handleChange('sms', Boolean(checked))}
            value="sms"
          />
          <CheckboxGroupPrimitive.Label htmlFor="sms-notif">
            SMS notifications
          </CheckboxGroupPrimitive.Label>
        </CheckboxGroupPrimitive.FieldItem>
      </CheckboxGroupPrimitive.Root>
    );
  },
};
