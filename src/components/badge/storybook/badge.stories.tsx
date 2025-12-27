import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge, type BadgeProps } from '@/components/badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A small status indicator component for displaying labels, tags, and statuses.

## CSS Variables

\`\`\`css
:root {
  --badge-brand-background: var(--brand-background);
  --badge-success-background: var(--success-background);
  --badge-warning-background: var(--warning-background);
  --badge-error-background: var(--error-background);
  --badge-info-background: var(--background);
  --badge-text: var(--text-brand);
  --badge-font-family: var(--font-family-body);
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
      description: 'The text content of the badge',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'The semantic variant of the badge',
    },
    shape: {
      control: 'select',
      options: ['pill', 'rounded'],
      description: 'The shape of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The badge supports five semantic variants for different use cases.',
      },
    },
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge shape="rounded" variant="primary">
        Rounded
      </Badge>
      <Badge shape="pill" variant="primary">
        Pill
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badges come in two shapes: `rounded` (default) with subtle corners and `pill` with fully rounded ends.',
      },
    },
  },
};

export const ProductStatus: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">In Stock</Badge>
      <Badge variant="warning">Low Stock</Badge>
      <Badge variant="error">Out of Stock</Badge>
      <Badge variant="info">Pre-Order</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common use case for displaying product availability status.',
      },
    },
  },
};
