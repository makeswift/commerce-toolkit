import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import * as ToggleGroupPrimitive from '@/components/toggle-group';

// Wrapper component for stories to avoid complex Radix union type issues
interface ToggleGroupStoryProps {
  type?: 'single' | 'multiple';
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  children?: ReactNode;
}

function ToggleGroupStory({ children, type = 'single', ...props }: ToggleGroupStoryProps) {
  return (
    <ToggleGroupPrimitive.Root type={type} {...props}>
      {children}
    </ToggleGroupPrimitive.Root>
  );
}

const sizeOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'XL', value: 'xl' },
];

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow' },
];

const alignmentOptions = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' },
];

const meta: Meta<typeof ToggleGroupStory> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroupStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A toggle group component for selecting one or multiple options from a set of choices. Built on Radix UI primitives.

## CSS Variables

The ToggleGroup component supports extensive theming through CSS variables:

\`\`\`css
:root {
  --toggle-group-light-focus: var(--primary);
  --toggle-group-light-border: var(--contrast-100);
  --toggle-group-light-on-border: var(--foreground);
  --toggle-group-light-on-background: var(--foreground);
  --toggle-group-light-off-background: var(--background);
  --toggle-group-light-off-text: var(--foreground);
  --toggle-group-light-on-text: var(--background);
  --toggle-group-light-off-border-hover: var(--contrast-200);
  --toggle-group-light-off-background-hover: var(--contrast-100);
}
\`\`\`

## Usage

The ToggleGroup can be used with primitives for full control:

\`\`\`tsx
import * as ToggleGroup from '@/components/toggle-group';

<ToggleGroup.Root type="single" defaultValue="md">
  <ToggleGroup.Item value="sm">Small</ToggleGroup.Item>
  <ToggleGroup.Item value="md">Medium</ToggleGroup.Item>
  <ToggleGroup.Item value="lg">Large</ToggleGroup.Item>
</ToggleGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether a single or multiple items can be selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire toggle group is disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the toggle group',
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

export const SingleSelection: Story = {
  args: {},
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="md" type="single">
      {sizeOptions.map((option) => (
        <ToggleGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'In single selection mode, only one item can be selected at a time.',
      },
    },
  },
};

export const MultipleSelection: Story = {
  args: {},
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue={['red', 'blue']} type="multiple">
      {colorOptions.map((option) => (
        <ToggleGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'In multiple selection mode, any number of items can be selected.',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {},
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="center" type="single">
      {alignmentOptions.map((option) => (
        <ToggleGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `defaultValue` to set the initially selected item.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="md" disabled type="single">
      {sizeOptions.map((option) => (
        <ToggleGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The entire toggle group can be disabled.',
      },
    },
  },
};

export const DisabledItems: Story = {
  args: {},
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="md" type="single">
      <ToggleGroupPrimitive.Item value="sm">Small</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="md">Medium</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item disabled value="lg">
        Large (Disabled)
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="xl">XL</ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual items can be disabled while others remain interactive.',
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
        <ToggleGroupPrimitive.Root onValueChange={setValue} type="single" value={value}>
          {sizeOptions.map((option) => (
            <ToggleGroupPrimitive.Item key={option.value} value={option.value}>
              {option.label}
            </ToggleGroupPrimitive.Item>
          ))}
        </ToggleGroupPrimitive.Root>
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected:</span>{' '}
          <span className="text-foreground">{value !== '' ? value : 'None'}</span>
        </div>
        <button
          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-primary/90"
          onClick={() => setValue('')}
          type="button"
        >
          Clear Selection
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

export const ControlledMultiple: Story = {
  args: {},
  render: () => {
    const [values, setValues] = useState<string[]>(['red', 'green']);

    return (
      <div className="space-y-4">
        <ToggleGroupPrimitive.Root onValueChange={setValues} type="multiple" value={values}>
          {colorOptions.map((option) => (
            <ToggleGroupPrimitive.Item key={option.value} value={option.value}>
              {option.label}
            </ToggleGroupPrimitive.Item>
          ))}
        </ToggleGroupPrimitive.Root>
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected:</span>{' '}
          <span className="text-foreground">{values.length > 0 ? values.join(', ') : 'None'}</span>
        </div>
        <button
          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-primary/90"
          onClick={() => setValues([])}
          type="button"
        >
          Clear All
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode with controlled state.',
      },
    },
  },
};

export const ProductSizeSelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Select Size</label>
      <ToggleGroupPrimitive.Root defaultValue="m" type="single">
        <ToggleGroupPrimitive.Item value="xs">XS</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="s">S</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="m">M</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="l">L</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="xl">XL</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="xxl">XXL</ToggleGroupPrimitive.Item>
      </ToggleGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical example for product size selection in e-commerce.',
      },
    },
  },
};

export const FilterTags: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Filter by Category</label>
      <ToggleGroupPrimitive.Root defaultValue={['electronics']} type="multiple">
        <ToggleGroupPrimitive.Item value="electronics">Electronics</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="clothing">Clothing</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="home">Home & Garden</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="sports">Sports</ToggleGroupPrimitive.Item>
        <ToggleGroupPrimitive.Item value="books">Books</ToggleGroupPrimitive.Item>
      </ToggleGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode works great for filter tags.',
      },
    },
  },
};

export const ManyOptions: Story = {
  args: {},
  render: () => {
    const days = [
      { label: 'Mon', value: 'monday' },
      { label: 'Tue', value: 'tuesday' },
      { label: 'Wed', value: 'wednesday' },
      { label: 'Thu', value: 'thursday' },
      { label: 'Fri', value: 'friday' },
      { label: 'Sat', value: 'saturday' },
      { label: 'Sun', value: 'sunday' },
    ];

    return (
      <div className="max-w-md space-y-3">
        <label className="text-sm font-medium text-foreground">Select Days</label>
        <ToggleGroupPrimitive.Root defaultValue={['monday', 'wednesday', 'friday']} type="multiple">
          {days.map((day) => (
            <ToggleGroupPrimitive.Item key={day.value} value={day.value}>
              {day.label}
            </ToggleGroupPrimitive.Item>
          ))}
        </ToggleGroupPrimitive.Root>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'The toggle group wraps naturally when there are many options.',
      },
    },
  },
};

export const CustomThemed: Story = {
  args: {},
  render: () => (
    <ToggleGroupPrimitive.Root defaultValue="option-2" type="single">
      <ToggleGroupPrimitive.Item value="option-1">Option 1</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="option-2">Option 2</ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value="option-3">Option 3</ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  ),
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center justify-center rounded-xl bg-contrast-100 p-8 [--toggle-group-light-off-background-hover:color-mix(in_oklch,var(--primary)_10%,transparent)] [--toggle-group-light-off-border-hover:var(--primary)] [--toggle-group-light-on-background:var(--primary)] [--toggle-group-light-on-border:var(--primary)]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'The ToggleGroup can be fully themed using CSS variables. This example uses the primary color for the selected state.',
      },
    },
  },
};
