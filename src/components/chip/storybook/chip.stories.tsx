import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from 'lucide-react';
import { useState } from 'react';

import { Chip, type ChipProps } from '@/components/chip';
import * as ChipPrimitive from '@/components/chip/primitives';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A dismissible chip component for displaying selected filters, tags, or removable items. Commonly used for filter UIs and multi-select displays.

## CSS Variables

\`\`\`css
:root {
  --chip-focus: var(--foreground);
  --chip-font-family: var(--font-family-body);
  --chip-background: var(--contrast-100);
  --chip-background-hover: var(--contrast-200);
  --chip-text: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`Chip\` component provides a dismissible chip with a remove button:

\`\`\`tsx
import { Chip } from '@/components/chip';

<Chip onClick={handleRemove} removeLabel="Remove filter">
  Electronics
</Chip>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Chip from '@/components/chip';

<Chip.Root>
  Electronics
  <Chip.Button title="Remove" onClick={handleRemove}>
    <Chip.Icon />
  </Chip.Button>
</Chip.Root>
\`\`\`

The \`Chip.Icon\` supports \`asChild\` for custom icons:

\`\`\`tsx
<Chip.Icon asChild>
  <MyCustomIcon />
</Chip.Icon>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Chip content',
    },
    removeLabel: {
      control: 'text',
      description: 'Accessible label for remove button',
    },
    name: {
      control: 'text',
      description: 'Input name for form integration',
    },
    value: {
      control: 'text',
      description: 'Input value for form integration',
    },
    onClick: {
      description: 'Handler for remove button click',
    },
    icon: {
      control: false,
      description: 'Custom icon configuration with asChild support',
    },
  },
  args: {
    children: 'Chip',
    removeLabel: 'Remove',
  },
};

export default meta;
type Story = StoryObj<ChipProps>;

const noop = () => {
  // no-op for storybook
};

// Default chip
export const Default: Story = {
  args: {
    children: 'Electronics',
    onClick: noop,
  },
};

// With custom icon
export const WithIcon: Story = {
  args: {
    children: 'Tagged',
    onClick: noop,
    icon: {
      asChild: true,
      children: <Tag className="size-3" />,
    },
  },
};

// Interactive filter chips
export const Interactive: Story = {
  render: () => {
    const [filters, setFilters] = useState(['Electronics', 'Under $50', 'In Stock']);

    const removeFilter = (index: number) => {
      setFilters(filters.filter((_, i) => i !== index));
    };

    return (
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <Chip key={filter} onClick={() => removeFilter(index)} removeLabel={`Remove ${filter}`}>
            {filter}
          </Chip>
        ))}
      </div>
    );
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <ChipPrimitive.Root>
      Custom Chip
      <ChipPrimitive.Button onClick={noop} title="Remove">
        <ChipPrimitive.Icon />
      </ChipPrimitive.Button>
    </ChipPrimitive.Root>
  ),
};
