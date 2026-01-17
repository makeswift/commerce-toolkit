import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field/primitives';
import { Input } from '@/components/input';

const meta: Meta = {
  title: 'Components/Field',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A composable form field system that provides structure and styling for labels, descriptions, hints, errors, and field grouping. Use these primitives to create accessible, well-structured forms with consistent styling.

## CSS Variables

\`\`\`css
:root {
  --field-text-primary: var(--text-secondary);
  --field-text-secondary: var(--text-secondary);
  --field-font-legend: var(--font-heading);
  --field-font-description: var(--font-body);
  --field-font-hint: var(--font-body);
  --field-text-error: var(--error);
}
\`\`\`

## Primitives

| Primitive           | Description                                                     |
|---------------------|-----------------------------------------------------------------|
| \`Field.Set\`       | A \`<fieldset>\` wrapper for grouping related fields.           |
| \`Field.Legend\`    | A \`<legend>\` element for describing a fieldset.               |
| \`Field.Description\`| A paragraph for providing additional context.                   |
| \`Field.Group\`     | Container for organizing multiple field items with spacing.     |
| \`Field.Item\`      | Wrapper for individual fields (\`orientation\`: vertical/horizontal). |
| \`Field.Label\`     | A \`<label>\` element for field labels.                         |
| \`Field.Hint\`      | Small text for providing helpful hints.                         |
| \`Field.Error\`     | Error message with optional icon (\`icon.asChild\`, \`icon.children\`). |
| \`Field.ErrorIcon\` | The default error icon, customizable via the icon prop.         |
| \`Field.Separator\` | Horizontal rule for visually separating sections.               |
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <div className="mx-auto max-w-md">{Story()}</div>],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A simple field with label, input, and hint text.',
      },
      source: {
        code: `
<Field.Item>
  <Field.Label htmlFor="email">Email</Field.Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <Field.Hint>We'll never share your email with anyone else.</Field.Hint>
</Field.Item>
        `,
      },
    },
  },
  render: () => (
    <Field.Item>
      <Field.Label htmlFor="email">Email</Field.Label>
      <Input id="email" placeholder="you@example.com" type="email" />
      <Field.Hint>We'll never share your email with anyone else.</Field.Hint>
    </Field.Item>
  ),
};

export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A field showing an error state with an error message and icon.',
      },
      source: {
        code: `
<Field.Item>
  <Field.Label htmlFor="username">Username</Field.Label>
  <Input id="username" type="text" defaultValue="jo" />
  <Field.Error>Username must be at least 3 characters long.</Field.Error>
</Field.Item>
        `,
      },
    },
  },
  render: () => (
    <Field.Item>
      <Field.Label htmlFor="username">Username</Field.Label>
      <Input defaultValue="jo" id="username" type="text" />
      <Field.Error>Username must be at least 3 characters long.</Field.Error>
    </Field.Item>
  ),
};

export const HorizontalOrientation: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `orientation="horizontal"` for inline layouts, commonly used for checkboxes and switches.',
      },
      source: {
        code: `
<Field.Item orientation="horizontal">
  <Checkbox id="newsletter" />
  <Field.Label htmlFor="newsletter">Subscribe to newsletter</Field.Label>
</Field.Item>
        `,
      },
    },
  },
  render: () => (
    <Field.Item orientation="horizontal">
      <Checkbox id="newsletter" />
      <Field.Label htmlFor="newsletter">Subscribe to newsletter</Field.Label>
    </Field.Item>
  ),
};

export const FieldSet: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `Field.Set` with `Field.Legend` and `Field.Description` to group related fields together.',
      },
      source: {
        code: `
<Field.Set>
  <Field.Legend>Shipping Address</Field.Legend>
  <Field.Description>Please provide your shipping address for delivery.</Field.Description>
  <Field.Group>
    <Field.Item>
      <Field.Label htmlFor="address">Street Address</Field.Label>
      <Input id="address" type="text" placeholder="123 Main St" />
    </Field.Item>
    <Field.Item>
      <Field.Label htmlFor="city">City</Field.Label>
      <Input id="city" type="text" placeholder="San Francisco" />
    </Field.Item>
  </Field.Group>
</Field.Set>
        `,
      },
    },
  },
  render: () => (
    <Field.Set>
      <Field.Legend>Shipping Address</Field.Legend>
      <Field.Description>Please provide your shipping address for delivery.</Field.Description>
      <Field.Group>
        <Field.Item>
          <Field.Label htmlFor="address">Street Address</Field.Label>
          <Input id="address" placeholder="123 Main St" type="text" />
        </Field.Item>
        <Field.Item>
          <Field.Label htmlFor="city">City</Field.Label>
          <Input id="city" placeholder="San Francisco" type="text" />
        </Field.Item>
      </Field.Group>
    </Field.Set>
  ),
};

export const WithSeparator: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `Field.Separator` to visually divide sections within a fieldset.',
      },
      source: {
        code: `
<Field.Set>
  <Field.Legend>Account Settings</Field.Legend>
  <Field.Group>
    <Field.Item>
      <Field.Label htmlFor="display-name">Display Name</Field.Label>
      <Input id="display-name" type="text" placeholder="John Doe" />
    </Field.Item>
  </Field.Group>
  <Field.Separator />
  <Field.Group>
    <Field.Item orientation="horizontal">
      <Checkbox id="email-notifications" defaultChecked />
      <Field.Label htmlFor="email-notifications">Email Notifications</Field.Label>
    </Field.Item>
    <Field.Item orientation="horizontal">
      <Checkbox id="marketing" />
      <Field.Label htmlFor="marketing">Marketing Emails</Field.Label>
    </Field.Item>
  </Field.Group>
</Field.Set>
        `,
      },
    },
  },
  render: () => (
    <Field.Set>
      <Field.Legend>Account Settings</Field.Legend>
      <Field.Group>
        <Field.Item>
          <Field.Label htmlFor="display-name">Display Name</Field.Label>
          <Input id="display-name" placeholder="John Doe" type="text" />
        </Field.Item>
      </Field.Group>
      <Field.Separator />
      <Field.Group>
        <Field.Item orientation="horizontal">
          <Checkbox defaultChecked id="email-notifications" />
          <Field.Label htmlFor="email-notifications">Email Notifications</Field.Label>
        </Field.Item>
        <Field.Item orientation="horizontal">
          <Checkbox id="marketing" />
          <Field.Label htmlFor="marketing">Marketing Emails</Field.Label>
        </Field.Item>
      </Field.Group>
    </Field.Set>
  ),
};
