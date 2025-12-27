import type { Meta, StoryObj } from '@storybook/react-vite';
import { X } from 'lucide-react';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { SwatchRadioGroup, type SwatchRadioGroupProps } from '@/components/swatch-radio-group';
import * as SwatchRadioGroupPrimitive from '@/components/swatch-radio-group/primitives';

const colorOptions: SwatchRadioGroupProps['options'] = [
  { type: 'color', value: 'black', label: 'Black', color: '#000000' },
  { type: 'color', value: 'white', label: 'White', color: '#FFFFFF' },
  { type: 'color', value: 'navy', label: 'Navy', color: '#1e3a5f' },
  { type: 'color', value: 'forest', label: 'Forest Green', color: '#228b22' },
];

const imageOptions: SwatchRadioGroupProps['options'] = [
  {
    type: 'image',
    value: 'natural-brush',
    label: 'Natural Fiber Scrub Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=80&h=80&fit=crop',
      alt: 'Natural fiber scrub brush',
    },
  },
  {
    type: 'image',
    value: 'wood-brush',
    label: 'Wood Handle Cleaning Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=80&h=80&fit=crop',
      alt: 'Wood handle cleaning brush',
    },
  },
  {
    type: 'image',
    value: 'bamboo-brush',
    label: 'Bamboo Countertop Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=80&h=80&fit=crop',
      alt: 'Bamboo countertop brush',
    },
  },
];

const meta: Meta<typeof SwatchRadioGroup> = {
  title: 'Components/SwatchRadioGroup',
  component: SwatchRadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A swatch radio group component for selecting a single option from color or image swatches. Built on Radix UI Radio Group primitives.

## CSS Variables

\`\`\`css
:root {
  --swatch-radio-group-focus: var(--brand);
  --swatch-radio-group-light-icon: var(--foreground);
  --swatch-radio-group-light-unchecked-border: transparent;
  --swatch-radio-group-light-unchecked-border-hover: var(--contrast-200);
  --swatch-radio-group-light-checked-border: var(--foreground);
  --swatch-radio-group-light-disabled-border: transparent;
  --swatch-radio-group-light-border-error: var(--error);
  --swatch-radio-group-light-option-border: color-mix(in oklab, var(--foreground) 10%, transparent);
}
\`\`\`

## Usage

### High-Level Component

The \`SwatchRadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { SwatchRadioGroup } from '@/components/swatch-radio-group';

// Color swatches
const colorOptions = [
  { type: 'color', value: 'black', label: 'Black', color: '#000000' },
  { type: 'color', value: 'white', label: 'White', color: '#FFFFFF' },
];

<SwatchRadioGroup options={colorOptions} defaultValue="black" />

// Image swatches
const imageOptions = [
  { type: 'image', value: 'variant-1', label: 'Variant 1', image: { src: '...', alt: '...' } },
];

<SwatchRadioGroup options={imageOptions} defaultValue="variant-1" />
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as SwatchRadioGroup from '@/components/swatch-radio-group';
import { X } from 'lucide-react';

<SwatchRadioGroup.Root defaultValue="black">
  <SwatchRadioGroup.Item value="black" aria-label="Black">
    <SwatchRadioGroup.Color color="#000000" />
    <SwatchRadioGroup.Indicator>
      <SwatchRadioGroup.IndicatorIcon>
        <X size={16} />
      </SwatchRadioGroup.IndicatorIcon>
    </SwatchRadioGroup.Indicator>
  </SwatchRadioGroup.Item>
</SwatchRadioGroup.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of swatch options (color or image type)',
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the swatch to select by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire swatch group is disabled',
    },
    onOptionMouseEnter: {
      control: false,
      description: 'Callback fired when hovering over an option (useful for image previews)',
    },
    indicatorIcon: {
      control: false,
      description: 'Custom indicator icon configuration with asChild support',
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
type Story = StoryObj<SwatchRadioGroupProps>;

// Color swatches (default)
export const Default: Story = {
  args: {
    options: colorOptions,
    defaultValue: 'black',
  },
};

// Image swatches
export const ImageSwatches: Story = {
  args: {
    options: imageOptions,
    defaultValue: 'natural-brush',
  },
};

// Disabled items (out of stock)
export const DisabledItems: Story = {
  args: {
    options: [
      { type: 'color', value: 'black', label: 'Black', color: '#000000' },
      { type: 'color', value: 'white', label: 'White', color: '#FFFFFF' },
      {
        type: 'color',
        value: 'navy',
        label: 'Navy (Out of Stock)',
        color: '#1e3a5f',
        disabled: true,
      },
      { type: 'color', value: 'forest', label: 'Forest Green', color: '#228b22' },
    ],
    defaultValue: 'black',
  },
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('navy');

    return <SwatchRadioGroup onValueChange={setValue} options={colorOptions} value={value} />;
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <SwatchRadioGroupPrimitive.Root defaultValue="black">
      <SwatchRadioGroupPrimitive.Item aria-label="Black" value="black">
        <SwatchRadioGroupPrimitive.Color color="#000000" />
        <SwatchRadioGroupPrimitive.Indicator>
          <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
      <SwatchRadioGroupPrimitive.Item aria-label="White" value="white">
        <SwatchRadioGroupPrimitive.Color color="#FFFFFF" />
        <SwatchRadioGroupPrimitive.Indicator>
          <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
      <SwatchRadioGroupPrimitive.Item aria-label="Navy" value="navy">
        <SwatchRadioGroupPrimitive.Color color="#1e3a5f" />
        <SwatchRadioGroupPrimitive.Indicator>
          <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
    </SwatchRadioGroupPrimitive.Root>
  ),
};
