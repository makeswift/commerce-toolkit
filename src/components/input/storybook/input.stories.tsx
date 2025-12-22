import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from '@/components/icon';
import { Input, type InputProps } from '@/components/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    prepend: {
      control: 'text',
      description: 'Content to prepend (icon, symbol, etc.)',
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithPrependIcon: Story = {
  args: {
    prepend: <Icon name="search" size={20} />,
    placeholder: 'Search...',
  },
};

export const WithPrependSymbol: Story = {
  args: {
    prepend: '$',
    type: 'number',
    placeholder: '0.00',
  },
};

export const WithPrependAt: Story = {
  args: {
    prepend: '@',
    placeholder: 'username',
  },
};
