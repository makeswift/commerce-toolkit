import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { Select, type SelectProps } from '@/components/select/select';

const defaultOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
];

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Orange', value: 'orange' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Violet', value: 'violet' },
];

const manyOptions = Array.from({ length: 20 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A customizable select dropdown component built on Radix UI primitives.

## CSS Variables

The Select component supports extensive theming through CSS variables:

\`\`\`css
:root {
  --select-light-trigger-background: hsl(var(--background));
  --select-light-trigger-background-hover: hsl(var(--contrast-100));
  --select-light-trigger-border: hsl(var(--contrast-100));
  --select-light-trigger-border-hover: hsl(var(--contrast-300));
  --select-light-trigger-border-error: hsl(var(--error));
  --select-light-trigger-text: hsl(var(--foreground));
  --select-light-trigger-focus: hsl(var(--primary));
  --select-light-icon: hsl(var(--foreground));
  --select-light-content-background: hsl(var(--background));
  --select-light-content-border: color-mix(in oklab, var(--foreground) 10%, transparent);
  --select-light-item-background-hover: hsl(var(--contrast-100));
  --select-light-item-background-focus: hsl(var(--contrast-100));
  --select-light-item-text: hsl(var(--contrast-400));
  --select-light-item-text-hover: hsl(var(--foreground));
  --select-light-item-text-focus: hsl(var(--foreground));
  --select-light-item-checked-text-focus: hsl(var(--foreground));
}
\`\`\`
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
      description: 'Accessible label for the select (used as aria-label)',
    },
    options: {
      control: false,
      description: 'Array of options with label and value',
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected value (uncontrolled)',
    },
    value: {
      control: 'text',
      description: 'The selected value (controlled)',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback when the selected value changes',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    id: 'select-default',
    label: 'Size',
    options: defaultOptions,
    placeholder: 'Select a size',
  },
};

export const WithDefaultValue: Story = {
  args: {
    id: 'select-with-default',
    label: 'Size',
    options: defaultOptions,
    placeholder: 'Select a size',
    defaultValue: 'md',
  },
};

export const RectangleVariant: Story = {
  args: {
    id: 'select-rectangle',
    label: 'Color',
    options: colorOptions,
    placeholder: 'Choose a color',
    variant: 'rectangle',
  },
};

export const RoundVariant: Story = {
  args: {
    id: 'select-round',
    label: 'Color',
    options: colorOptions,
    placeholder: 'Choose a color',
    variant: 'round',
  },
};

export const Pending: Story = {
  args: {
    id: 'select-pending',
    label: 'Size',
    options: defaultOptions,
    placeholder: 'Loading...',
    pending: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The pending state can be used to indicate that options are being loaded.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'select-disabled',
    label: 'Size',
    options: defaultOptions,
    placeholder: 'Select a size',
    disabled: true,
  },
};

export const WithManyOptions: Story = {
  args: {
    id: 'select-many',
    label: 'Select option',
    options: manyOptions,
    placeholder: 'Choose an option',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When there are many options, the dropdown becomes scrollable with scroll indicators at the top and bottom.',
      },
    },
  },
};

export const Controlled: Story = {
  args: {
    id: 'select-controlled',
    label: 'Size',
    options: defaultOptions,
    placeholder: 'Select a size',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');

    return (
      <div className="space-y-4">
        <Select {...args} onValueChange={setValue} value={value} />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected value:</span>{' '}
          <span className="text-foreground">{value !== '' ? value : 'None'}</span>
        </div>
        <button
          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-primary/90"
          onClick={() => setValue('')}
          type="button"
        >
          Reset
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `value` and `onValueChange` props to control the select state externally.',
      },
    },
  },
};

export const SizeSelector: Story = {
  args: {
    id: 'select-size-product',
    label: 'Product Size',
    options: [
      { label: 'XS (Extra Small)', value: 'xs' },
      { label: 'S (Small)', value: 's' },
      { label: 'M (Medium)', value: 'm' },
      { label: 'L (Large)', value: 'l' },
      { label: 'XL (Extra Large)', value: 'xl' },
      { label: 'XXL (Double Extra Large)', value: 'xxl' },
    ],
    placeholder: 'Select your size',
    variant: 'rectangle',
  },
  parameters: {
    docs: {
      description: {
        story: 'A practical example of using the Select for product size selection.',
      },
    },
  },
};

export const CountrySelector: Story = {
  args: {
    id: 'select-country',
    label: 'Country',
    options: [
      { label: '🇺🇸 United States', value: 'us' },
      { label: '🇬🇧 United Kingdom', value: 'uk' },
      { label: '🇨🇦 Canada', value: 'ca' },
      { label: '🇦🇺 Australia', value: 'au' },
      { label: '🇩🇪 Germany', value: 'de' },
      { label: '🇫🇷 France', value: 'fr' },
      { label: '🇯🇵 Japan', value: 'jp' },
      { label: '🇧🇷 Brazil', value: 'br' },
    ],
    placeholder: 'Select a country',
    variant: 'rectangle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select can display rich content like emoji flags for country selection.',
      },
    },
  },
};

export const CustomThemed: Story = {
  args: {
    id: 'select-themed',
    label: 'Themed Select',
    options: colorOptions,
    placeholder: 'Custom themed',
    variant: 'rectangle',
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="themed-select-wrapper w-64 rounded-xl bg-contrast-100 p-6 [--select-light-icon:hsl(var(--background))] [--select-light-trigger-background-hover:hsl(var(--primary)/0.9)] [--select-light-trigger-background:hsl(var(--primary))] [--select-light-trigger-border-hover:hsl(var(--primary)/0.8)] [--select-light-trigger-border:hsl(var(--primary))] [--select-light-trigger-text:hsl(var(--background))]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'The Select component can be fully themed using CSS variables. This example shows a primary-colored trigger.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium text-contrast-500">Rectangle (default)</p>
        <Select
          id="all-variants-rect"
          label="Size"
          options={defaultOptions}
          placeholder="Select a size"
          variant="rectangle"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-contrast-500">Round</p>
        <Select
          id="all-variants-round"
          label="Size"
          options={defaultOptions}
          placeholder="Select a size"
          variant="round"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A comparison of the two available variants: rectangle and round.',
      },
    },
  },
};
