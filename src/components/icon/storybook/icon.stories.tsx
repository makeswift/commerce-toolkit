import type { Meta, StoryObj } from '@storybook/react-vite';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Icon } from '@/components/icon';

const iconNames = Object.keys(dynamicIconImports);

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
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
      table: { defaultValue: { summary: '24' } },
    },
    strokeWidth: {
      control: 'number',
      description: 'The stroke width of the icon',
      table: { defaultValue: { summary: '1.5' } },
    },
    color: {
      control: 'color',
      description: 'The color of the icon',
    },
  },
  args: {
    name: 'star',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic icon examples
export const Star: Story = {
  args: {
    name: 'star',
  },
};

export const Heart: Story = {
  args: {
    name: 'heart',
  },
};

export const ShoppingCart: Story = {
  args: {
    name: 'shopping-cart',
  },
};

export const User: Story = {
  args: {
    name: 'user',
  },
};

export const Search: Story = {
  args: {
    name: 'search',
  },
};

// Size examples
export const Small: Story = {
  args: {
    name: 'star',
    size: 16,
  },
};

export const Medium: Story = {
  args: {
    name: 'star',
    size: 24,
  },
};

export const Large: Story = {
  args: {
    name: 'star',
    size: 32,
  },
};

export const ExtraLarge: Story = {
  args: {
    name: 'star',
    size: 48,
  },
};

// Stroke width examples
export const ThinStroke: Story = {
  args: {
    name: 'heart',
    size: 32,
    strokeWidth: 1,
  },
};

export const RegularStroke: Story = {
  args: {
    name: 'heart',
    size: 32,
    strokeWidth: 1.5,
  },
};

export const BoldStroke: Story = {
  args: {
    name: 'heart',
    size: 32,
    strokeWidth: 2.5,
  },
};

// Color examples
export const ColoredIcon: Story = {
  args: {
    name: 'heart',
    size: 32,
    color: '#ef4444',
  },
};

export const CustomClassName: Story = {
  args: {
    name: 'star',
    size: 32,
    className: 'text-yellow-500',
  },
};

// Use case examples
export const CommonIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="home" size={24} />
        <span className="text-xs text-contrast-400">home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="user" size={24} />
        <span className="text-xs text-contrast-400">user</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="shopping-cart" size={24} />
        <span className="text-xs text-contrast-400">cart</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="heart" size={24} />
        <span className="text-xs text-contrast-400">heart</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="search" size={24} />
        <span className="text-xs text-contrast-400">search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="menu" size={24} />
        <span className="text-xs text-contrast-400">menu</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="x" size={24} />
        <span className="text-xs text-contrast-400">close</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="settings" size={24} />
        <span className="text-xs text-contrast-400">settings</span>
      </div>
    </div>
  ),
};

export const EcommerceIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="shopping-bag" size={28} />
        <span className="text-xs text-contrast-400">bag</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="shopping-cart" size={28} />
        <span className="text-xs text-contrast-400">cart</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="credit-card" size={28} />
        <span className="text-xs text-contrast-400">payment</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="package" size={28} />
        <span className="text-xs text-contrast-400">package</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="truck" size={28} />
        <span className="text-xs text-contrast-400">shipping</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="tag" size={28} />
        <span className="text-xs text-contrast-400">tag</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="gift" size={28} />
        <span className="text-xs text-contrast-400">gift</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="percent" size={28} />
        <span className="text-xs text-contrast-400">discount</span>
      </div>
    </div>
  ),
};

export const NavigationIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="arrow-left" size={24} />
        <span className="text-xs text-contrast-400">left</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="arrow-right" size={24} />
        <span className="text-xs text-contrast-400">right</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="arrow-up" size={24} />
        <span className="text-xs text-contrast-400">up</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="arrow-down" size={24} />
        <span className="text-xs text-contrast-400">down</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="chevron-left" size={24} />
        <span className="text-xs text-contrast-400">chevron-l</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="chevron-right" size={24} />
        <span className="text-xs text-contrast-400">chevron-r</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="chevron-up" size={24} />
        <span className="text-xs text-contrast-400">chevron-u</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="chevron-down" size={24} />
        <span className="text-xs text-contrast-400">chevron-d</span>
      </div>
    </div>
  ),
};

export const ActionIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="plus" size={24} />
        <span className="text-xs text-contrast-400">add</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="minus" size={24} />
        <span className="text-xs text-contrast-400">remove</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="trash-2" size={24} />
        <span className="text-xs text-contrast-400">delete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="edit" size={24} />
        <span className="text-xs text-contrast-400">edit</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="check" size={24} />
        <span className="text-xs text-contrast-400">check</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="x" size={24} />
        <span className="text-xs text-contrast-400">close</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="download" size={24} />
        <span className="text-xs text-contrast-400">download</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="upload" size={24} />
        <span className="text-xs text-contrast-400">upload</span>
      </div>
    </div>
  ),
};

export const SocialIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="facebook" size={28} />
        <span className="text-xs text-contrast-400">facebook</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="twitter" size={28} />
        <span className="text-xs text-contrast-400">twitter</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="instagram" size={28} />
        <span className="text-xs text-contrast-400">instagram</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="linkedin" size={28} />
        <span className="text-xs text-contrast-400">linkedin</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="github" size={28} />
        <span className="text-xs text-contrast-400">github</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="youtube" size={28} />
        <span className="text-xs text-contrast-400">youtube</span>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90">
      Add to Cart
      <Icon name="shopping-cart" size={18} strokeWidth={2} />
    </button>
  ),
};

export const IconButton: Story = {
  render: () => (
    <div className="flex gap-3">
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background hover:opacity-90">
        <Icon name="heart" size={20} />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background hover:opacity-90">
        <Icon name="share-2" size={20} />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background hover:opacity-90">
        <Icon name="bookmark" size={20} />
      </button>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Icon name="map-pin" size={20} />
        <span className="text-sm">123 Main St, New York, NY 10001</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="phone" size={20} />
        <span className="text-sm">+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="mail" size={20} />
        <span className="text-sm">contact@example.com</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="clock" size={20} />
        <span className="text-sm">Mon-Fri: 9AM-5PM</span>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={12} />
        <span className="text-xs text-contrast-400">12px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={16} />
        <span className="text-xs text-contrast-400">16px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={20} />
        <span className="text-xs text-contrast-400">20px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={24} />
        <span className="text-xs text-contrast-400">24px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={32} />
        <span className="text-xs text-contrast-400">32px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={40} />
        <span className="text-xs text-contrast-400">40px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="star" size={48} />
        <span className="text-xs text-contrast-400">48px</span>
      </div>
    </div>
  ),
};
