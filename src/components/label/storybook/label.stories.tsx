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
A label component for form controls, built on Radix UI Label primitive. Supports orientation-aware styling when used with Field components.

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
import { Input } from '@/components/input';

<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
\`\`\`

## Orientation-Aware Styling

The Label component adapts its styling based on the parent \`Field.Item\`'s orientation:

| Orientation | Text Size | Font Weight | Color |
|-------------|-----------|-------------|-------|
| Vertical (default) | \`text-xs\` | semibold | \`--label-text\` |
| Horizontal | \`text-sm\` | normal | \`--label-horizontal-text\` |

## With Field Components

Use \`Field.Label\` inside \`Field.Item\` for automatic orientation handling:

\`\`\`tsx
import * as Field from '@/components/field';
import { Input } from '@/components/input';
import { Checkbox } from '@/components/checkbox';

// Vertical orientation (default)
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

// Default label with input
export const Default: Story = {
  render: () => (
    <Field.Item>
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" placeholder="you@example.com" type="email" />
    </Field.Item>
  ),
};

// Horizontal orientation (for checkboxes)
export const HorizontalOrientation: Story = {
  render: () => (
    <Field.Group>
      <Field.Item orientation="horizontal">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </Field.Item>
      <Field.Item orientation="horizontal">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to the terms and conditions</Label>
      </Field.Item>
    </Field.Group>
  ),
};
