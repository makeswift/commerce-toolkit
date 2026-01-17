import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion, type AccordionProps } from '@/components/accordion';
import * as AccordionPrimitive from '@/components/accordion/primitives';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A collapsible content component for organizing and revealing information in expandable sections.

## CSS Variables

\`\`\`css
:root {
  --accordion-text-primary: var(--text-primary);
  --accordion-text-secondary: var(--text-secondary);
  --accordion-fill-icon: var(--contrast-400);
  --accordion-font-title: var(--font-heading);
  --accordion-font-body: var(--font-body);
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
      description: 'Whether one or multiple items can be expanded at once',
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
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<AccordionProps>;

const sampleItems = [
  {
    title: 'What materials are used?',
    content:
      'Our products are crafted from sustainable materials including bamboo, natural fibers, and recycled glass. Each item is designed with environmental impact in mind.',
    value: 'materials',
  },
  {
    title: 'How do I care for these products?',
    content:
      'Most items can be cleaned with mild soap and water. Wooden items should be dried thoroughly after cleaning. Glass containers are dishwasher safe.',
    value: 'care',
  },
  {
    title: 'What is your return policy?',
    content:
      'We offer a 30-day return policy on all unused items in original packaging. Contact our support team to initiate a return.',
    value: 'returns',
  },
];

export const Single: Story = {
  args: {
    type: 'single',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Only one item can be expanded at a time. Expanding a new item closes the previous one.',
      },
    },
  },
};

export const SingleCollapsible: Story = {
  args: {
    type: 'single',
    collapsible: true,
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'With `collapsible` enabled, clicking an expanded item will close it.',
      },
    },
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple items can be expanded simultaneously.',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'care',
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `defaultValue` to specify which item(s) should be expanded on initial render.',
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
    <AccordionPrimitive.Root collapsible type="single">
      <AccordionPrimitive.Item value="shipping">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger>
            <AccordionPrimitive.Title>Shipping Information</AccordionPrimitive.Title>
            <AccordionPrimitive.Chevron />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>
          <AccordionPrimitive.Body>
            Free shipping on orders over $50. Standard delivery takes 3-5 business days.
          </AccordionPrimitive.Body>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item value="warranty">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger>
            <AccordionPrimitive.Title>Warranty Details</AccordionPrimitive.Title>
            <AccordionPrimitive.Chevron />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>
          <AccordionPrimitive.Body>
            All products come with a 1-year warranty against manufacturing defects.
          </AccordionPrimitive.Body>
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
      <AccordionPrimitive.Body>Content goes here</AccordionPrimitive.Body>
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
</AccordionPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
