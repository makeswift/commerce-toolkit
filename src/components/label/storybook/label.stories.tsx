import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field';
import { Input } from '@/components/input';
import { Label, type LabelProps } from '@/components/label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A label component for form controls, built on Radix UI Label primitive.

## CSS Variables

The Label component supports the following CSS variables for theming:

| Variable | Description | Default |
|----------|-------------|---------|
| \`--label-text\` | Text color (default/vertical) | \`var(--contrast-500)\` |
| \`--label-font-family\` | Font family | \`var(--font-family-body)\` |
| \`--label-horizontal-text\` | Text color in horizontal orientation | \`var(--foreground)\` |

## Orientation-Aware Styling

The default styling matches vertical orientation. When inside a \`Field.Item\` with \`data-label-orientation="horizontal"\`, the label adapts:

| Orientation | Text Size | Font Weight | Color |
|-------------|-----------|-------------|-------|
| Default / Vertical | \`text-xs\` | semibold | \`--label-text\` |
| Horizontal | \`text-sm\` | normal | \`--label-horizontal-text\` |

Use \`Field.Item\` with \`orientation="horizontal"\` to get horizontal label styling. This is used by RadioGroup and CheckboxGroup internally.

## Usage

\`\`\`tsx
import { Label } from '@/components/label';

<Label htmlFor="email">Email Address</Label>
<input id="email" type="email" />
\`\`\`

## With Field Components

The Label component is used internally by \`Field.Label\` and automatically responds to the parent \`Field.Item\`'s orientation:

\`\`\`tsx
import * as Field from '@/components/field';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/checkbox';

// Default vertical orientation
<Field.Item>
  <Field.Label htmlFor="name">Name</Field.Label>
  <Input id="name" />
</Field.Item>

// Horizontal orientation for inline controls
<Field.Item orientation="horizontal">
  <Checkbox id="terms" />
  <Field.Label htmlFor="terms">Accept terms</Field.Label>
</Field.Item>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'The ID of the form element this label is associated with',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="mx-auto max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  render: () => (
    <div className="grid gap-2">
      <Label htmlFor="default-input">Email Address</Label>
      <Input id="default-input" placeholder="you@example.com" type="email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default Label styling with `text-xs font-semibold` and muted color. This matches vertical orientation.',
      },
    },
  },
};

export const WithFieldItem: Story = {
  render: () => (
    <Field.Group>
      <Field.Set>
        <Field.Group>
          <Field.Item>
            <Field.Label htmlFor="field-input">Product Name</Field.Label>
            <Input id="field-input" placeholder="Natural Fiber Scrub Brush" />
          </Field.Item>
          <Field.Item>
            <Field.Label htmlFor="field-price">Price</Field.Label>
            <Input id="field-price" placeholder="$8.99" />
          </Field.Item>
        </Field.Group>
      </Field.Set>
    </Field.Group>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label used within Field components with default vertical orientation.',
      },
    },
  },
};

export const HorizontalOrientation: Story = {
  render: () => (
    <Field.Group>
      <Field.Set>
        <Field.Group>
          <Field.Item orientation="horizontal">
            <Checkbox id="newsletter" />
            <Field.Label htmlFor="newsletter">Subscribe to newsletter</Field.Label>
          </Field.Item>
          <Field.Item orientation="horizontal">
            <Checkbox id="terms" />
            <Field.Label htmlFor="terms">I agree to the terms and conditions</Field.Label>
          </Field.Item>
        </Field.Group>
      </Field.Set>
    </Field.Group>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When inside a `Field.Item` with `orientation="horizontal"`, the label uses `text-sm font-normal` with foreground color. Ideal for inline controls like checkboxes.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <div className="grid gap-2">
      <input className="peer sr-only" disabled id="disabled-input" type="text" />
      <Label htmlFor="disabled-input">Disabled Label</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When the associated input has `peer` class and is disabled, the label automatically reduces opacity and disables pointer events.',
      },
    },
  },
};
