import type { Meta, StoryObj } from '@storybook/react-vite';

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
  --swatch-radio-group-icon: var(--form-fill-icon);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: false,
      description: 'Array of swatch options (`color` or `image` type)',
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
      description: 'Callback fired when hovering over an option',
    },
    indicatorIcon: {
      control: false,
      description: 'Custom indicator icon configuration with `asChild` support',
    },
  },
};

export default meta;
type Story = StoryObj<SwatchRadioGroupProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Color swatches for selecting from a set of color options.',
      },
    },
  },
  args: {
    options: colorOptions,
    defaultValue: 'black',
  },
};

export const ImageSwatches: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Image swatches for selecting from product variants or patterns.',
      },
    },
  },
  args: {
    options: imageOptions,
    defaultValue: 'natural-brush',
  },
};

export const DisabledItems: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Individual options can be disabled (e.g., out of stock) using the `disabled` property.',
      },
    },
  },
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                                | Description                                  |
|------------------------------------------|----------------------------------------------|
| \`SwatchRadioGroupPrimitive.Root\`          | Radio group container.                       |
| \`SwatchRadioGroupPrimitive.Item\`          | Individual swatch item.                      |
| \`SwatchRadioGroupPrimitive.Color\`         | Color swatch display.                        |
| \`SwatchRadioGroupPrimitive.Thumbnail\`     | Container for image swatches.                |
| \`SwatchRadioGroupPrimitive.Image\`         | Image swatch with \`asChild\` support.       |
| \`SwatchRadioGroupPrimitive.Indicator\`     | Indicator shown when selected.               |
| \`SwatchRadioGroupPrimitive.IndicatorIcon\` | X icon with \`asChild\` support.             |
        `,
      },
      source: {
        code: `
import * as SwatchRadioGroupPrimitive from '@/components/swatch-radio-group/primitives';

<SwatchRadioGroupPrimitive.Root defaultValue="black">
  <SwatchRadioGroupPrimitive.Item value="black" aria-label="Black">
    <SwatchRadioGroupPrimitive.Color color="#000000" />
    <SwatchRadioGroupPrimitive.Indicator>
      <SwatchRadioGroupPrimitive.IndicatorIcon />
    </SwatchRadioGroupPrimitive.Indicator>
  </SwatchRadioGroupPrimitive.Item>
  <SwatchRadioGroupPrimitive.Item value="white" aria-label="White">
    <SwatchRadioGroupPrimitive.Color color="#FFFFFF" />
    <SwatchRadioGroupPrimitive.Indicator>
      <SwatchRadioGroupPrimitive.IndicatorIcon />
    </SwatchRadioGroupPrimitive.Indicator>
  </SwatchRadioGroupPrimitive.Item>
  <SwatchRadioGroupPrimitive.Item value="navy" aria-label="Navy">
    <SwatchRadioGroupPrimitive.Color color="#1e3a5f" />
    <SwatchRadioGroupPrimitive.Indicator>
      <SwatchRadioGroupPrimitive.IndicatorIcon />
    </SwatchRadioGroupPrimitive.Indicator>
  </SwatchRadioGroupPrimitive.Item>
</SwatchRadioGroupPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <SwatchRadioGroupPrimitive.Root defaultValue="black">
      <SwatchRadioGroupPrimitive.Item aria-label="Black" value="black">
        <SwatchRadioGroupPrimitive.Color color="#000000" />
        <SwatchRadioGroupPrimitive.Indicator>
          <SwatchRadioGroupPrimitive.IndicatorIcon />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
      <SwatchRadioGroupPrimitive.Item aria-label="White" value="white">
        <SwatchRadioGroupPrimitive.Color color="#FFFFFF" />
        <SwatchRadioGroupPrimitive.Indicator>
          <SwatchRadioGroupPrimitive.IndicatorIcon />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
      <SwatchRadioGroupPrimitive.Item aria-label="Navy" value="navy">
        <SwatchRadioGroupPrimitive.Color color="#1e3a5f" />
        <SwatchRadioGroupPrimitive.Indicator>
          <SwatchRadioGroupPrimitive.IndicatorIcon />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
    </SwatchRadioGroupPrimitive.Root>
  ),
};
