import type { Meta, StoryObj } from '@storybook/react-vite';
import { DollarSign } from 'lucide-react';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import * as RangeInputPrimitive from '@/components/range-input/primitives';
import { RangeInput, type RangeInputValue } from '@/components/range-input/range-input';

// Wrapper component for stories
interface RangeInputStoryProps {
  children?: ReactNode;
}

function RangeInputStory({ children }: RangeInputStoryProps) {
  return <div className="w-80">{children}</div>;
}

const meta: Meta<typeof RangeInputStory> = {
  title: 'Components/RangeInput',
  component: RangeInputStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A range input component for selecting minimum and maximum values, commonly used for price filters in e-commerce.

## CSS Variables

The RangeInput uses the Input and Button components internally, which support theming through CSS variables:

### Input Variables

\`\`\`css
:root {
  --input-light-background: var(--background);
  --input-light-text: var(--foreground);
  --input-light-placeholder: var(--contrast-500);
  --input-light-border: var(--contrast-100);
  --input-light-focus: var(--foreground);
}
\`\`\`

### Button Variables

\`\`\`css
:root {
  --button-light-secondary-background: var(--contrast-100);
  --button-light-secondary-background-hover: var(--contrast-200);
  --button-light-secondary-text: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`RangeInput\` component provides a controlled API with \`inputValue\` and \`onInputChange\` props:

\`\`\`tsx
import { RangeInput, type RangeInputValue } from '@/components/range-input';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState<RangeInputValue>({ min: '', max: '' });

  return (
    <RangeInput
      inputValue={value}
      onInputChange={setValue}
      onApply={(range) => console.log('Applied:', range)}
    />
  );
}
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as RangeInput from '@/components/range-input';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ArrowRight } from 'lucide-react';

<RangeInput.Root>
  <Input type="number" placeholder="Min" />
  <Input type="number" placeholder="Max" />
  <Button shape="circle" size="small" variant="outline">
    <ArrowRight size={20} strokeWidth={1} />
  </Button>
</RangeInput.Root>
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
    const [value, setValue] = useState<RangeInputValue>({ min: '', max: '' });

    return (
      <div className="w-80">
        <RangeInput
          inputValue={value}
          onApply={(range) => console.log('Applied:', range)}
          onInputChange={setValue}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'The default RangeInput with min and max placeholders.',
      },
    },
  },
};

export const WithInitialValues: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<RangeInputValue>({ min: '25', max: '100' });

    return (
      <div className="w-80">
        <RangeInput
          inputValue={value}
          onApply={(range) => console.log('Applied:', range)}
          onInputChange={setValue}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'RangeInput initialized with preset minimum and maximum values.',
      },
    },
  },
};

export const PriceFilter: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<RangeInputValue>({ min: '', max: '' });
    const [appliedRange, setAppliedRange] = useState<{
      min: number | null;
      max: number | null;
    } | null>(null);

    return (
      <div className="w-80 space-y-4">
        <RangeInput
          inputValue={value}
          max={500}
          maxPlaceholder="500"
          maxPrepend={<DollarSign className="h-4 w-4" strokeWidth={1.5} />}
          min={0}
          minPlaceholder="0"
          minPrepend={<DollarSign className="h-4 w-4" strokeWidth={1.5} />}
          onApply={setAppliedRange}
          onInputChange={setValue}
        />
        {appliedRange && (
          <div className="rounded-lg bg-contrast-100 p-3 text-sm">
            <span className="font-medium text-contrast-500">Applied range:</span>{' '}
            <span className="text-foreground">
              ${appliedRange.min ?? 0} – ${appliedRange.max ?? 500}
            </span>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'A price filter with currency icons prepended to each input field. Commonly used in e-commerce product filters.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<RangeInputValue>({ min: '10', max: '50' });

    return (
      <div className="w-80">
        <RangeInput
          disabled
          inputValue={value}
          onApply={(range) => console.log('Applied:', range)}
          onInputChange={setValue}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state prevents user interaction.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  args: {},
  render: () => {
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    return (
      <RangeInputPrimitive.Root>
        <Input
          className="flex-1"
          min={0}
          onChange={(e) => setMinValue(e.currentTarget.value)}
          placeholder="Min"
          type="number"
          value={minValue}
        />
        <Input
          className="flex-1"
          max={100}
          onChange={(e) => setMaxValue(e.currentTarget.value)}
          placeholder="Max"
          type="number"
          value={maxValue}
        />
        <Button
          onClick={() => console.log('Apply:', { min: minValue, max: maxValue })}
          shape="circle"
          size="small"
          variant="outline"
        >
          Go
        </Button>
      </RangeInputPrimitive.Root>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Using the primitive components directly for full control over the range input structure.',
      },
    },
  },
};
