import type { Meta, StoryObj } from '@storybook/react-vite';

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

\`\`\`css
:root {
  --label-text: var(--form-text-primary);
  --label-font: var(--font-body);
}
\`\`\`

## Orientation-Aware Styling

The Label component adapts its styling based on the parent \`Field.Item\`'s orientation via the \`data-label-orientation\` attribute:

| Orientation          | Text Size | Font Weight |
|----------------------|-----------|-------------|
| Vertical (default)   | text-xs   | semibold    |
| Horizontal           | text-sm   | normal      |

Use \`Field.Item\` with \`orientation="horizontal"\` to get horizontal label styling. This is commonly used for checkboxes and radio buttons.
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
  decorators: [(Story) => <div className="mx-auto max-w-md">{Story()}</div>],
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A label paired with an input inside a `Field.Item` container.',
      },
      source: {
        code: `
<Field.Item>
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</Field.Item>
        `,
      },
    },
  },
  render: () => (
    <Field.Item>
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" placeholder="you@example.com" type="email" />
    </Field.Item>
  ),
};

export const HorizontalOrientation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When placed inside a `Field.Item` with `orientation="horizontal"`, the label switches to a lighter weight and larger size, suitable for inline controls like checkboxes.',
      },
      source: {
        code: `
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
        `,
      },
    },
  },
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
