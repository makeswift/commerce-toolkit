import type { Meta, StoryObj } from '@storybook/react-vite';

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
  --chip-fill: var(--contrast-100);
  --chip-text: var(--text-primary);
  --chip-font: var(--font-body);
}
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
      description: 'Accessible label for the remove button',
    },
    icon: {
      control: false,
      description: 'Custom icon configuration with `asChild` support',
    },
    onClick: {
      description: 'Handler called when the remove button is clicked',
    },
  },
  args: {
    children: 'Chip',
    removeLabel: 'Remove',
  },
};

export default meta;
type Story = StoryObj<ChipProps>;

export const Default: Story = {
  args: {
    children: 'Electronics',
    onClick: () => console.log('Removed'),
  },
};

export const MultipleChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip onClick={() => console.log('Removed')} removeLabel="Remove Electronics">
        Electronics
      </Chip>
      <Chip onClick={() => console.log('Removed')} removeLabel="Remove Under $50">
        Under $50
      </Chip>
      <Chip onClick={() => console.log('Removed')} removeLabel="Remove In Stock">
        In Stock
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips are commonly used to display active filters that can be removed.',
      },
    },
  },
};

/**
 * Use the composable primitives to build custom chip layouts.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <ChipPrimitive.Root>
      Custom Chip
      <ChipPrimitive.Button onClick={() => console.log('Removed')} title="Remove">
        <ChipPrimitive.Icon />
      </ChipPrimitive.Button>
    </ChipPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom chip layouts:

\`\`\`tsx
import * as ChipPrimitive from '@/components/chip/primitives';

<ChipPrimitive.Root>
  Chip Label
  <ChipPrimitive.Button onClick={handleRemove} title="Remove">
    <ChipPrimitive.Icon />
  </ChipPrimitive.Button>
</ChipPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
