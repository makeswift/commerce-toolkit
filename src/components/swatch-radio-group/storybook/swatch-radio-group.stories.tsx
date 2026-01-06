import type { Meta, StoryObj } from '@storybook/react-vite';
import { X } from 'lucide-react';
import type { ComponentType } from 'react';
import { useState } from 'react';

import * as SwatchRadioGroupPrimitive from '@/components/swatch-radio-group';
import { SwatchRadioGroup, type SwatchRadioGroupProps } from '@/components/swatch-radio-group';

const colorOptions = [
  { type: 'color' as const, value: 'black', label: 'Black', color: '#000000' },
  { type: 'color' as const, value: 'white', label: 'White', color: '#FFFFFF' },
  { type: 'color' as const, value: 'navy', label: 'Navy', color: '#1e3a5f' },
  { type: 'color' as const, value: 'forest', label: 'Forest Green', color: '#228b22' },
  { type: 'color' as const, value: 'burgundy', label: 'Burgundy', color: '#800020' },
];

const imageOptions = [
  {
    type: 'image' as const,
    value: 'natural-brush',
    label: 'Natural Fiber Scrub Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=80&h=80&fit=crop',
      alt: 'Natural fiber scrub brush',
    },
  },
  {
    type: 'image' as const,
    value: 'wood-brush',
    label: 'Wood Handle Cleaning Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=80&h=80&fit=crop',
      alt: 'Wood handle cleaning brush',
    },
  },
  {
    type: 'image' as const,
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

The SwatchRadioGroup component supports theming through CSS variables:

\`\`\`css
:root {
  --swatch-radio-group-focus: var(--brand);
  --swatch-radio-group-light-icon: var(--foreground);
  --swatch-radio-group-light-unchecked-border: transparent;
  --swatch-radio-group-light-unchecked-border-hover: var(--contrast-200);
  --swatch-radio-group-light-disabled-border: transparent;
  --swatch-radio-group-light-border-error: var(--error);
  --swatch-radio-group-light-checked-border: var(--foreground);
  --swatch-radio-group-light-option-border: color-mix(in oklab, var(--foreground) 10%, transparent);
}
\`\`\`

## Usage

### High-Level Component

The \`SwatchRadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { SwatchRadioGroup } from '@/components/swatch-radio-group';

const colorOptions = [
  { type: 'color', value: 'black', label: 'Black', color: '#000000' },
  { type: 'color', value: 'white', label: 'White', color: '#FFFFFF' },
  { type: 'color', value: 'navy', label: 'Navy', color: '#1e3a5f' },
];

<SwatchRadioGroup
  options={colorOptions}
  defaultValue="black"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as SwatchRadioGroup from '@/components/swatch-radio-group';
import { X } from 'lucide-react';

<SwatchRadioGroup.Root defaultValue="black">
  <SwatchRadioGroup.Item value="black" aria-label="Black">
    <SwatchRadioGroup.Color style={{ backgroundColor: '#000000' }} />
    <SwatchRadioGroup.Indicator>
      <X size={16} strokeWidth={1.5} />
    </SwatchRadioGroup.Indicator>
  </SwatchRadioGroup.Item>
  <SwatchRadioGroup.Item value="white" aria-label="White">
    <SwatchRadioGroup.Color style={{ backgroundColor: '#FFFFFF' }} />
    <SwatchRadioGroup.Indicator>
      <X size={16} strokeWidth={1.5} />
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
      description: 'Callback fired when hovering over an option',
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

export const Default: Story = {
  args: {
    options: colorOptions,
    defaultValue: 'black',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default SwatchRadioGroup with color swatches.',
      },
    },
  },
};

export const ColorSwatches: Story = {
  args: {
    options: colorOptions,
    defaultValue: 'navy',
  },
  parameters: {
    docs: {
      description: {
        story: 'Color swatches for selecting product colors or variants.',
      },
    },
  },
};

export const ImageSwatches: Story = {
  args: {
    options: imageOptions,
    defaultValue: 'natural-brush',
  },
  parameters: {
    docs: {
      description: {
        story: 'Image/thumbnail swatches for selecting product variants with visual previews.',
      },
    },
  },
};

export const DisabledItems: Story = {
  args: {
    options: [
      { type: 'color' as const, value: 'black', label: 'Black', color: '#000000' },
      { type: 'color' as const, value: 'white', label: 'White', color: '#FFFFFF' },
      {
        type: 'color' as const,
        value: 'navy',
        label: 'Navy (Out of Stock)',
        color: '#1e3a5f',
        disabled: true,
      },
      { type: 'color' as const, value: 'forest', label: 'Forest Green', color: '#228b22' },
      {
        type: 'color' as const,
        value: 'burgundy',
        label: 'Burgundy (Out of Stock)',
        color: '#800020',
        disabled: true,
      },
    ],
    defaultValue: 'black',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Individual swatches can be disabled to indicate unavailable options. Disabled swatches show an X indicator.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    options: colorOptions,
    defaultValue: 'black',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The entire swatch group can be disabled, preventing any interaction.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('navy');

    return (
      <div className="space-y-4">
        <SwatchRadioGroup onValueChange={setValue} options={colorOptions} value={value} />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected:</span>{' '}
          <span className="text-foreground">
            {colorOptions.find((o) => o.value === value)?.label}
          </span>
        </div>
        <button
          className="rounded-lg bg-brand px-3 py-2 text-sm font-medium text-background transition-colors hover:bg-brand/90"
          onClick={() => setValue('black')}
          type="button"
        >
          Reset to Black
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
  render: () => {
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);

    return (
      <div className="space-y-4">
        <SwatchRadioGroup
          defaultValue="black"
          onOptionMouseEnter={setHoveredValue}
          options={colorOptions}
        />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Previewing:</span>{' '}
          <span className="text-foreground">
            {hoveredValue != null && hoveredValue !== ''
              ? colorOptions.find((o) => o.value === hoveredValue)?.label
              : 'Hover over a swatch'}
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `onOptionMouseEnter` callback fires when hovering over swatches. Useful for previewing product images before selection.',
      },
    },
  },
};

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
  parameters: {
    docs: {
      description: {
        story:
          'Using the primitive components directly for full control over the swatch group structure.',
      },
    },
  },
};

export const ComposableWithImages: Story = {
  render: () => (
    <SwatchRadioGroupPrimitive.Root defaultValue="natural-brush">
      <SwatchRadioGroupPrimitive.Item aria-label="Natural Fiber Scrub Brush" value="natural-brush">
        <SwatchRadioGroupPrimitive.Thumbnail>
          <SwatchRadioGroupPrimitive.Image
            alt="Natural fiber scrub brush"
            height={40}
            src="https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=80&h=80&fit=crop"
            width={40}
          />
        </SwatchRadioGroupPrimitive.Thumbnail>
        <SwatchRadioGroupPrimitive.Indicator>
          <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
      <SwatchRadioGroupPrimitive.Item aria-label="Wood Handle Cleaning Brush" value="wood-brush">
        <SwatchRadioGroupPrimitive.Thumbnail>
          <SwatchRadioGroupPrimitive.Image
            alt="Wood handle cleaning brush"
            height={40}
            src="https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=80&h=80&fit=crop"
            width={40}
          />
        </SwatchRadioGroupPrimitive.Thumbnail>
        <SwatchRadioGroupPrimitive.Indicator>
          <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
      <SwatchRadioGroupPrimitive.Item aria-label="Bamboo Countertop Brush" value="bamboo-brush">
        <SwatchRadioGroupPrimitive.Thumbnail>
          <SwatchRadioGroupPrimitive.Image
            alt="Bamboo countertop brush"
            height={40}
            src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=80&h=80&fit=crop"
            width={40}
          />
        </SwatchRadioGroupPrimitive.Thumbnail>
        <SwatchRadioGroupPrimitive.Indicator>
          <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
        </SwatchRadioGroupPrimitive.Indicator>
      </SwatchRadioGroupPrimitive.Item>
    </SwatchRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Using the primitive components with image thumbnails for product variant selection.',
      },
    },
  },
};
