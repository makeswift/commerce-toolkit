import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, Minus } from 'lucide-react';
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
  --checkbox-focus: var(--primary);
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
    value: {
      control: 'text',
      description: 'The value of the checkbox for form submission',
    },
    onCheckedChange: {
      control: false,
      description: 'Callback when the checked state changes',
    },
    className: {
      control: false,
      description: 'Additional CSS classes to apply to the component',
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

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `defaultChecked` for uncontrolled state or `checked` for controlled state.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled checkboxes prevent user interaction and display a muted appearance.',
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'A checkbox can be both disabled and checked to show a locked selection.',
      },
    },
  },
};

export const WithLabel: Story = {
  render: () => (
    <Field.Item orientation="horizontal">
      <Checkbox id="terms" name="terms" />
      <Label htmlFor="terms">I agree to the terms and conditions</Label>
    </Field.Item>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `Field.Item` with `orientation="horizontal"` and `Label` to pair the checkbox with a label for accessibility.',
      },
    },
  },
};

/**
 * Use the controlled pattern with `checked` and `onCheckedChange` for full control over the checkbox state.
 */
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
  parameters: {
    docs: {
      description: {
        story:
          'Use `checked` and `onCheckedChange` props for controlled state management in React.',
      },
    },
  },
};

/**
 * The Checkbox can be built using composable primitives for full customization.
 * This example shows the component anatomy using the primitive components.
 */
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
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom checkbox layouts with different icons:

\`\`\`tsx
import * as CheckboxPrimitive from '@/components/checkbox/primitives';
import { Check } from 'lucide-react';

<CheckboxPrimitive.Root id="my-checkbox">
  <CheckboxPrimitive.Indicator>
    <Check className="h-4 w-4" />
  </CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};

/**
 * Use the composable primitives to create a checkbox with a custom indicator icon.
 */
export const CustomIndicator: Story = {
  render: () => (
    <Field.Item orientation="horizontal">
      <CheckboxPrimitive.Root defaultChecked={true} id="indeterminate-checkbox">
        <CheckboxPrimitive.Indicator>
          <Minus absoluteStrokeWidth className="h-4 w-4" color="currentColor" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label htmlFor="indeterminate-checkbox">Indeterminate state</Label>
    </Field.Item>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'With composable primitives, you can use any icon for the indicator, such as a minus icon for indeterminate states.',
      },
    },
  },
};
