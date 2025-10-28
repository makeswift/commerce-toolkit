import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from 'lucide-react';

import { Button } from '@/components/button';
import { SidePanel } from '@/components/side-panel';

const meta = {
  title: 'Components/SidePanel',
  component: SidePanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed at the top of the side panel',
    },
    content: {
      description: 'Content to display in the side panel',
    },
    trigger: {
      description: 'Custom trigger element (defaults to Filters button)',
    },
  },
} satisfies Meta<typeof SidePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Filters',
    content: <p className="text-lg text-contrast-400">This is the side panel content.</p>,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Shopping Cart',
    content: <p className="text-lg text-contrast-400">Your cart is empty.</p>,
  },
};

export const CustomTrigger: Story = {
  args: {
    title: 'Menu',
    content: (
      <div className="space-y-4">
        <a className="block text-lg hover:text-contrast-500" href="#">
          Home
        </a>
        <a className="block text-lg hover:text-contrast-500" href="#">
          Shop
        </a>
        <a className="block text-lg hover:text-contrast-500" href="#">
          About
        </a>
        <a className="block text-lg hover:text-contrast-500" href="#">
          Contact
        </a>
      </div>
    ),
    trigger: (
      <Button size="medium" variant="secondary">
        <Menu size={20} />
        Menu
      </Button>
    ),
  },
};
