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
A loading spinner component for indicating pending operations. Supports multiple sizes and theming via CSS variables.

## CSS Variables

\`\`\`css
:root {
  --spinner-base: var(--contrast-100);
  --spinner-ring: color-mix(in oklab, var(--brand), black 75%);
}
\`\`\`

## Usage

\`\`\`tsx
import { Spinner } from '@/components/spinner';

<Spinner size="sm" />
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
      description: 'The size of the spinner',
    },
  },
  args: {
    size: 'sm',
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

// Default spinner
export const Default: Story = {
  args: {
    size: 'sm',
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
