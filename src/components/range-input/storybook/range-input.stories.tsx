import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { RangeInput, type RangeInputProps } from '@/components/range-input';
import * as RangeInputPrimitive from '@/components/range-input/primitives';

const meta: Meta<typeof RangeInput> = {
  title: 'Components/RangeInput',
  component: RangeInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A range input component for selecting minimum and maximum values, commonly used for price filters in e-commerce.

## CSS Variables

The RangeInput uses the Input and Button components internally, which support theming through CSS variables:

\`\`\`css
:root {
  /* Input */
  --input-light-background: var(--background);
  --input-light-text: var(--foreground);
  --input-light-placeholder: var(--contrast-500);
  --input-light-border: var(--contrast-100);
  --input-light-focus: var(--foreground);

  /* Button */
  --button-light-outline-background: transparent;
  --button-light-outline-background-hover: var(--contrast-100);
  --button-light-outline-border: var(--contrast-100);
  --button-light-outline-text: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`RangeInput\` component is a controlled component with \`inputValue\` and \`onInputChange\`:

\`\`\`tsx
import { RangeInput } from '@/components/range-input';
import { useState } from 'react';

function PriceFilter() {
  const [value, setValue] = useState({ min: '', max: '' });

  return (
    <RangeInput
      inputValue={value}
      onInputChange={setValue}
      onApply={(range) => console.log('Applied:', range)}
      minPlaceholder="Min"
      maxPlaceholder="Max"
    />
  );
}
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly. The \`RangeInput.Root\` handles the layout automatically using \`data-slot\` selectors:

\`\`\`tsx
import * as RangeInput from '@/components/range-input';

<RangeInput.Root>
  <RangeInput.Field type="number" placeholder="Min" />
  <RangeInput.Field type="number" placeholder="Max" />
  <RangeInput.Button shape="circle" size="small" variant="outline">
    <RangeInput.Icon />
  </RangeInput.Button>
</RangeInput.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    inputValue: {
      control: false,
      description: 'The controlled input values for min and max',
    },
    onInputChange: {
      control: false,
      description: 'Callback when input values change',
    },
    onApply: {
      control: false,
      description: 'Callback when the apply button is clicked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the inputs are disabled',
    },
    minPlaceholder: {
      control: 'text',
      description: 'Placeholder for the min input',
    },
    maxPlaceholder: {
      control: 'text',
      description: 'Placeholder for the max input',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<RangeInputProps>;

// Default range input
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState({ min: '', max: '' });

    return <RangeInput inputValue={value} onInputChange={setValue} />;
  },
};

// Controlled with initial values
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState({ min: '25', max: '100' });

    return (
      <RangeInput
        inputValue={value}
        onApply={(range) => console.log('Applied:', range)}
        onInputChange={setValue}
      />
    );
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    return (
      <RangeInputPrimitive.Root>
        <RangeInputPrimitive.Field
          onChange={(e) => setMinValue(e.currentTarget.value)}
          placeholder="Min"
          type="number"
          value={minValue}
        />
        <RangeInputPrimitive.Field
          onChange={(e) => setMaxValue(e.currentTarget.value)}
          placeholder="Max"
          type="number"
          value={maxValue}
        />
        <RangeInputPrimitive.Button
          onClick={() => console.log('Apply:', { min: minValue, max: maxValue })}
          shape="circle"
          size="small"
          variant="outline"
        >
          <RangeInputPrimitive.Icon />
        </RangeInputPrimitive.Button>
      </RangeInputPrimitive.Root>
    );
  },
};
