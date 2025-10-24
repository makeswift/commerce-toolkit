import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge, type BadgeProps } from '@/components/badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'warning', 'error', 'success', 'info'],
      description: 'The visual style variant of the badge',
    },
    shape: {
      control: 'select',
      options: ['pill', 'rounded'],
      description: 'The border radius style of the badge',
    },
    children: {
      control: 'text',
      description: 'The text content of the badge',
    },
  },
  args: {
    children: 'Badge',
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

// Shape stories
export const Pill: Story = {
  args: {
    shape: 'pill',
    children: 'Pill',
  },
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    children: 'Rounded',
  },
};

// Use case examples
export const ProductStatus: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">In Stock</Badge>
      <Badge variant="warning">Low Stock</Badge>
      <Badge variant="error">Out of Stock</Badge>
      <Badge variant="info">Pre-Order</Badge>
    </div>
  ),
};

export const ProductTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge shape="pill" variant="primary">
        New
      </Badge>
      <Badge shape="pill" variant="error">
        Sale
      </Badge>
      <Badge shape="pill" variant="success">
        Featured
      </Badge>
      <Badge shape="pill" variant="info">
        Limited
      </Badge>
    </div>
  ),
};

export const OrderStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">Order #12345:</span>
        <Badge variant="info">Processing</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Order #12346:</span>
        <Badge variant="warning">Shipped</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Order #12347:</span>
        <Badge variant="success">Delivered</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Order #12348:</span>
        <Badge variant="error">Cancelled</Badge>
      </div>
    </div>
  ),
};

export const MixedShapes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge shape="rounded" variant="primary">
        Rounded
      </Badge>
      <Badge shape="pill" variant="primary">
        Pill
      </Badge>
      <Badge shape="rounded" variant="success">
        Rounded
      </Badge>
      <Badge shape="pill" variant="success">
        Pill
      </Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};
