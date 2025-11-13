import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from 'lucide-react';
import { useState } from 'react';

import { Chip } from '@/components/chip';

const handleClick = () => {
  // no-op
};

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Input name for form integration',
    },
    value: {
      control: 'text',
      description: 'Input value for form integration',
    },
    children: {
      control: 'text',
      description: 'Chip content',
    },
    removeLabel: {
      control: 'text',
      description: 'Accessible label for remove button',
    },
    onClick: {
      action: 'clicked',
      description: 'Handler for remove button click',
    },
  },
  args: {
    children: 'Chip',
    removeLabel: 'Remove',
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Chip',
    onClick: handleClick,
  },
};

export const WithFormValues: Story = {
  args: {
    children: 'Blue',
    name: 'filter',
    onClick: handleClick,
    value: 'blue',
  },
};

export const CustomRemoveLabel: Story = {
  args: {
    children: 'Premium',
    onClick: handleClick,
    removeLabel: 'Remove Premium filter',
  },
};

export const WithIcon: Story = {
  args: {
    onClick: handleClick,
  },
  render: (args) => (
    <Chip {...args}>
      <Tag className="h-3.5 w-3.5" />
      <span>Tagged</span>
    </Chip>
  ),
};

export const Interactive: Story = {
  args: {
    onClick: handleClick,
  },
  render: () => {
    const [filters, setFilters] = useState(['Electronics', 'Under $50', 'ACME']);

    const removeFilter = (index: number) => {
      setFilters(filters.filter((_, i) => i !== index));
    };

    return (
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <Chip key={index} onClick={() => removeFilter(index)} removeLabel={`Remove ${filter}`}>
            {filter}
          </Chip>
        ))}
      </div>
    );
  },
};
