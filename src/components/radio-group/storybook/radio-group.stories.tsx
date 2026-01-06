import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import * as Field from '@/components/field';
import * as RadioGroupPrimitive from '@/components/radio-group/primitives';
import { RadioGroup } from '@/components/radio-group/radio-group';

// Wrapper component for stories to avoid complex Radix union type issues
interface RadioGroupStoryProps {
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  children?: ReactNode;
}

function RadioGroupStory({ children, ...props }: RadioGroupStoryProps) {
  return <RadioGroupPrimitive.Root {...props}>{children}</RadioGroupPrimitive.Root>;
}

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

const subscriptionOptions = [
  { value: 'monthly', label: 'Monthly — $9.99/month', id: 'plan-monthly' },
  { value: 'quarterly', label: 'Quarterly — $24.99/quarter', id: 'plan-quarterly' },
  { value: 'annual', label: 'Annual — $79.99/year', id: 'plan-annual' },
];

const meta: Meta<typeof RadioGroupStory> = {
  title: 'Components/RadioGroup',
  component: RadioGroupStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component for selecting a single option from a set of choices. Built on Radix UI Radio Group primitives.

## CSS Variables

The RadioGroup component supports theming through CSS variables:

\`\`\`css
:root {
  --radio-group-light-background: var(--background);
  --radio-group-light-border: var(--contrast-200);
  --radio-group-light-border-error: var(--error);
  --radio-group-light-disabled-border-error: color-mix(in oklab, var(--error) 50%, transparent);
  --radio-group-light-border-hover: var(--contrast-300);
  --radio-group-light-border-focus: var(--contrast-300);
  --radio-group-light-indicator-background: var(--foreground);
  --radio-group-light-label: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`RadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { RadioGroup } from '@/components/radio-group/radio-group';

const sizeOptions = [
  { value: 'sm', label: 'Small', id: 'size-sm' },
  { value: 'md', label: 'Medium', id: 'size-md' },
  { value: 'lg', label: 'Large', id: 'size-lg' },
];

<RadioGroup
  id="size-selector"
  options={sizeOptions}
  defaultValue="md"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components with \`Field.Item\`:

\`\`\`tsx
import * as RadioGroup from '@/components/radio-group';
import * as Field from '@/components/field';

<RadioGroup.Root defaultValue="md">
  <Field.Item orientation="horizontal">
    <RadioGroup.Item value="sm" id="size-sm">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <Field.Label htmlFor="size-sm">Small</Field.Label>
  </Field.Item>
  <Field.Item orientation="horizontal">
    <RadioGroup.Item value="md" id="size-md">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <Field.Label htmlFor="size-md">Medium</Field.Label>
  </Field.Item>
  <Field.Item orientation="horizontal">
    <RadioGroup.Item value="lg" id="size-lg">
      <RadioGroup.Indicator />
    </RadioGroup.Item>
    <Field.Label htmlFor="size-lg">Large</Field.Label>
  </Field.Item>
</RadioGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
    },
    loop: {
      control: 'boolean',
      description: 'Whether keyboard navigation should loop from last to first and vice versa',
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

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <RadioGroupPrimitive.Root defaultValue="md">
      {sizeOptions.map((option) => (
        <Field.Item key={option.id} orientation="horizontal">
          <RadioGroupPrimitive.Item id={option.id} value={option.value}>
            <RadioGroupPrimitive.Indicator />
          </RadioGroupPrimitive.Item>
          <Field.Label htmlFor={option.id}>{option.label}</Field.Label>
        </Field.Item>
      ))}
    </RadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The default RadioGroup with a single option selected at a time.',
      },
    },
  },
};

export const HighLevelComponent: Story = {
  args: {},
  render: () => <RadioGroup defaultValue="md" options={sizeOptions} />,
  parameters: {
    docs: {
      description: {
        story:
          'Using the high-level `RadioGroup` component with an options array for a simpler API.',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {},
  render: () => <RadioGroup defaultValue="express" options={shippingOptions} />,
  parameters: {
    docs: {
      description: {
        story: 'Use `defaultValue` to set the initially selected option.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {},
  render: () => <RadioGroup defaultValue="md" disabled options={sizeOptions} />,
  parameters: {
    docs: {
      description: {
        story: 'The entire radio group can be disabled, preventing any interaction.',
      },
    },
  },
};

export const DisabledItems: Story = {
  args: {},
  render: () => {
    const options = [
      { value: 'standard', label: 'Standard Shipping (5-7 days)', id: 'disabled-standard' },
      { value: 'express', label: 'Express Shipping (2-3 days)', id: 'disabled-express' },
      {
        value: 'overnight',
        label: 'Overnight Delivery (Not Available)',
        id: 'disabled-overnight',
        disabled: true,
      },
    ];

    return <RadioGroup defaultValue="standard" options={options} />;
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
        <button
          className="rounded-lg bg-brand px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-brand/90"
          onClick={() => setValue('sm')}
          type="button"
        >
          Reset to Small
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `value` and `onValueChange` for controlled state management.',
      },
    },
  },
};

export const WithMouseEnterCallback: Story = {
  args: {},
  render: () => {
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    return (
      <div className="space-y-4">
        <RadioGroup
          defaultValue="monthly"
          onOptionMouseEnter={setHoveredValue}
          options={subscriptionOptions}
        />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Previewing:</span>{' '}
          <span className="text-foreground">
            {hoveredValue != null && hoveredValue !== ''
              ? subscriptionOptions.find((o) => o.value === hoveredValue)?.label
              : 'Hover over an option'}
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `onOptionMouseEnter` callback fires when hovering over options. Useful for showing previews before selection.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  args: {},
  render: () => (
    <RadioGroupPrimitive.Root defaultValue="express">
      <Field.Item orientation="horizontal">
        <RadioGroupPrimitive.Item id="compose-standard" value="standard">
          <RadioGroupPrimitive.Indicator />
        </RadioGroupPrimitive.Item>
        <Field.Label htmlFor="compose-standard">Standard Shipping (5-7 days)</Field.Label>
      </Field.Item>
      <Field.Item orientation="horizontal">
        <RadioGroupPrimitive.Item id="compose-express" value="express">
          <RadioGroupPrimitive.Indicator />
        </RadioGroupPrimitive.Item>
        <Field.Label htmlFor="compose-express">Express Shipping (2-3 days)</Field.Label>
      </Field.Item>
      <Field.Item orientation="horizontal">
        <RadioGroupPrimitive.Item id="compose-overnight" value="overnight">
          <RadioGroupPrimitive.Indicator />
        </RadioGroupPrimitive.Item>
        <Field.Label htmlFor="compose-overnight">Overnight Delivery</Field.Label>
      </Field.Item>
    </RadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Using the primitive components with `Field.Item` for full control over the radio group structure.',
      },
    },
  },
};

export const SubscriptionPlans: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Select Plan</label>
      <RadioGroup defaultValue="annual" options={subscriptionOptions} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Subscription plan selection showcasing pricing tiers.',
      },
    },
  },
};

export const ShippingMethodSelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Shipping Method</label>
      <RadioGroup defaultValue="standard" options={shippingOptions} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'RadioGroup works well for shipping method selection during checkout.',
      },
    },
  },
};
