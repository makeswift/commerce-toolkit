import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from 'lucide-react';
import { useState } from 'react';

import { Chip } from '@/components/chip';

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
  },
};

export const WithFormValues: Story = {
  args: {
    name: 'filter',
    value: 'blue',
    children: 'Blue',
  },
};

export const CustomRemoveLabel: Story = {
  args: {
    children: 'Premium',
    removeLabel: 'Remove Premium filter',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Chip {...args}>
      <Tag className="h-3.5 w-3.5" />
      <span>Tagged</span>
    </Chip>
  ),
};

export const LongText: Story = {
  args: {
    children: 'Very Long Chip Label That Might Wrap',
  },
};

export const ChipGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip name="color" value="red">
        Red
      </Chip>
      <Chip name="color" value="blue">
        Blue
      </Chip>
      <Chip name="color" value="green">
        Green
      </Chip>
      <Chip name="size" value="small">
        Small
      </Chip>
      <Chip name="size" value="medium">
        Medium
      </Chip>
      <Chip name="size" value="large">
        Large
      </Chip>
    </div>
  ),
};

export const InteractiveFilters: Story = {
  render: () => {
    const [filters, setFilters] = useState([
      { id: '1', name: 'category', value: 'electronics', label: 'Electronics' },
      { id: '2', name: 'price', value: 'under-50', label: 'Under $50' },
      { id: '3', name: 'brand', value: 'acme', label: 'ACME' },
      { id: '4', name: 'rating', value: '4-stars', label: '4+ Stars' },
    ]);

    const removeFilter = (id: string) => {
      setFilters(filters.filter((f) => f.id !== id));
    };

    return (
      <div className="w-96">
        <div className="mb-4 text-sm font-semibold">Active Filters:</div>
        <div className="flex flex-wrap gap-2">
          {filters.length > 0 ? (
            filters.map((filter) => (
              <Chip
                key={filter.id}
                name={filter.name}
                onClick={() => removeFilter(filter.id)}
                removeLabel={`Remove ${filter.label} filter`}
                value={filter.value}
              >
                {filter.label}
              </Chip>
            ))
          ) : (
            <p className="text-sm text-contrast-400">No filters applied</p>
          )}
        </div>
        {filters.length > 0 && (
          <button
            className="mt-4 text-sm font-semibold text-contrast-500 hover:text-foreground"
            onClick={() => setFilters([])}
          >
            Clear all filters
          </button>
        )}
      </div>
    );
  },
};

export const ProductTags: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { id: '1', label: 'New Arrival' },
      { id: '2', label: 'Best Seller' },
      { id: '3', label: 'Limited Edition' },
      { id: '4', label: 'Eco-Friendly' },
    ]);

    const removeTag = (id: string) => {
      setTags(tags.filter((t) => t.id !== id));
    };

    return (
      <div className="w-96">
        <div className="mb-4 text-sm font-semibold">Product Tags:</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip
              key={tag.id}
              name="tag"
              onClick={() => removeTag(tag.id)}
              removeLabel={`Remove ${tag.label} tag`}
              value={tag.id}
            >
              {tag.label}
            </Chip>
          ))}
        </div>
      </div>
    );
  },
};

export const SearchTerms: Story = {
  render: () => {
    const [searches, setSearches] = useState([
      'blue jacket',
      'winter coat',
      'waterproof',
      'size large',
    ]);

    const removeSearch = (index: number) => {
      setSearches(searches.filter((_, i) => i !== index));
    };

    return (
      <div className="w-96">
        <div className="mb-4 text-sm font-semibold">Recent Searches:</div>
        <div className="flex flex-wrap gap-2">
          {searches.map((search, index) => (
            <Chip
              key={index}
              name="search"
              onClick={() => removeSearch(index)}
              removeLabel={`Remove ${search} search`}
              value={search}
            >
              {search}
            </Chip>
          ))}
        </div>
      </div>
    );
  },
};

export const SelectedItems: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', name: 'Wireless Headphones', price: 79.99 },
      { id: '2', name: 'Smart Watch', price: 199.99 },
      { id: '3', name: 'Laptop Stand', price: 49.99 },
    ]);

    const removeItem = (id: string) => {
      setItems(items.filter((item) => item.id !== id));
    };

    return (
      <div className="w-96">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-semibold">Selected Items ({items.length})</div>
          {items.length > 0 && (
            <button
              className="text-sm font-semibold text-contrast-500 hover:text-foreground"
              onClick={() => setItems([])}
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {items.length > 0 ? (
            items.map((item) => (
              <Chip
                key={item.id}
                name="item"
                onClick={() => removeItem(item.id)}
                removeLabel={`Remove ${item.name}`}
                value={item.id}
              >
                {item.name} - ${item.price}
              </Chip>
            ))
          ) : (
            <p className="text-sm text-contrast-400">No items selected</p>
          )}
        </div>
      </div>
    );
  },
};

export const WithIconsGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip name="category" value="electronics">
        <Tag className="h-3.5 w-3.5" />
        <span>Electronics</span>
      </Chip>
      <Chip name="category" value="clothing">
        <Tag className="h-3.5 w-3.5" />
        <span>Clothing</span>
      </Chip>
      <Chip name="category" value="home">
        <Tag className="h-3.5 w-3.5" />
        <span>Home & Garden</span>
      </Chip>
      <Chip name="category" value="sports">
        <Tag className="h-3.5 w-3.5" />
        <span>Sports</span>
      </Chip>
    </div>
  ),
};

export const CompactLayout: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => {
    const [tags, setTags] = useState([
      'React',
      'TypeScript',
      'Tailwind',
      'Storybook',
      'Vite',
      'ESLint',
      'Prettier',
      'Git',
    ]);

    const removeTag = (index: number) => {
      setTags(tags.filter((_, i) => i !== index));
    };

    return (
      <div className="w-96 rounded-lg border border-contrast-200 bg-background p-4">
        <div className="mb-3 text-sm font-semibold">Technologies ({tags.length})</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Chip
              key={index}
              name="tech"
              onClick={() => removeTag(index)}
              removeLabel={`Remove ${tag}`}
              value={tag}
            >
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    );
  },
};
