import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import { ButtonRadioGroup } from '@/components/button-radio-group/button-radio-group';
import * as ButtonRadioGroupPrimitive from '@/components/button-radio-group/primitives';

// Wrapper component for stories to avoid complex Radix union type issues
interface ButtonRadioGroupStoryProps {
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  children?: ReactNode;
}

function ButtonRadioGroupStory({ children, ...props }: ButtonRadioGroupStoryProps) {
  return <ButtonRadioGroupPrimitive.Root {...props}>{children}</ButtonRadioGroupPrimitive.Root>;
}

const sizeOptions = [
  { id: 'size-xs', value: 'xs', label: 'XS' },
  { id: 'size-s', value: 's', label: 'S' },
  { id: 'size-m', value: 'm', label: 'M' },
  { id: 'size-l', value: 'l', label: 'L' },
  { id: 'size-xl', value: 'xl', label: 'XL' },
];

const colorOptions = [
  { id: 'color-olive', value: 'olive', label: 'Olive' },
  { id: 'color-navy', value: 'navy', label: 'Navy' },
  { id: 'color-orange', value: 'orange', label: 'Orange' },
  { id: 'color-gray', value: 'gray', label: 'Gray' },
];

const tentCapacityOptions = [
  { id: 'tent-1p', value: '1p', label: '1 Person' },
  { id: 'tent-2p', value: '2p', label: '2 Person' },
  { id: 'tent-4p', value: '4p', label: '4 Person' },
  { id: 'tent-6p', value: '6p', label: '6 Person' },
];

const sleepingBagTempOptions = [
  { id: 'temp-summer', value: 'summer', label: '40°F+' },
  { id: 'temp-3season', value: '3season', label: '20°F+' },
  { id: 'temp-winter', value: 'winter', label: '0°F+' },
  { id: 'temp-extreme', value: 'extreme', label: '-20°F+' },
];

const backpackVolumeOptions = [
  { id: 'vol-daypack', value: 'daypack', label: '20L' },
  { id: 'vol-weekend', value: 'weekend', label: '40L' },
  { id: 'vol-multiday', value: 'multiday', label: '60L' },
  { id: 'vol-expedition', value: 'expedition', label: '80L' },
];

const quantityOptions = [
  { id: 'qty-1', value: '1', label: '1' },
  { id: 'qty-2', value: '2', label: '2' },
  { id: 'qty-3', value: '3', label: '3' },
  { id: 'qty-5', value: '5', label: '5' },
  { id: 'qty-10', value: '10', label: '10' },
];

