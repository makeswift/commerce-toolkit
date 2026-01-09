import type { Meta, StoryObj } from '@storybook/react-vite';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Icon, type IconProps } from '@/components/icon';
import * as IconPrimitive from '@/components/icon/primitives';

const iconNames = Object.keys(dynamicIconImports);

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A dynamic icon component powered by lucide-react. Supports all Lucide icons with configurable size and stroke width.

## CSS Variables

The Icon component inherits color from its parent. Use CSS color or Tailwind text color classes:

\`\`\`css
.icon-container {
  color: var(--foreground);
}
\`\`\`

## Usage

### High-Level Component

The \`Icon\` component dynamically loads icons by name:

\`\`\`tsx
import { Icon } from '@/components/icon';

<Icon name="shopping-cart" />
<Icon name="heart" size={32} />
<Icon name="star" size={20} strokeWidth={2} />
\`\`\`

### Available Icons

Browse all available icons at [lucide.dev/icons](https://lucide.dev/icons). Use the kebab-case name (e.g., \`shopping-cart\`, \`arrow-right\`).

### Skeleton Loading State

Use the Skeleton primitive for loading states:

\`\`\`tsx
import * as Icon from '@/components/icon';

<Icon.Skeleton size={24} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'The name of the icon from lucide-react',
    },
    size: {
      control: 'number',
      description: 'The size of the icon in pixels',
    },
    strokeWidth: {
      control: 'number',
      description: 'The stroke width of the icon',
    },
    color: {
      control: 'color',
      description: 'The color of the icon',
    },
  },
  args: {
    name: 'shopping-cart',
    size: 24,
    strokeWidth: 1.5,
  },
};

export default meta;
type Story = StoryObj<IconProps>;

// Default icon
export const Default: Story = {
  args: {
    name: 'shopping-cart',
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Icon name="star" size={16} />
      <Icon name="star" size={20} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
      <Icon name="star" size={48} />
    </div>
  ),
};

// Common e-commerce icons
export const CommonIcons: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Icon name="shopping-cart" />
      <Icon name="heart" />
      <Icon name="search" />
      <Icon name="user" />
      <Icon name="package" />
      <Icon name="truck" />
    </div>
  ),
};

// Skeleton loading state
export const Skeleton: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <IconPrimitive.Skeleton size={24} />
      <IconPrimitive.Skeleton size={32} />
      <IconPrimitive.Skeleton size={48} />
    </div>
  ),
};
