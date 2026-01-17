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
A dynamic icon component powered by lucide-react. Supports all [Lucide icons](https://lucide.dev/icons) with configurable size and stroke width.

## Styling

The Icon inherits color from its parent via \`currentColor\`. Use Tailwind text color classes or CSS color property on a parent element.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name from lucide-react (kebab-case)',
    },
    size: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    strokeWidth: {
      control: 'number',
      description: 'Stroke width of the icon lines',
    },
    color: {
      control: 'color',
      description: 'Icon color (inherits from parent by default)',
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

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A dynamically loaded icon by name.',
      },
    },
  },
  args: {
    name: 'shopping-cart',
  },
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icons scale based on the `size` prop.',
      },
      source: {
        code: `
<Icon name="star" size={16} />
<Icon name="star" size={24} />
<Icon name="star" size={32} />
<Icon name="star" size={48} />
        `,
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-6">
      <Icon name="star" size={16} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
      <Icon name="star" size={48} />
    </div>
  ),
};

export const Skeleton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the Skeleton primitive for loading states.',
      },
      source: {
        code: `
<IconPrimitive.Skeleton size={24} />
<IconPrimitive.Skeleton size={32} />
<IconPrimitive.Skeleton size={48} />
        `,
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-6">
      <IconPrimitive.Skeleton size={24} />
      <IconPrimitive.Skeleton size={32} />
      <IconPrimitive.Skeleton size={48} />
    </div>
  ),
};
