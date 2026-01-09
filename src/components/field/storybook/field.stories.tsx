import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field/primitives';
import { Input } from '@/components/input';

const meta: Meta = {
  title: 'Components/Field',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A flexible form field component system that provides structure and styling for labels, descriptions, hints, errors, and field grouping. Use these primitives to create accessible, well-structured forms with consistent styling.

## CSS Variables

\`\`\`css
:root {
  --field-legend: var(--foreground);
  --field-legend-font-family: var(--font-family-heading);
  --field-description: var(--contrast-500);
  --field-description-font-family: var(--font-family-body);
  --field-hint: var(--contrast-500);
  --field-hint-font-family: var(--font-family-body);
  --field-error: var(--error);
  --field-separator: var(--contrast-200);
}
\`\`\`

## API

### Field.Set
A \`<fieldset>\` wrapper for grouping related fields.

### Field.Legend
A \`<legend>\` element for describing a fieldset.

### Field.Description
A paragraph element for providing additional context about a field or fieldset.

### Field.Group
A container for organizing multiple field items with consistent spacing.

### Field.Item
A wrapper for individual form fields, supporting both vertical and horizontal orientations.

**Props:**
- \`orientation\`: "vertical" (default) | "horizontal" - Controls the layout direction

### Field.Label
A \`<label>\` element for field labels.

### Field.Hint
A small text element for providing helpful hints about a field.

### Field.Error
An error message component with an optional icon.

**Props:**
- \`icon.asChild\`: boolean - Use a custom icon component
- \`icon.children\`: ReactNode - Custom icon element

### Field.ErrorIcon
The default error icon, customizable via the icon prop.

### Field.Separator
A horizontal rule for visually separating field sections.
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: ComponentType) => (
      <div className="mx-auto max-w-2xl bg-background px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj;

/**
 * A simple single field example showing label, input, and hint text.
 */
export const Basic: Story = {
  render: () => (
    <Field.Item>
      <Field.Label htmlFor="email">Email</Field.Label>
      <Input id="email" placeholder="you@example.com" type="email" />
      <Field.Hint>We'll never share your email with anyone else.</Field.Hint>
    </Field.Item>
  ),
};

/**
 * A field showing an error state with an error message and icon.
 */
export const WithError: Story = {
  render: () => (
    <Field.Item>
      <Field.Label htmlFor="username">Username</Field.Label>
      <Input defaultValue="john" id="username" placeholder="johndoe" type="text" />
      <Field.Error>Username must be at least 3 characters long.</Field.Error>
    </Field.Item>
  ),
};

/**
 * A field with a horizontal layout, commonly used for checkboxes and switches.
 */
export const HorizontalOrientation: Story = {
  render: () => (
    <Field.Item orientation="horizontal">
      <Checkbox id="newsletter" />
      <div className="flex flex-col gap-1">
        <Field.Label htmlFor="newsletter">Subscribe to newsletter</Field.Label>
        <Field.Hint>Receive weekly updates about new products and offers.</Field.Hint>
      </div>
    </Field.Item>
  ),
};

/**
 * Multiple related fields grouped together with a legend and description.
 */
export const FieldSet: Story = {
  render: () => (
    <Field.Set>
      <Field.Legend>Shipping Address</Field.Legend>
      <Field.Description>Please provide your shipping address for delivery.</Field.Description>
      <Field.Group>
        <Field.Item>
          <Field.Label htmlFor="address">Street Address</Field.Label>
          <Input id="address" placeholder="123 Main St" type="text" />
        </Field.Item>
        <div className="grid grid-cols-2 gap-4">
          <Field.Item>
            <Field.Label htmlFor="city">City</Field.Label>
            <Input id="city" placeholder="San Francisco" type="text" />
          </Field.Item>
          <Field.Item>
            <Field.Label htmlFor="zip">ZIP Code</Field.Label>
            <Input id="zip" placeholder="94102" type="text" />
          </Field.Item>
        </div>
      </Field.Group>
    </Field.Set>
  ),
};

/**
 * A fieldset with multiple groups separated by visual dividers.
 */
export const WithSeparators: Story = {
  render: () => (
    <Field.Set>
      <Field.Legend>Account Settings</Field.Legend>
      <Field.Description>
        Manage your account preferences and notification settings.
      </Field.Description>
      <Field.Group>
        <Field.Item>
          <Field.Label htmlFor="display-name">Display Name</Field.Label>
          <Input id="display-name" placeholder="John Doe" type="text" />
          <Field.Hint>This is how your name will appear to others.</Field.Hint>
        </Field.Item>
        <Field.Item>
          <Field.Label htmlFor="bio">Bio</Field.Label>
          <Input id="bio" placeholder="Tell us about yourself" type="text" />
        </Field.Item>
      </Field.Group>
      <Field.Separator />
      <Field.Group>
        <Field.Item orientation="horizontal">
          <Checkbox defaultChecked id="email-notifications" />
          <div className="flex flex-col gap-1">
            <Field.Label htmlFor="email-notifications">Email Notifications</Field.Label>
            <Field.Hint>Receive email updates about your account activity.</Field.Hint>
          </div>
        </Field.Item>
        <Field.Item orientation="horizontal">
          <Checkbox id="marketing" />
          <div className="flex flex-col gap-1">
            <Field.Label htmlFor="marketing">Marketing Emails</Field.Label>
            <Field.Hint>Get the latest news and special offers.</Field.Hint>
          </div>
        </Field.Item>
      </Field.Group>
    </Field.Set>
  ),
};

/**
 * A nested field structure showing how groups can be organized within each other.
 */
export const NestedGroups: Story = {
  render: () => (
    <Field.Set>
      <Field.Legend>Payment Information</Field.Legend>
      <Field.Description>Enter your payment details to complete your purchase.</Field.Description>
      <Field.Group>
        <Field.Item>
          <Field.Label htmlFor="card-name">Cardholder Name</Field.Label>
          <Input id="card-name" placeholder="John Doe" type="text" />
        </Field.Item>
        <Field.Item>
          <Field.Label htmlFor="card-number">Card Number</Field.Label>
          <Input id="card-number" placeholder="1234 5678 9012 3456" type="text" />
        </Field.Item>
        <Field.Group>
          <div className="grid grid-cols-2 gap-4">
            <Field.Item>
              <Field.Label htmlFor="expiry">Expiry Date</Field.Label>
              <Input id="expiry" placeholder="MM/YY" type="text" />
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="cvv">CVV</Field.Label>
              <Input id="cvv" placeholder="123" type="text" />
            </Field.Item>
          </div>
        </Field.Group>
        <Field.Item orientation="horizontal">
          <Checkbox id="save-card" />
          <Field.Label htmlFor="save-card">Save this card for future purchases</Field.Label>
        </Field.Item>
      </Field.Group>
    </Field.Set>
  ),
};

/**
 * Use the composable primitives to build custom field layouts with full control over structure and styling.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <Field.Set>
      <Field.Legend>Contact Form</Field.Legend>
      <Field.Description>
        We'd love to hear from you. Fill out the form below to get in touch.
      </Field.Description>
      <Field.Group>
        <Field.Item>
          <Field.Label htmlFor="name">Name</Field.Label>
          <Input id="name" placeholder="Your name" type="text" />
        </Field.Item>
        <Field.Item>
          <Field.Label htmlFor="email-contact">Email</Field.Label>
          <Input id="email-contact" placeholder="you@example.com" type="email" />
          <Field.Hint>We'll respond within 24 hours.</Field.Hint>
        </Field.Item>
        <Field.Item>
          <Field.Label htmlFor="message">Message</Field.Label>
          <Input id="message" placeholder="How can we help?" type="text" />
        </Field.Item>
      </Field.Group>
    </Field.Set>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom field layouts:

\`\`\`tsx
import * as Field from '@/components/field/primitives';
import { Input } from '@/components/input';

// Basic vertical field
<Field.Item>
  <Field.Label htmlFor="field-id">Label</Field.Label>
  <Input id="field-id" type="text" />
  <Field.Hint>Optional hint text</Field.Hint>
</Field.Item>

// Horizontal field (for checkboxes, switches)
<Field.Item orientation="horizontal">
  <Checkbox id="checkbox-id" />
  <Field.Label htmlFor="checkbox-id">Label</Field.Label>
</Field.Item>

// Field with error
<Field.Item>
  <Field.Label htmlFor="field-id">Label</Field.Label>
  <Input id="field-id" type="text" />
  <Field.Error>Error message</Field.Error>
</Field.Item>

// Multiple fields with fieldset
<Field.Set>
  <Field.Legend>Section Title</Field.Legend>
  <Field.Description>Section description</Field.Description>
  <Field.Group>
    <Field.Item>
      <Field.Label htmlFor="field-1">Field 1</Field.Label>
      <Input id="field-1" type="text" />
    </Field.Item>
    <Field.Item>
      <Field.Label htmlFor="field-2">Field 2</Field.Label>
      <Input id="field-2" type="text" />
    </Field.Item>
  </Field.Group>
</Field.Set>

// Separated groups
<Field.Set>
  <Field.Group>
    {/* First group of fields */}
  </Field.Group>
  <Field.Separator />
  <Field.Group>
    {/* Second group of fields */}
  </Field.Group>
</Field.Set>
\`\`\`
        `,
      },
    },
  },
};