const meta: Meta<typeof ButtonRadioGroupStory> = {
  title: 'Components/ButtonRadioGroup',
  component: ButtonRadioGroupStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component styled as a set of selectable buttons. Perfect for product options like size or color selection. Built on Radix UI Radio Group primitives.

## CSS Variables

The ButtonRadioGroup component supports extensive theming through CSS variables:

\`\`\`css
:root {
  --button-radio-group-focus: var(--primary);
  --button-radio-group-light-unchecked-border: var(--contrast-100);
  --button-radio-group-light-unchecked-background: var(--background);
  --button-radio-group-light-unchecked-text: var(--foreground);
  --button-radio-group-light-unchecked-border-hover: var(--contrast-200);
  --button-radio-group-light-unchecked-background-hover: var(--contrast-100);
  --button-radio-group-light-checked-background: var(--foreground);
  --button-radio-group-light-checked-text: var(--background);
  --button-radio-group-light-border-error: var(--error);
}
\`\`\`

## Usage

### High-Level Component

The \`ButtonRadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { ButtonRadioGroup } from '@/components/button-radio-group';

const sizeOptions = [
  { id: 'size-xs', value: 'xs', label: 'XS' },
  { id: 'size-s', value: 's', label: 'S' },
  { id: 'size-m', value: 'm', label: 'M' },
  { id: 'size-l', value: 'l', label: 'L' },
];

<ButtonRadioGroup
  options={sizeOptions}
  defaultValue="m"
/>
\`\`\`

### Primitives

For more control, use the primitive components directly:

\`\`\`tsx
import * as ButtonRadioGroup from '@/components/button-radio-group';

<ButtonRadioGroup.Root defaultValue="m">
  <ButtonRadioGroup.Item value="xs">XS</ButtonRadioGroup.Item>
  <ButtonRadioGroup.Item value="s">S</ButtonRadioGroup.Item>
  <ButtonRadioGroup.Item value="m">M</ButtonRadioGroup.Item>
  <ButtonRadioGroup.Item value="l">L</ButtonRadioGroup.Item>
</ButtonRadioGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the radio group',
    },
    loop: {
      control: 'boolean',
      description: 'Whether keyboard navigation should loop from last to first and vice versa',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="m">
      {sizeOptions.map((option) => (
        <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ButtonRadioGroupPrimitive.Item>
      ))}
    </ButtonRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default ButtonRadioGroup with size options. Only one item can be selected at a time.',
      },
    },
  },
};

export const HighLevelComponent: Story = {
  args: {},
  render: () => <ButtonRadioGroup defaultValue="m" options={sizeOptions} />,
  parameters: {
    docs: {
      description: {
        story:
          'Using the high-level `ButtonRadioGroup` component with an options array for a simpler API.',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {},
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="olive">
      {colorOptions.map((option) => (
        <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ButtonRadioGroupPrimitive.Item>
      ))}
    </ButtonRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `defaultValue` to set the initially selected item.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="m" disabled>
      {sizeOptions.map((option) => (
        <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ButtonRadioGroupPrimitive.Item>
      ))}
    </ButtonRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The entire radio group can be disabled, preventing any interaction.',
      },
    },
  },
};

export const DisabledItems: Story = {
  args: {},
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="m">
      <ButtonRadioGroupPrimitive.Item value="xs">XS</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="s">S</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item value="m">M</ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item disabled value="l">
        L (Out of Stock)
      </ButtonRadioGroupPrimitive.Item>
      <ButtonRadioGroupPrimitive.Item disabled value="xl">
        XL (Out of Stock)
      </ButtonRadioGroupPrimitive.Item>
    </ButtonRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Individual items can be disabled while others remain interactive. Useful for out-of-stock product options.',
      },
    },
  },
};

export const Controlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<string>('m');

    return (
      <div className="space-y-4">
        <ButtonRadioGroupPrimitive.Root onValueChange={setValue} value={value}>
          {sizeOptions.map((option) => (
            <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
              {option.label}
            </ButtonRadioGroupPrimitive.Item>
          ))}
        </ButtonRadioGroupPrimitive.Root>
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected size:</span>{' '}
          <span className="text-foreground">{value.toUpperCase()}</span>
        </div>
        <button
          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-primary/90"
          onClick={() => setValue('m')}
          type="button"
        >
          Reset to Medium
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `value` and `onValueChange` for controlled state management.',
      },
    },
  },
};

export const WithMouseEnterCallback: Story = {
  args: {},
  render: () => {
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    return (
      <div className="space-y-4">
        <ButtonRadioGroup
          defaultValue="olive"
          onOptionMouseEnter={setHoveredValue}
          options={colorOptions}
        />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Hovering:</span>{' '}
          <span className="text-foreground">{hoveredValue ?? 'None'}</span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `onOptionMouseEnter` callback fires when hovering over options. Useful for showing previews before selection.',
      },
    },
  },
};

export const ProductSizeSelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Select Size</label>
      <ButtonRadioGroupPrimitive.Root defaultValue="m">
        <ButtonRadioGroupPrimitive.Item value="xs">XS</ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item value="s">S</ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item value="m">M</ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item value="l">L</ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item value="xl">XL</ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item value="xxl">XXL</ButtonRadioGroupPrimitive.Item>
      </ButtonRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical example for product size selection in e-commerce applications.',
      },
    },
  },
};

export const ProductQuantitySelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Select Quantity</label>
      <ButtonRadioGroup defaultValue="1" options={quantityOptions} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ButtonRadioGroup works well for quantity selection with predefined options.',
      },
    },
  },
};

export const ColorSelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Select Color</label>
      <ButtonRadioGroupPrimitive.Root defaultValue="olive">
        {colorOptions.map((option) => (
          <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
            {option.label}
          </ButtonRadioGroupPrimitive.Item>
        ))}
      </ButtonRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Color selection for outdoor gear using the ButtonRadioGroup.',
      },
    },
  },
};

export const ShippingOptions: Story = {
  args: {},
  render: () => {
    const shippingOptions = [
      { id: 'shipping-standard', value: 'standard', label: 'Standard (5-7 days)' },
      { id: 'shipping-express', value: 'express', label: 'Express (2-3 days)' },
      { id: 'shipping-overnight', value: 'overnight', label: 'Overnight' },
    ];

    return (
      <div className="w-96 space-y-3">
        <label className="text-sm font-medium text-foreground">Shipping Method</label>
        <ButtonRadioGroup defaultValue="standard" options={shippingOptions} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'ButtonRadioGroup can be used for shipping options or any single-selection scenario.',
      },
    },
  },
};

export const CustomThemed: Story = {
  args: {},
  render: () => (
    <ButtonRadioGroupPrimitive.Root defaultValue="m">
      {sizeOptions.map((option) => (
        <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
          {option.label}
        </ButtonRadioGroupPrimitive.Item>
      ))}
    </ButtonRadioGroupPrimitive.Root>
  ),
  decorators: [
    (Story: ComponentType) => (
      <div className="flex items-center justify-center rounded-xl bg-contrast-100 p-8 [--button-radio-group-light-checked-background:hsl(var(--primary))] [--button-radio-group-light-unchecked-background-hover:hsl(var(--primary)/0.1)] [--button-radio-group-light-unchecked-border-hover:hsl(var(--primary))]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'The ButtonRadioGroup can be fully themed using CSS variables. This example uses the primary color for the selected state.',
      },
    },
  },
};

export const WrappingBehavior: Story = {
  args: {},
  render: () => {
    const manyOptions = [
      { id: 'many-opt-1', value: '1', label: 'Option 1' },
      { id: 'many-opt-2', value: '2', label: 'Option 2' },
      { id: 'many-opt-3', value: '3', label: 'Option 3' },
      { id: 'many-opt-4', value: '4', label: 'Option 4' },
      { id: 'many-opt-5', value: '5', label: 'Option 5' },
      { id: 'many-opt-6', value: '6', label: 'Option 6' },
      { id: 'many-opt-7', value: '7', label: 'Option 7' },
      { id: 'many-opt-8', value: '8', label: 'Option 8' },
    ];

    return (
      <div className="max-w-md space-y-3">
        <label className="text-sm font-medium text-foreground">Select Option</label>
        <ButtonRadioGroup defaultValue="1" options={manyOptions} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'The ButtonRadioGroup wraps naturally when there are many options or limited space.',
      },
    },
  },
};

export const TentCapacitySelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Tent Capacity</label>
      <ButtonRadioGroupPrimitive.Root defaultValue="2p">
        {tentCapacityOptions.map((option) => (
          <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
            {option.label}
          </ButtonRadioGroupPrimitive.Item>
        ))}
      </ButtonRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tent capacity selection for the Lightweight Backpacking Tent ($179.99). Perfect for choosing the right size for your camping group.',
      },
    },
  },
};

export const SleepingBagTempRating: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Temperature Rating</label>
      <ButtonRadioGroupPrimitive.Root defaultValue="3season">
        {sleepingBagTempOptions.map((option) => (
          <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
            {option.label}
          </ButtonRadioGroupPrimitive.Item>
        ))}
      </ButtonRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Temperature rating selection for the Compact Sleeping Bag ($119.99). Choose based on the coldest conditions you expect to encounter.',
      },
    },
  },
};

export const BackpackVolumeSelector: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Backpack Volume</label>
      <ButtonRadioGroupPrimitive.Root defaultValue="weekend">
        {backpackVolumeOptions.map((option) => (
          <ButtonRadioGroupPrimitive.Item key={option.value} value={option.value}>
            {option.label}
          </ButtonRadioGroupPrimitive.Item>
        ))}
      </ButtonRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Volume selection for the Waterproof Hiking Backpack ($129.99). Select based on trip duration and gear requirements.',
      },
    },
  },
};

export const CampingGearWithDisabledVariants: Story = {
  args: {},
  render: () => (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">Hammock Style</label>
      <ButtonRadioGroupPrimitive.Root defaultValue="standard">
        <ButtonRadioGroupPrimitive.Item value="standard">
          Standard ($69.99)
        </ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item value="deluxe">
          Deluxe ($74.99)
        </ButtonRadioGroupPrimitive.Item>
        <ButtonRadioGroupPrimitive.Item disabled value="ultralight">
          Ultralight (Sold Out)
        </ButtonRadioGroupPrimitive.Item>
      </ButtonRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Camping Hammock variant selection showing sold-out options as disabled. Useful for inventory-aware product pages.',
      },
    },
  },
};

export const CoolerSizeSelector: Story = {
  args: {},
  render: () => {
    const coolerSizeOptions = [
      { id: 'cooler-12', value: '12qt', label: '12 Qt' },
      { id: 'cooler-24', value: '24qt', label: '24 Qt' },
      { id: 'cooler-36', value: '36qt', label: '36 Qt' },
      { id: 'cooler-48', value: '48qt', label: '48 Qt' },
    ];

    return (
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Cooler Size</label>
        <ButtonRadioGroup defaultValue="24qt" options={coolerSizeOptions} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Size selection for the Insulated Soft Cooler ($79.99). Choose capacity based on trip length and group size.',
      },
    },
  },
};

export const WaterBottleCapacity: Story = {
  args: {},
  render: () => {
    const bottleOptions = [
      { id: 'bottle-16', value: '16oz', label: '16 oz' },
      { id: 'bottle-24', value: '24oz', label: '24 oz' },
      { id: 'bottle-32', value: '32oz', label: '32 oz' },
      { id: 'bottle-40', value: '40oz', label: '40 oz' },
    ];

    return (
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Bottle Capacity</label>
        <ButtonRadioGroup defaultValue="32oz" options={bottleOptions} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Capacity selection for the Insulated Reusable Water Bottle ($29.99). Perfect for hydration on the trail.',
      },
    },
  },
};
