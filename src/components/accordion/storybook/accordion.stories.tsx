import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Accordion, type AccordionProps } from '@/components/accordion';
import * as AccordionPrimitive from '@/components/accordion/primitives';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A collapsible content component that allows users to toggle sections of content open and closed.

## CSS Variables

\`\`\`css
:root {
  --accordion-focus: var(--brand);
  --acordion-light-offset: var(--background);
  --accordion-light-title-text: var(--contrast-400);
  --accordion-light-title-text-hover: var(--foreground);
  --accordion-light-title-icon: var(--contrast-500);
  --accordion-light-title-icon-hover: var(--foreground);
  --accordion-light-content-text: var(--foreground);
  --acordion-dark-offset: var(--foreground);
  --accordion-dark-title-text: var(--contrast-200);
  --accordion-dark-title-text-hover: var(--background);
  --accordion-dark-title-icon: var(--contrast-200);
  --accordion-dark-title-icon-hover: var(--background);
  --accordion-dark-content-text: var(--background);
  --accordion-title-font-family: var(--font-family-body);
  --accordion-content-font-family: var(--font-family-body);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at a time',
    },
    collapsible: {
      control: 'boolean',
      description: 'When type is "single", allows closing the open item by clicking it again',
    },
    defaultValue: {
      control: 'text',
      description: 'The value of the item(s) to expand by default',
    },
    items: {
      control: false,
      description: 'Array of accordion items with title, content, and value',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="mx-auto max-w-2xl bg-background px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<AccordionProps>;

const faqItems: AccordionProps['items'] = [
  {
    value: 'shipping',
    title: 'Shipping Information',
    content: (
      <p>
        We offer free standard shipping on orders over $50. Standard shipping takes 5-7 business
        days, while expedited shipping arrives in 2-3 business days for an additional fee. All
        orders include tracking information sent via email.
      </p>
    ),
  },
  {
    value: 'returns',
    title: 'Returns & Exchanges',
    content: (
      <p>
        Items can be returned within 30 days of purchase for a full refund. Products must be unused
        and in original packaging. Exchanges are processed within 5-7 business days of receiving
        your return.
      </p>
    ),
  },
  {
    value: 'materials',
    title: 'Materials & Care',
    content: (
      <p>
        Our products are crafted from sustainable, eco-friendly materials including bamboo, recycled
        glass, and organic cotton. Hand wash with mild soap and water. Avoid harsh chemicals to
        extend product life.
      </p>
    ),
  },
];

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'shipping',
    items: faqItems,
  },
};

export const MultipleOpen: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['shipping', 'materials'],
    items: faqItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `type` is set to `"multiple"`, users can expand multiple accordion items at once.',
      },
    },
  },
};

export const NonCollapsible: Story = {
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'shipping',
    items: faqItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `collapsible` is `false` and `type` is `"single"`, one item must always remain open.',
      },
    },
  },
};

/**
 * The Accordion can be built using composable primitives for full customization.
 * This example shows the component anatomy using the primitive components.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <AccordionPrimitive.Root collapsible defaultValue="item-1" type="single">
      <AccordionPrimitive.Item value="item-1">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger>
            <AccordionPrimitive.Title>Natural Fiber Scrub Brush</AccordionPrimitive.Title>
            <AccordionPrimitive.Chevron />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>
          <AccordionPrimitive.ContentArea>
            <p>
              Hand-crafted from sustainable plant fibers, this scrub brush is perfect for dishes,
              vegetables, and general cleaning. The ergonomic wooden handle provides a comfortable
              grip while the natural bristles are tough on grime but gentle on surfaces.
            </p>
          </AccordionPrimitive.ContentArea>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item value="item-2">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger>
            <AccordionPrimitive.Title>Minimal Ceramic Soap Dispenser</AccordionPrimitive.Title>
            <AccordionPrimitive.Chevron />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>
          <AccordionPrimitive.ContentArea>
            <p>
              Elevate your bathroom or kitchen with this sleek ceramic soap dispenser. Features a
              smooth pump mechanism and a weighted base for stability. Refillable design helps
              reduce plastic waste.
            </p>
          </AccordionPrimitive.ContentArea>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item value="item-3">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger>
            <AccordionPrimitive.Title>Linen Hand Towel</AccordionPrimitive.Title>
            <AccordionPrimitive.Chevron />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>
          <AccordionPrimitive.ContentArea>
            <p>
              Made from 100% European linen, these hand towels are highly absorbent and quick
              drying. They become softer with each wash while maintaining their durability. A
              timeless addition to any home.
            </p>
          </AccordionPrimitive.ContentArea>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom accordion layouts:

\`\`\`tsx
import * as AccordionPrimitive from '@/components/accordion/primitives';

<AccordionPrimitive.Root type="single" collapsible>
  <AccordionPrimitive.Item value="unique-value">
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger>
        <AccordionPrimitive.Title>Title</AccordionPrimitive.Title>
        <AccordionPrimitive.Chevron />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content>
      <AccordionPrimitive.ContentArea>
        Content goes here
      </AccordionPrimitive.ContentArea>
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
</AccordionPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
