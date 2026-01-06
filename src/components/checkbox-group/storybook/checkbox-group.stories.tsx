import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import { Checkbox } from '@/components/checkbox';
import { CheckboxGroup } from '@/components/checkbox-group/checkbox-group';
import * as CheckboxGroupPrimitive from '@/components/checkbox-group/primitives';
import * as Field from '@/components/field';

// Wrapper component for stories to avoid complex type issues
interface CheckboxGroupStoryProps {
  children?: ReactNode;
}

function CheckboxGroupStory({ children, ...props }: CheckboxGroupStoryProps) {
  return <CheckboxGroupPrimitive.Root {...props}>{children}</CheckboxGroupPrimitive.Root>;
}

const categoryOptions = [
  { value: 'brushes', label: 'Brushes & Scrubbers', id: 'cat-brushes' },
  { value: 'sponges', label: 'Sponges & Cloths', id: 'cat-sponges' },
  { value: 'bottles', label: 'Bottles & Dispensers', id: 'cat-bottles' },
  { value: 'towels', label: 'Towels & Linens', id: 'cat-towels' },
];

const notificationOptions = [
  { value: 'email', label: 'Email notifications', id: 'notify-email' },
  { value: 'sms', label: 'SMS notifications', id: 'notify-sms' },
  { value: 'push', label: 'Push notifications', id: 'notify-push' },
];

const featureOptions = [
  { value: 'eco', label: 'Eco-friendly materials', id: 'feature-eco' },
  { value: 'reusable', label: 'Reusable', id: 'feature-reusable' },
  { value: 'biodegradable', label: 'Biodegradable', id: 'feature-biodegradable' },
  { value: 'plastic-free', label: 'Plastic-free packaging', id: 'feature-plastic-free' },
];

const meta: Meta<typeof CheckboxGroupStory> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroupStory,
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
import { CheckboxGroup } from '@/components/checkbox-group/checkbox-group';
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

For more control, use the primitive components with \`Field.Item\`:

\`\`\`tsx
import * as CheckboxGroup from '@/components/checkbox-group';
import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field';

<CheckboxGroup.Root>
  <Field.Item orientation="horizontal">
    <Checkbox id="email" value="email" checked={selected.includes('email')} />
    <Field.Label htmlFor="email">Email notifications</Field.Label>
  </Field.Item>
  <Field.Item orientation="horizontal">
    <Checkbox id="sms" value="sms" checked={selected.includes('sms')} />
    <Field.Label htmlFor="sms">SMS notifications</Field.Label>
  </Field.Item>
</CheckboxGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = useState<string[]>(['brushes']);

    return <CheckboxGroup onValueChange={setSelected} options={categoryOptions} value={selected} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'The default CheckboxGroup allowing multiple selections.',
      },
    },
  },
};

export const WithMultipleSelected: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = useState<string[]>(['eco', 'reusable', 'biodegradable']);

    return <CheckboxGroup onValueChange={setSelected} options={featureOptions} value={selected} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup with multiple options pre-selected.',
      },
    },
  },
};

export const DisabledItems: Story = {
  args: {},
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
  parameters: {
    docs: {
      description: {
        story:
          'Individual items can be disabled while others remain interactive. Useful for unavailable options.',
      },
    },
  },
};

export const Controlled: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = useState<string[]>(['brushes', 'sponges']);

    return (
      <div className="space-y-4">
        <CheckboxGroup onValueChange={setSelected} options={categoryOptions} value={selected} />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected:</span>{' '}
          <span className="text-foreground">
            {selected.length > 0
              ? selected.map((v) => categoryOptions.find((o) => o.value === v)?.label).join(', ')
              : 'None'}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-brand hover:bg-brand/90 rounded-lg px-3 py-2 text-sm font-medium text-background transition-colors"
            onClick={() => setSelected(categoryOptions.map((o) => o.value))}
            type="button"
          >
            Select All
          </button>
          <button
            className="rounded-lg bg-contrast-200 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-contrast-300"
            onClick={() => setSelected([])}
            type="button"
          >
            Clear All
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `value` and `onValueChange` for controlled state management. The value is always an array of selected option values.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);

    const handleChange = (value: string, checked: boolean) => {
      setSelected((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)));
    };

    return (
      <CheckboxGroupPrimitive.Root>
        <Field.Item orientation="horizontal">
          <Checkbox
            checked={selected.includes('email')}
            id="email-notif"
            onCheckedChange={(checked) => handleChange('email', Boolean(checked))}
            value="email"
          />
          <Field.Label htmlFor="email-notif">Email notifications</Field.Label>
        </Field.Item>
        <Field.Item orientation="horizontal">
          <Checkbox
            checked={selected.includes('sms')}
            id="sms-notif"
            onCheckedChange={(checked) => handleChange('sms', Boolean(checked))}
            value="sms"
          />
          <Field.Label htmlFor="sms-notif">SMS notifications</Field.Label>
        </Field.Item>
        <Field.Item orientation="horizontal">
          <Checkbox
            checked={selected.includes('push')}
            id="push-notif"
            onCheckedChange={(checked) => handleChange('push', Boolean(checked))}
            value="push"
          />
          <Field.Label htmlFor="push-notif">Push notifications</Field.Label>
        </Field.Item>
      </CheckboxGroupPrimitive.Root>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Using the primitive components with `Field.Item` for full control over the checkbox group structure.',
      },
    },
  },
};

export const ProductFilters: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = useState<string[]>(['eco']);

    return (
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Filter by Features</label>
        <CheckboxGroup onValueChange={setSelected} options={featureOptions} value={selected} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'CheckboxGroup works well for product filtering in e-commerce.',
      },
    },
  },
};

export const NotificationSettings: Story = {
  args: {},
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email', 'push']);

    return (
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Notification Preferences</label>
        <CheckboxGroup onValueChange={setSelected} options={notificationOptions} value={selected} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Notification preference selection for user settings.',
      },
    },
  },
};
