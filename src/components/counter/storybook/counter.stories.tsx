import type { Meta, StoryObj } from '@storybook/react-vite';
import { Minus, Plus } from 'lucide-react';
import { useRef, useState } from 'react';

import { Counter, type CounterProps } from '@/components/counter';
import * as CounterPrimitive from '@/components/counter/primitives';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A numeric counter input component for selecting quantities. Features increment/decrement buttons with customizable icons. Commonly used for product quantities in e-commerce.

## CSS Variables

\`\`\`css
:root {
  --counter-focus: var(--brand);
  --counter-font-family: var(--font-family-body);
  --counter-background: var(--background);
  --counter-background-hover: color-mix(in oklab, var(--contrast-100) 50%, transparent);
  --counter-border: var(--contrast-100);
  --counter-text: var(--foreground);
  --counter-icon: var(--contrast-300);
  --counter-icon-hover: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`Counter\` component provides a simple API for quantity selection:

\`\`\`tsx
import { Counter } from '@/components/counter';

<Counter
  defaultValue={1}
  min={0}
  max={10}
/>
\`\`\`

### With Custom Icons

Use the \`decrementIcon\` and \`incrementIcon\` props with \`asChild\` for custom icons:

\`\`\`tsx
import { Counter } from '@/components/counter';
import { Minus, Plus } from 'lucide-react';

<Counter
  defaultValue={1}
  decrementIcon={{ asChild: true, children: <Minus size={16} /> }}
  incrementIcon={{ asChild: true, children: <Plus size={16} /> }}
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Counter from '@/components/counter';

<Counter.Root>
  <Counter.Decrease aria-label="Decrease" onClick={handleDecrement}>
    <Counter.DecreaseIcon />
  </Counter.Decrease>
  <Counter.Input
    type="number"
    min={0}
    max={10}
    value={count}
    onChange={handleChange}
  />
  <Counter.Increase aria-label="Increase" onClick={handleIncrement}>
    <Counter.IncreaseIcon />
  </Counter.Increase>
</Counter.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'number',
      description: 'Initial count value (uncontrolled mode)',
    },
    value: {
      control: 'number',
      description: 'Current count value (controlled mode)',
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value',
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the counter is disabled',
    },
    decrementIcon: {
      control: false,
      description: 'Custom decrement icon configuration with asChild support',
    },
    incrementIcon: {
      control: false,
      description: 'Custom increment icon configuration with asChild support',
    },
  },
  args: {
    defaultValue: 1,
    min: 0,
    max: 10,
  },
};

export default meta;
type Story = StoryObj<CounterProps>;

// Default counter
export const Default: Story = {
  args: {
    defaultValue: 1,
  },
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [count, setCount] = useState(3);

    return (
      <Counter
        max={10}
        min={0}
        onChange={(e) => setCount(Number(e.currentTarget.value))}
        value={count}
      />
    );
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    defaultValue: 5,
    disabled: true,
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState(2);

    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    const handleIncrement = () => {
      if (count < 10) {
        setCount(count + 1);
      }
    };

    return (
      <CounterPrimitive.Root>
        <CounterPrimitive.Decrease
          aria-label="Decrease quantity"
          disabled={count <= 0}
          onClick={handleDecrement}
        >
          <CounterPrimitive.DecreaseIcon asChild>
            <Minus absoluteStrokeWidth size={18} strokeWidth={1.5} />
          </CounterPrimitive.DecreaseIcon>
        </CounterPrimitive.Decrease>
        <CounterPrimitive.Input
          max={10}
          min={0}
          onChange={(e) => setCount(Number(e.target.value))}
          ref={inputRef}
          type="number"
          value={count}
        />
        <CounterPrimitive.Increase
          aria-label="Increase quantity"
          disabled={count >= 10}
          onClick={handleIncrement}
        >
          <CounterPrimitive.IncreaseIcon asChild>
            <Plus absoluteStrokeWidth size={18} strokeWidth={1.5} />
          </CounterPrimitive.IncreaseIcon>
        </CounterPrimitive.Increase>
      </CounterPrimitive.Root>
    );
  },
};
