import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType, ReactNode } from 'react';
import { useState } from 'react';

import { CardRadioGroup } from '@/components/card-radio-group/card-radio-group';
import * as CardRadioGroupPrimitive from '@/components/card-radio-group/primitives';

// Wrapper component for stories to avoid complex Radix union type issues
interface CardRadioGroupStoryProps {
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  loop?: boolean;
  children?: ReactNode;
}

function CardRadioGroupStory({ children, ...props }: CardRadioGroupStoryProps) {
  return <CardRadioGroupPrimitive.Root {...props}>{children}</CardRadioGroupPrimitive.Root>;
}

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
  {
    id: 'product-spray-bottle',
    value: 'spray-bottle',
    label: 'Amber Glass Spray Bottle',
    image: {
      src: 'https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?w=96&h=96&fit=crop',
      alt: 'Amber glass spray bottle',
    },
  },
];

const shippingOptions = [
  { id: 'shipping-standard', value: 'standard', label: 'Standard Shipping (5-7 days)' },
  { id: 'shipping-express', value: 'express', label: 'Express Shipping (2-3 days)' },
  { id: 'shipping-overnight', value: 'overnight', label: 'Overnight Delivery' },
];

const paymentOptions = [
  { id: 'payment-credit-card', value: 'credit-card', label: 'Credit Card' },
  { id: 'payment-paypal', value: 'paypal', label: 'PayPal' },
  { id: 'payment-apple-pay', value: 'apple-pay', label: 'Apple Pay' },
  { id: 'payment-google-pay', value: 'google-pay', label: 'Google Pay' },
];

