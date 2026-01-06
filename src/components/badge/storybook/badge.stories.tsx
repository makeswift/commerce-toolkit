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
A badge component for displaying short status text, labels, or notifications. Supports multiple semantic variants and shapes.

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
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'In Stock',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Low Stock',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Sold Out',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Coming Soon',
    variant: 'info',
  },
};

export const PillShape: Story = {
  args: {
    children: 'Sale',
    shape: 'pill',
  },
};

export const RoundedShape: Story = {
  args: {
    children: 'Featured',
    shape: 'rounded',
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
        story: 'All available semantic variants displayed together.',
      },
    },
  },
};

export const AllShapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge shape="rounded">Rounded</Badge>
      <Badge shape="pill">Pill</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Both shape options: `rounded` (default) and `pill`.',
      },
    },
  },
};

export const ProductBadges: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="primary">New Arrival</Badge>
      <Badge shape="pill" variant="error">
        Sale
      </Badge>
      <Badge variant="success">Best Seller</Badge>
      <Badge variant="warning">Limited Edition</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common badge patterns used in e-commerce product displays.',
      },
    },
  },
};
