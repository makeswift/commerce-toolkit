import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
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

The CheckboxGroup uses the Checkbox component internally, which supports theming through CSS variables:

\`\`\`css
:root {
  --checkbox-focus: var(--brand);
  --checkbox-light-label: var(--foreground);
  --checkbox-light-error: var(--error);
  --checkbox-light-unchecked-border: var(--contrast-200);
  --checkbox-light-unchecked-border-hover: var(--contrast-300);
  --checkbox-light-unchecked-background: var(--background);
  --checkbox-light-unchecked-icon: var(--foreground);
  --checkbox-light-checked-border: var(--foreground);
  --checkbox-light-checked-border-hover: var(--foreground);
  --checkbox-light-checked-background: var(--foreground);
  --checkbox-light-checked-icon: var(--background);
  --checkbox-light-disabled-border: var(--contrast-200);
  --checkbox-light-disabled-background: var(--contrast-100);
  --checkbox-light-disabled-icon: var(--contrast-300);
}
\`\`\`

## Usage

### High-Level Component

The \`CheckboxGroup\` component provides a controlled API with an \`options\` array:

\`\`\`tsx
import { CheckboxGroup } from '@/components/checkbox-group';
import { useState } from 'react';

const options = [
  { value: 'email', label: 'Email notifications', id: 'notify-email' },
  { value: 'sms', label: 'SMS notifications', id: 'notify-sms' },
  { value: 'push', label: 'Push notifications', id: 'notify-push' },
];

function MyComponent() {
  const [selected, setSelected] = useState<string[]>(['email']);

  return (
    <CheckboxGroup
      options={options}
      value={selected}
      onValueChange={setSelected}
    />
  );
}
\`\`\`

### Composable Anatomy

For more control, use the primitive components:

\`\`\`tsx
import * as CheckboxGroup from '@/components/checkbox-group';

<CheckboxGroup.Root>
  <CheckboxGroup.FieldItem>
    <CheckboxGroup.Checkbox id="email" value="email" checked={selected.includes('email')} />
    <CheckboxGroup.Label htmlFor="email">Email notifications</CheckboxGroup.Label>
  </CheckboxGroup.FieldItem>
  <CheckboxGroup.FieldItem>
    <CheckboxGroup.Checkbox id="sms" value="sms" checked={selected.includes('sms')} />
    <CheckboxGroup.Label htmlFor="sms">SMS notifications</CheckboxGroup.Label>
  </CheckboxGroup.FieldItem>
</CheckboxGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      description:
        'Array of options with value, label, id, optional disabled flag, and optional icon',
    },
    value: {
      description: 'Array of selected option values (controlled)',
    },
    onValueChange: {
      description: 'Callback when the selected values change',
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
type Story = StoryObj<CheckboxGroupProps>;

// Default example
export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['brushes']);

    return <CheckboxGroup onValueChange={setSelected} options={categoryOptions} value={selected} />;
  },
};

// Disabled items
export const DisabledItems: Story = {
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

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['brushes', 'sponges']);

    return <CheckboxGroup onValueChange={setSelected} options={categoryOptions} value={selected} />;
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
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
        <CheckboxGroupPrimitive.FieldItem>
          <CheckboxGroupPrimitive.Checkbox
            checked={selected.includes('push')}
            id="push-notif"
            onCheckedChange={(checked) => handleChange('push', Boolean(checked))}
            value="push"
          />
          <CheckboxGroupPrimitive.Label htmlFor="push-notif">
            Push notifications
          </CheckboxGroupPrimitive.Label>
        </CheckboxGroupPrimitive.FieldItem>
      </CheckboxGroupPrimitive.Root>
    );
  },
};