const meta: Meta<typeof CardRadioGroupStory> = {
  title: 'Components/CardRadioGroup',
  component: CardRadioGroupStory,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A radio group component styled as a set of selectable cards. Perfect for product variant selection with visual swatches, shipping options, or payment methods. Built on Radix UI Radio Group primitives.

## CSS Variables

The CardRadioGroup component supports extensive theming through CSS variables:

\`\`\`css
:root {
  --card-radio-group-focus: var(--brand);
  --card-radio-group-light-unchecked-border: var(--contrast-100);
  --card-radio-group-light-unchecked-border-hover: var(--contrast-200);
  --card-radio-group-light-unchecked-background: var(--background);
  --card-radio-group-light-unchecked-text: var(--foreground);
  --card-radio-group-light-unchecked-background-hover: var(--contrast-100);
  --card-radio-group-light-checked-background: var(--foreground);
  --card-radio-group-light-checked-text: var(--background);
  --card-radio-group-light-border-error: var(--error);
}
\`\`\`

## Usage

### High-Level Component

The \`CardRadioGroup\` component provides a simple API with an \`options\` array:

\`\`\`tsx
import { CardRadioGroup } from '@/components/card-radio-group';

const productOptions = [
  { 
    id: 'backpack',
    value: 'backpack', 
    label: 'Hiking Backpack',
    image: { src: '/products/backpack.jpg', alt: 'Hiking backpack' }
  },
  { 
    id: 'tent',
    value: 'tent', 
    label: 'Camping Tent',
    image: { src: '/products/tent.jpg', alt: 'Camping tent' }
  },
];

<CardRadioGroup
  options={productOptions}
  defaultValue="backpack"
/>
\`\`\`

### Primitives

For more control, use the primitive components directly:

\`\`\`tsx
import * as CardRadioGroup from '@/components/card-radio-group';

<CardRadioGroup.Root defaultValue="standard">
  <CardRadioGroup.Item value="standard">
    <CardRadioGroup.Label>Standard Shipping</CardRadioGroup.Label>
  </CardRadioGroup.Item>
  <CardRadioGroup.Item value="express">
    <CardRadioGroup.Thumbnail>
      <CardRadioGroup.Image src="/icons/express.png" alt="Express" />
    </CardRadioGroup.Thumbnail>
    <CardRadioGroup.Label>Express Shipping</CardRadioGroup.Label>
  </CardRadioGroup.Item>
</CardRadioGroup.Root>
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
      <div className="flex w-80 items-center justify-center p-8">
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
    <CardRadioGroupPrimitive.Root className="w-full" defaultValue="standard">
      {shippingOptions.map((option) => (
        <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
          <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
        </CardRadioGroupPrimitive.Item>
      ))}
    </CardRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default CardRadioGroup with text-only options. Only one item can be selected at a time.',
      },
    },
  },
};

export const WithImages: Story = {
  args: {},
  render: () => (
    <CardRadioGroupPrimitive.Root className="w-full" defaultValue="scrub-brush">
      {productOptions.map((option) => (
        <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
          <CardRadioGroupPrimitive.Thumbnail>
            <CardRadioGroupPrimitive.Image alt={option.image.alt} src={option.image.src} />
          </CardRadioGroupPrimitive.Thumbnail>
          <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
        </CardRadioGroupPrimitive.Item>
      ))}
    </CardRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'CardRadioGroup with thumbnail images, perfect for product variant selection with visual previews.',
      },
    },
  },
};

export const HighLevelComponent: Story = {
  args: {},
  render: () => (
    <CardRadioGroup className="w-full" defaultValue="scrub-brush" options={productOptions} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Using the high-level `CardRadioGroup` component with an options array for a simpler API.',
      },
    },
  },
};

export const HighLevelWithoutImages: Story = {
  args: {},
  render: () => (
    <CardRadioGroup className="w-full" defaultValue="standard" options={shippingOptions} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'High-level component without images, useful for text-based options.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <CardRadioGroupPrimitive.Root className="w-full" defaultValue="standard" disabled>
      {shippingOptions.map((option) => (
        <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
          <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
        </CardRadioGroupPrimitive.Item>
      ))}
    </CardRadioGroupPrimitive.Root>
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
    <CardRadioGroupPrimitive.Root className="w-full" defaultValue="standard">
      <CardRadioGroupPrimitive.Item value="standard">
        <CardRadioGroupPrimitive.Label>Standard Shipping (5-7 days)</CardRadioGroupPrimitive.Label>
      </CardRadioGroupPrimitive.Item>
      <CardRadioGroupPrimitive.Item value="express">
        <CardRadioGroupPrimitive.Label>Express Shipping (2-3 days)</CardRadioGroupPrimitive.Label>
      </CardRadioGroupPrimitive.Item>
      <CardRadioGroupPrimitive.Item disabled value="overnight">
        <CardRadioGroupPrimitive.Label>
          Overnight Delivery (Not Available)
        </CardRadioGroupPrimitive.Label>
      </CardRadioGroupPrimitive.Item>
    </CardRadioGroupPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Individual items can be disabled while others remain interactive. Useful for unavailable shipping methods or out-of-stock variants.',
      },
    },
  },
};

export const Controlled: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<string>('credit-card');

    return (
      <div className="w-full space-y-4">
        <CardRadioGroupPrimitive.Root className="w-full" onValueChange={setValue} value={value}>
          {paymentOptions.map((option) => (
            <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
              <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
            </CardRadioGroupPrimitive.Item>
          ))}
        </CardRadioGroupPrimitive.Root>
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Selected payment:</span>{' '}
          <span className="text-foreground">
            {paymentOptions.find((o) => o.value === value)?.label}
          </span>
        </div>
        <button
          className="bg-brand hover:bg-brand/90 rounded-lg px-3 py-2 text-sm font-medium text-background transition-colors"
          onClick={() => setValue('credit-card')}
          type="button"
        >
          Reset to Credit Card
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
      <div className="w-full space-y-4">
        <CardRadioGroup
          className="w-full"
          defaultValue="scrub-brush"
          onOptionMouseEnter={setHoveredValue}
          options={productOptions}
        />
        <div className="rounded-lg bg-contrast-100 p-3 text-sm">
          <span className="font-medium text-contrast-500">Previewing:</span>{' '}
          <span className="text-foreground">
            {hoveredValue != null && hoveredValue !== ''
              ? productOptions.find((o) => o.value === hoveredValue)?.label
              : 'Hover over an option'}
          </span>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `onOptionMouseEnter` callback fires when hovering over options. Useful for showing product previews before selection.',
      },
    },
  },
};

export const ProductVariantSelector: Story = {
  args: {},
  render: () => (
    <div className="w-full space-y-3">
      <label className="text-sm font-medium text-foreground">Select Product</label>
      <CardRadioGroupPrimitive.Root className="w-full" defaultValue="scrub-brush">
        {productOptions.map((option) => (
          <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
            <CardRadioGroupPrimitive.Thumbnail>
              <CardRadioGroupPrimitive.Image alt={option.image.alt} src={option.image.src} />
            </CardRadioGroupPrimitive.Thumbnail>
            <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
          </CardRadioGroupPrimitive.Item>
        ))}
      </CardRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical example for product variant selection in e-commerce applications.',
      },
    },
  },
};

export const ShippingMethodSelector: Story = {
  args: {},
  render: () => (
    <div className="w-full space-y-3">
      <label className="text-sm font-medium text-foreground">Shipping Method</label>
      <CardRadioGroupPrimitive.Root className="w-full" defaultValue="standard">
        {shippingOptions.map((option) => (
          <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
            <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
          </CardRadioGroupPrimitive.Item>
        ))}
      </CardRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CardRadioGroup works well for shipping method selection during checkout.',
      },
    },
  },
};

export const PaymentMethodSelector: Story = {
  args: {},
  render: () => (
    <div className="w-full space-y-3">
      <label className="text-sm font-medium text-foreground">Payment Method</label>
      <CardRadioGroupPrimitive.Root className="w-full" defaultValue="credit-card">
        {paymentOptions.map((option) => (
          <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
            <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
          </CardRadioGroupPrimitive.Item>
        ))}
      </CardRadioGroupPrimitive.Root>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment method selection during checkout using CardRadioGroup.',
      },
    },
  },
};

export const CustomThemed: Story = {
  args: {},
  render: () => (
    <CardRadioGroupPrimitive.Root className="w-full" defaultValue="standard">
      {shippingOptions.map((option) => (
        <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
          <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
        </CardRadioGroupPrimitive.Item>
      ))}
    </CardRadioGroupPrimitive.Root>
  ),
  decorators: [
    (Story: ComponentType) => (
      <div className="flex w-80 items-center justify-center rounded-xl bg-contrast-100 p-8 [--card-radio-group-light-checked-background:var(--brand)] [--card-radio-group-light-unchecked-background-hover:color-mix(in_oklch,var(--brand)_10%,transparent)] [--card-radio-group-light-unchecked-border-hover:var(--brand)]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          'The CardRadioGroup can be fully themed using CSS variables. This example uses the primary color for the selected state.',
      },
    },
  },
};

export const SubscriptionPlans: Story = {
  args: {},
  render: () => {
    const planOptions = [
      { id: 'plan-monthly', value: 'monthly', label: 'Monthly — $9.99/month' },
      { id: 'plan-quarterly', value: 'quarterly', label: 'Quarterly — $24.99/quarter (Save 17%)' },
      { id: 'plan-annual', value: 'annual', label: 'Annual — $79.99/year (Save 33%)' },
    ];

    return (
      <div className="w-full space-y-3">
        <label className="text-sm font-medium text-foreground">Select Plan</label>
        <CardRadioGroup className="w-full" defaultValue="annual" options={planOptions} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Subscription plan selection showcasing pricing tiers with savings information.',
      },
    },
  },
};

export const DeliveryTimeSlots: Story = {
  args: {},
  render: () => {
    const timeSlotOptions = [
      { value: 'morning', label: 'Morning (8:00 AM - 12:00 PM)' },
      { value: 'afternoon', label: 'Afternoon (12:00 PM - 5:00 PM)' },
      { value: 'evening', label: 'Evening (5:00 PM - 9:00 PM)' },
    ];

    return (
      <div className="w-full space-y-3">
        <label className="text-sm font-medium text-foreground">Delivery Time Slot</label>
        <CardRadioGroupPrimitive.Root className="w-full" defaultValue="afternoon">
          {timeSlotOptions.map((option) => (
            <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
              <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
            </CardRadioGroupPrimitive.Item>
          ))}
        </CardRadioGroupPrimitive.Root>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Delivery time slot selection for scheduling deliveries.',
      },
    },
  },
};

export const CleaningKitBundles: Story = {
  args: {},
  render: () => {
    const bundleOptions = [
      {
        value: 'starter',
        label: 'Eco Cleaning Starter Kit',
        image: {
          src: 'https://images.unsplash.com/photo-1685052392996-5c042ab4c170?w=96&h=96&fit=crop',
          alt: 'Eco cleaning starter kit',
        },
      },
      {
        value: 'essentials',
        label: 'Natural Cleaning Essentials',
        image: {
          src: 'https://images.unsplash.com/photo-1551239330-2db25ffa5e90?w=96&h=96&fit=crop',
          alt: 'Natural cleaning essentials set',
        },
      },
      {
        value: 'complete',
        label: 'Complete Home Set',
        image: {
          src: 'https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=96&h=96&fit=crop',
          alt: 'Reusable cleaning cloths',
        },
      },
    ];

    return (
      <div className="w-full space-y-3">
        <label className="text-sm font-medium text-foreground">Choose Your Bundle</label>
        <CardRadioGroupPrimitive.Root className="w-full" defaultValue="starter">
          {bundleOptions.map((option) => (
            <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
              <CardRadioGroupPrimitive.Thumbnail>
                <CardRadioGroupPrimitive.Image alt={option.image.alt} src={option.image.src} />
              </CardRadioGroupPrimitive.Thumbnail>
              <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
            </CardRadioGroupPrimitive.Item>
          ))}
        </CardRadioGroupPrimitive.Root>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Product bundle selection for eco-friendly cleaning supplies, demonstrating image thumbnails with product categories.',
      },
    },
  },
};

export const KitchenAccessories: Story = {
  args: {},
  render: () => {
    const accessoryOptions = [
      {
        value: 'dish-sponge',
        label: 'Eco Dish Sponge Set',
        image: {
          src: 'https://images.unsplash.com/photo-1685052391251-e09402a6b8e8?w=96&h=96&fit=crop',
          alt: 'Eco dish sponge set',
        },
      },
      {
        value: 'cleaning-brush',
        label: 'Wood Handle Cleaning Brush',
        image: {
          src: 'https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=96&h=96&fit=crop',
          alt: 'Wood handle cleaning brush',
        },
      },
      {
        value: 'loofah',
        label: 'Natural Loofah Sponge',
        image: {
          src: 'https://images.unsplash.com/photo-1638609269267-f0128098a809?w=96&h=96&fit=crop',
          alt: 'Natural loofah sponge',
        },
      },
      {
        value: 'scrubber',
        label: 'Plant-Based Scrubber Pad',
        image: {
          src: 'https://images.unsplash.com/photo-1685052386750-902a081b99da?w=96&h=96&fit=crop',
          alt: 'Plant-based scrubber pad',
        },
      },
    ];

    return (
      <div className="w-full space-y-3">
        <label className="text-sm font-medium text-foreground">Add an Accessory</label>
        <CardRadioGroupPrimitive.Root className="w-full" defaultValue="dish-sponge">
          {accessoryOptions.map((option) => (
            <CardRadioGroupPrimitive.Item key={option.value} value={option.value}>
              <CardRadioGroupPrimitive.Thumbnail>
                <CardRadioGroupPrimitive.Image alt={option.image.alt} src={option.image.src} />
              </CardRadioGroupPrimitive.Thumbnail>
              <CardRadioGroupPrimitive.Label>{option.label}</CardRadioGroupPrimitive.Label>
            </CardRadioGroupPrimitive.Item>
          ))}
        </CardRadioGroupPrimitive.Root>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Kitchen accessory selection showcasing various eco-friendly cleaning tools with image previews.',
      },
    },
  },
};
