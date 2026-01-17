import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  CardRadioGroup,
  type CardRadioGroupProps,
} from '@/components/card-radio-group/card-radio-group';
import * as CardRadioGroupPrimitive from '@/components/card-radio-group/primitives';

const productOptions = [
  {
    id: 'product-scrub-brush',
    value: 'scrub-brush',
    label: 'Natural Fiber Scrub Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=96&h=96&fit=crop',
      alt: 'Natural fiber scrub brush',
    },
  },
  {
    id: 'product-soap-dispenser',
    value: 'soap-dispenser',
    label: 'Minimal Ceramic Soap Dispenser',
    image: {
      src: 'https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=96&h=96&fit=crop',
      alt: 'Minimal ceramic soap dispenser',
    },
  },
  {
    id: 'product-hand-towel',
    value: 'hand-towel',
    label: 'Linen Hand Towel',
    image: {
      src: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=96&h=96&fit=crop',
      alt: 'Linen hand towel',
    },
  },
];

const shippingOptions = [
  { id: 'shipping-standard', value: 'standard', label: 'Standard Shipping (5-7 days)' },
  { id: 'shipping-express', value: 'express', label: 'Express Shipping (2-3 days)' },
  { id: 'shipping-overnight', value: 'overnight', label: 'Overnight Delivery' },
];

const meta: Meta<typeof CardRadioGroup> = {
  title: 'Components/CardRadioGroup',
  component: CardRadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component styled as a set of selectable cards. Perfect for product variant selection, shipping options, or payment methods. Built on Radix UI Radio Group primitives.

## CSS Variables

\`\`\`css
:root {
  --card-radio-group-font: var(--font-body);
  --card-radio-group-fill-unchecked: var(--form-fill-unchecked);
  --card-radio-group-fill-checked: var(--form-fill-checked);
  --card-radio-group-fill-hover: var(--form-fill-hover);
  --card-radio-group-text-unchecked: var(--form-text-unchecked);
  --card-radio-group-text-checked: var(--form-text-checked);
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
      description:
        'Array of options with `value`, `label`, `id`, optional `image`, and optional `disabled`',
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the option to select by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire radio group is disabled',
    },
    onOptionMouseEnter: {
      control: false,
      description: 'Callback fired when hovering over an option',
    },
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
};

export default meta;
type Story = StoryObj<CardRadioGroupProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Text-only card options for selections like shipping methods.',
      },
      source: {
        code: `
const shippingOptions = [
  { id: 'shipping-standard', value: 'standard', label: 'Standard Shipping (5-7 days)' },
  { id: 'shipping-express', value: 'express', label: 'Express Shipping (2-3 days)' },
  { id: 'shipping-overnight', value: 'overnight', label: 'Overnight Delivery' },
];

<CardRadioGroup
  options={shippingOptions}
  defaultValue="standard"
/>
        `,
      },
    },
  },
  render: () => <CardRadioGroup defaultValue="standard" options={shippingOptions} />,
};

export const WithImages: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Cards with thumbnail images for product variant selection.',
      },
      source: {
        code: `
const productOptions = [
  {
    id: 'product-scrub-brush',
    value: 'scrub-brush',
    label: 'Natural Fiber Scrub Brush',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=96&h=96&fit=crop',
      alt: 'Natural fiber scrub brush',
    },
  },
  // ... more options
];

<CardRadioGroup
  options={productOptions}
  defaultValue="scrub-brush"
/>
        `,
      },
    },
  },
  render: () => <CardRadioGroup defaultValue="scrub-brush" options={productOptions} />,
};

export const DisabledItems: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Individual options can be disabled (e.g., unavailable shipping methods).',
      },
      source: {
        code: `
const options = [
  { id: 'standard', value: 'standard', label: 'Standard Shipping' },
  { id: 'express', value: 'express', label: 'Express Shipping' },
  { id: 'overnight', value: 'overnight', label: 'Overnight (Unavailable)', disabled: true },
];

<CardRadioGroup
  options={options}
  defaultValue="standard"
/>
        `,
      },
    },
  },
  render: () => (
    <CardRadioGroup
      defaultValue="standard"
      options={[
        { id: 'standard', value: 'standard', label: 'Standard Shipping (5-7 days)' },
        { id: 'express', value: 'express', label: 'Express Shipping (2-3 days)' },
        { id: 'overnight', value: 'overnight', label: 'Overnight (Unavailable)', disabled: true },
      ]}
    />
  ),
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components for full control over the structure.

| Primitive                          | Description                              |
|------------------------------------|------------------------------------------|
| \`CardRadioGroupPrimitive.Root\`      | Radio group container.                   |
| \`CardRadioGroupPrimitive.Item\`      | Individual card option.                  |
| \`CardRadioGroupPrimitive.Thumbnail\` | Container for the image.                 |
| \`CardRadioGroupPrimitive.Image\`     | Image element with \`asChild\` support.  |
| \`CardRadioGroupPrimitive.Label\`     | Text label for the option.               |
        `,
      },
      source: {
        code: `
import * as CardRadioGroupPrimitive from '@/components/card-radio-group/primitives';

<CardRadioGroupPrimitive.Root defaultValue="scrub-brush">
  <CardRadioGroupPrimitive.Item value="scrub-brush">
    <CardRadioGroupPrimitive.Thumbnail>
      <CardRadioGroupPrimitive.Image
        src="https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=96&h=96&fit=crop"
        alt="Natural fiber scrub brush"
      />
    </CardRadioGroupPrimitive.Thumbnail>
    <CardRadioGroupPrimitive.Label>Natural Fiber Scrub Brush</CardRadioGroupPrimitive.Label>
  </CardRadioGroupPrimitive.Item>
  <CardRadioGroupPrimitive.Item value="soap-dispenser">
    <CardRadioGroupPrimitive.Thumbnail>
      <CardRadioGroupPrimitive.Image
        src="https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=96&h=96&fit=crop"
        alt="Minimal ceramic soap dispenser"
      />
    </CardRadioGroupPrimitive.Thumbnail>
    <CardRadioGroupPrimitive.Label>Minimal Ceramic Soap Dispenser</CardRadioGroupPrimitive.Label>
  </CardRadioGroupPrimitive.Item>
</CardRadioGroupPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <CardRadioGroupPrimitive.Root defaultValue="scrub-brush">
      <CardRadioGroupPrimitive.Item value="scrub-brush">
        <CardRadioGroupPrimitive.Thumbnail>
          <CardRadioGroupPrimitive.Image
            alt="Natural fiber scrub brush"
            src="https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=96&h=96&fit=crop"
          />
        </CardRadioGroupPrimitive.Thumbnail>
        <CardRadioGroupPrimitive.Label>Natural Fiber Scrub Brush</CardRadioGroupPrimitive.Label>
      </CardRadioGroupPrimitive.Item>
      <CardRadioGroupPrimitive.Item value="soap-dispenser">
        <CardRadioGroupPrimitive.Thumbnail>
          <CardRadioGroupPrimitive.Image
            alt="Minimal ceramic soap dispenser"
            src="https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=96&h=96&fit=crop"
          />
        </CardRadioGroupPrimitive.Thumbnail>
        <CardRadioGroupPrimitive.Label>
          Minimal Ceramic Soap Dispenser
        </CardRadioGroupPrimitive.Label>
      </CardRadioGroupPrimitive.Item>
    </CardRadioGroupPrimitive.Root>
  ),
};
