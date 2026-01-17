import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner, type SpinnerProps } from '@/components/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A loading spinner for indicating pending operations.

## CSS Variables

\`\`\`css
:root {
  --spinner-fill-base: var(--contrast-100);
  --spinner-fill-ring: color-mix(in oklab, var(--brand), black 75%);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Spinner size: xs (20px), sm (24px), md (40px), lg (56px)',
    },
  },
  args: {
    size: 'sm',
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default spinner at small size.',
      },
    },
  },
  args: {
    size: 'sm',
  },
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All available spinner sizes.',
      },
      source: {
        code: `
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
        `,
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
