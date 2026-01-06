import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Checkbox } from '@/components/checkbox';
import * as Field from '@/components/field';
import { Input } from '@/components/input';
import { Select } from '@/components/select';
import { Textarea } from '@/components/textarea';

function FieldStory() {
  return (
    <form>
      <Field.Group>
        <Field.Set>
          <Field.Legend>Contact Information</Field.Legend>
          <Field.Description>Please provide your contact details below.</Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="name">Full Name</Field.Label>
              <Input id="name" placeholder="Enter your name" />
              <Field.Hint>As it appears on your ID.</Field.Hint>
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="email">Email Address</Field.Label>
              <Input id="email" placeholder="you@example.com" type="email" />
            </Field.Item>
          </Field.Group>
        </Field.Set>
      </Field.Group>
    </form>
  );
}

const meta: Meta<typeof FieldStory> = {
  title: 'Components/Field',
  component: FieldStory,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A composable form field system that provides semantic structure and consistent styling for form layouts. These primitives work together to create accessible, well-organized forms.

## CSS Variables

The Field components support the following CSS variables for theming:

| Variable | Description | Default |
|----------|-------------|---------|
| \`--field-legend\` | Legend text color | \`var(--foreground)\` |
| \`--field-legend-font-family\` | Legend font family | \`var(--font-family-heading)\` |
| \`--field-description\` | Description text color | \`var(--contrast-500)\` |
| \`--field-description-font-family\` | Description font family | \`var(--font-family-body)\` |
| \`--label-text\` | Label text color (default/vertical) | \`var(--contrast-500)\` |
| \`--label-font-family\` | Label font family | \`var(--font-family-body)\` |
| \`--label-horizontal-text\` | Label text color (horizontal orientation) | \`var(--foreground)\` |
| \`--field-hint\` | Hint text color | \`var(--contrast-500)\` |
| \`--field-hint-font-family\` | Hint font family | \`var(--font-family-body)\` |
| \`--field-separator\` | Separator line color | \`var(--contrast-200)\` |
| \`--field-error\` | Error text color | \`var(--error)\` |

## Composable Anatomy

The Field primitives follow a structured hierarchy with nested \`Field.Group\` components for proper spacing:

\`\`\`tsx
import * as Field from '@/components/field';

<form>
  <Field.Group>
    <Field.Set>
      <Field.Legend>Section Title</Field.Legend>
      <Field.Description>Section description text.</Field.Description>
      <Field.Group> {/* Inner group for field items - gets tighter gap-4 spacing */}
        <Field.Item>
          <Field.Label htmlFor="input-id">Label</Field.Label>
          {/* Form control: Input, Textarea, Select, etc. */}
          <Field.Hint>Helper text for the field.</Field.Hint>
          <Field.Error>Error message if validation fails.</Field.Error>
        </Field.Item>
        {/* Repeat for additional field items */}
      </Field.Group>
    </Field.Set>
    <Field.Separator />
    <Field.Set>
      {/* Repeat for additional field sets */}
    </Field.Set>
  </Field.Group>
</form>
\`\`\`

## Spacing Architecture

The outer \`Field.Group\` provides \`gap-8\` spacing between field sets and separators. When a \`Field.Group\` is nested inside another, it automatically receives \`gap-4\` for tighter spacing between individual form fields.

## Components

| Component | Element | Description |
|-----------|---------|-------------|
| \`Field.Group\` | \`<div>\` | Container with flex layout. Outer groups use gap-8; nested groups use gap-4. |
| \`Field.Set\` | \`<fieldset>\` | Groups related fields together semantically. |
| \`Field.Legend\` | \`<legend>\` | Title for a field set section. |
| \`Field.Description\` | \`<p>\` | Descriptive text for a field set. |
| \`Field.Item\` | \`<div>\` | Container for a single form field. Supports \`orientation\` prop (\`vertical\` | \`horizontal\`). |
| \`Field.Label\` | \`<label>\` | Label for a form control. |
| \`Field.Hint\` | \`<p>\` | Helper text displayed below a form control. |
| \`Field.Error\` | \`<div>\` | Error message with icon for validation errors. |
| \`Field.Separator\` | \`<hr>\` | Visual separator between field sets. |
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story: ComponentType) => (
      <div className="mx-auto max-w-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic form with a single field set containing contact information fields.',
      },
    },
  },
};

export const WithMultipleFieldSets: Story = {
  render: () => (
    <form>
      <Field.Group>
        <Field.Set>
          <Field.Legend>Personal Information</Field.Legend>
          <Field.Description>Tell us about yourself.</Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="full-name">Full Name</Field.Label>
              <Input id="full-name" placeholder="Enter your full name" />
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="bio">Bio</Field.Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." rows={3} />
              <Field.Hint>Keep it under 200 characters.</Field.Hint>
            </Field.Item>
          </Field.Group>
        </Field.Set>
        <Field.Separator />
        <Field.Set>
          <Field.Legend>Shipping Details</Field.Legend>
          <Field.Description>Where should we send your order?</Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="address">Street Address</Field.Label>
              <Input id="address" placeholder="123 Main St" />
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="city">City</Field.Label>
              <Input id="city" placeholder="San Francisco" />
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="country">Country</Field.Label>
              <Select
                id="country"
                label="Country"
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'de', label: 'Germany' },
                ]}
                placeholder="Select a country"
              />
            </Field.Item>
          </Field.Group>
        </Field.Set>
      </Field.Group>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Multiple field sets separated by `Field.Separator` to organize different sections of a form.',
      },
    },
  },
};

export const WithVariousControls: Story = {
  render: () => (
    <form>
      <Field.Group>
        <Field.Set>
          <Field.Legend>Account Preferences</Field.Legend>
          <Field.Description>Configure your account settings.</Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="username">Username</Field.Label>
              <Input id="username" placeholder="Choose a username" />
              <Field.Hint>This will be your public display name.</Field.Hint>
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="language">Preferred Language</Field.Label>
              <Select
                id="language"
                label="Language"
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French' },
                  { value: 'de', label: 'German' },
                ]}
                placeholder="Select a language"
              />
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="notes">Additional Notes</Field.Label>
              <Textarea id="notes" placeholder="Any special requests..." rows={4} />
            </Field.Item>
            <Field.Item orientation="horizontal">
              <Checkbox id="newsletter" />
              <Field.Label htmlFor="newsletter">Subscribe to newsletter</Field.Label>
            </Field.Item>
          </Field.Group>
        </Field.Set>
      </Field.Group>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how Field primitives work with various form controls including Input, Select, Textarea, and Checkbox.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  render: () => (
    <form>
      <Field.Group>
        <Field.Set>
          <Field.Legend>Product Inquiry</Field.Legend>
          <Field.Description>
            Have questions about our Natural Fiber Scrub Brush? Let us know.
          </Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="inquiry-name">Your Name</Field.Label>
              <Input id="inquiry-name" placeholder="Enter your name" />
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="inquiry-email">Email Address</Field.Label>
              <Input id="inquiry-email" placeholder="you@example.com" type="email" />
              <Field.Hint>We'll respond within 24 hours.</Field.Hint>
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="inquiry-message">Message</Field.Label>
              <Textarea id="inquiry-message" placeholder="What would you like to know?" rows={4} />
            </Field.Item>
          </Field.Group>
        </Field.Set>
        <Field.Separator />
        <Field.Set>
          <Field.Legend>Order Details</Field.Legend>
          <Field.Description>Specify your order preferences.</Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="quantity">Quantity</Field.Label>
              <Select
                id="quantity"
                label="Quantity"
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3', label: '3' },
                  { value: '5', label: '5' },
                  { value: '10', label: '10' },
                ]}
                placeholder="Select quantity"
              />
            </Field.Item>
            <Field.Item orientation="horizontal">
              <Checkbox id="gift-wrap" />
              <Field.Label htmlFor="gift-wrap">Gift wrap this order</Field.Label>
            </Field.Item>
          </Field.Group>
        </Field.Set>
      </Field.Group>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This example demonstrates the full composable anatomy of the Field primitives:

\`\`\`tsx
<form>
  <Field.Group>
    <Field.Set>
      <Field.Legend>...</Field.Legend>
      <Field.Description>...</Field.Description>
      <Field.Group>
        <Field.Item>
          <Field.Label>...</Field.Label>
          {/* Form control */}
          <Field.Hint>...</Field.Hint>
        </Field.Item>
        {/* Additional field items */}
      </Field.Group>
    </Field.Set>
    <Field.Separator />
    <Field.Set>
      {/* Next field set */}
    </Field.Set>
  </Field.Group>
</form>
\`\`\`
        `,
      },
    },
  },
};

export const WithErrorState: Story = {
  render: () => (
    <form>
      <Field.Group>
        <Field.Set>
          <Field.Legend>Account Details</Field.Legend>
          <Field.Description>Please correct the errors below.</Field.Description>
          <Field.Group>
            <Field.Item>
              <Field.Label htmlFor="error-email">Email Address</Field.Label>
              <Input aria-invalid id="error-email" placeholder="you@example.com" type="email" />
              <Field.Error>Please enter a valid email address.</Field.Error>
            </Field.Item>
            <Field.Item>
              <Field.Label htmlFor="error-password">Password</Field.Label>
              <Input aria-invalid id="error-password" placeholder="••••••••" type="password" />
              <Field.Error>Password must be at least 8 characters.</Field.Error>
            </Field.Item>
          </Field.Group>
        </Field.Set>
      </Field.Group>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Use `Field.Error` to display validation error messages. Pair with `aria-invalid` on the form control for accessibility.',
      },
    },
  },
};
