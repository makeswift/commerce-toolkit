import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Checkbox, type CheckboxProps } from '@/components/checkbox';
import * as CheckboxPrimitive from '@/components/checkbox/primitives';
import * as Field from '@/components/field/primitives';
import { Label } from '@/components/label';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A checkbox component built on Radix UI for accessible, customizable binary selections. Supports checked, unchecked, disabled, and error states.

## CSS Variables

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
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the checkbox',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required in a form',
    },
    name: {
      control: 'text',
      description: 'The name of the checkbox for form submission',
    },
    icon: {
      control: false,
      description: 'Custom icon configuration with `asChild` support',
    },
    onCheckedChange: {
      control: false,
      description: 'Callback when the checked state changes',
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const WithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use with `Field.Item` and `Label` for accessible labeling. Set `orientation="horizontal"` for inline layout.',
      },
      source: {
        code: `
<Field.Item orientation="horizontal">
  <Checkbox id="terms" name="terms" />
  <Label htmlFor="terms">I agree to the terms and conditions</Label>
</Field.Item>
        `,
      },
    },
  },
  render: () => (
    <Field.Item orientation="horizontal">
      <Checkbox id="terms" name="terms" />
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
    </Field.Item>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The `disabled` prop prevents interaction and applies reduced opacity styling.',
      },
    },
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `checked` and `onCheckedChange` for controlled state management.',
      },
      source: {
        code: `
const [checked, setChecked] = useState(false);

<Field.Item orientation="horizontal">
  <Checkbox
    id="newsletter"
    name="newsletter"
    checked={checked}
    onCheckedChange={(value) => setChecked(value === true)}
  />
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</Field.Item>
        `,
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Field.Item orientation="horizontal">
        <Checkbox
          checked={checked}
          id="newsletter"
          name="newsletter"
          onCheckedChange={(value) => setChecked(value === true)}
        />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </Field.Item>
    );
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                    | Description                                    |
|------------------------------|------------------------------------------------|
| \`CheckboxPrimitive.Root\`      | The checkbox root with all state styling.      |
| \`CheckboxPrimitive.Indicator\` | Container that shows when checked.             |
| \`CheckboxPrimitive.Icon\`      | Check icon with \`asChild\` support.           |
        `,
      },
      source: {
        code: `
import * as CheckboxPrimitive from '@/components/checkbox/primitives';

<CheckboxPrimitive.Root id="custom-checkbox">
  <CheckboxPrimitive.Indicator>
    <CheckboxPrimitive.Icon />
  </CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <Field.Item orientation="horizontal">
      <CheckboxPrimitive.Root id="custom-checkbox">
        <CheckboxPrimitive.Indicator>
          <CheckboxPrimitive.Icon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label htmlFor="custom-checkbox">Custom checkbox</Label>
    </Field.Item>
  ),
};
