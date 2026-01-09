import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check } from 'lucide-react';
import { type ComponentType, useState } from 'react';

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
  --checkbox-font-family: var(--font-family-body);

  /* Unchecked state */
  --checkbox-light-unchecked-border: var(--contrast-200);
  --checkbox-light-unchecked-border-hover: var(--contrast-300);
  --checkbox-light-unchecked-background: var(--background);
  --checkbox-light-unchecked-icon: var(--foreground);

  /* Checked state */
  --checkbox-light-checked-border: var(--foreground);
  --checkbox-light-checked-border-hover: var(--foreground);
  --checkbox-light-checked-background: var(--foreground);
  --checkbox-light-checked-icon: var(--background);

  /* Disabled state */
  --checkbox-light-disabled-border: var(--contrast-200);
  --checkbox-light-disabled-background: var(--contrast-100);
  --checkbox-light-disabled-icon: var(--contrast-300);

  /* Error state */
  --checkbox-light-error: var(--error);
}
\`\`\`

## Usage

### High-Level Component

The \`Checkbox\` component provides a simple API. Use with \`Field.Item\` and \`Label\` for accessibility:

\`\`\`tsx
import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field';
import { Label } from '@/components/label';

<Field.Item orientation="horizontal">
  <Checkbox id="terms" name="terms" />
  <Label htmlFor="terms">I agree to the terms</Label>
</Field.Item>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Checkbox from '@/components/checkbox';
import { Check } from 'lucide-react';

<Checkbox.Root id="my-checkbox">
  <Checkbox.Indicator>
    <Checkbox.Icon>
      <Check />
    </Checkbox.Icon>
  </Checkbox.Indicator>
</Checkbox.Root>
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
    onCheckedChange: {
      control: false,
      description: 'Callback when the checked state changes',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center gap-4 bg-background p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CheckboxProps>;

// Default checkbox
export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

// With label (common use case)
export const WithLabel: Story = {
  render: () => (
    <Field.Item orientation="horizontal">
      <Checkbox id="terms" name="terms" />
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
    </Field.Item>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

// Controlled example
export const Controlled: Story = {
  render: function ControlledCheckbox() {
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

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <Field.Item orientation="horizontal">
      <CheckboxPrimitive.Root defaultChecked={false} id="custom-checkbox">
        <CheckboxPrimitive.Indicator>
          <Check absoluteStrokeWidth className="h-4 w-4" color="currentColor" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label htmlFor="custom-checkbox">Custom checkbox</Label>
    </Field.Item>
  ),
};
