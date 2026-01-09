import type { Meta, StoryObj } from '@storybook/react-vite';

import * as Logo from '@/components/logo';

const meta: Meta = {
  title: 'Components/Logo',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A composable logo component for displaying brand identity with text or image. Supports router integration via \`asChild\` pattern.

## CSS Variables

\`\`\`css
:root {
  --logo-focus: var(--brand);
  --logo-text: var(--foreground);
  --logo-font-family: var(--font-family-heading);
}
\`\`\`

## Composable Anatomy

The Logo component is composable-only. Use the primitives to build your logo:

\`\`\`tsx
import * as Logo from '@/components/logo';

// Text logo
<Logo.Link href="/" aria-label="Go to homepage">
  <Logo.Text>Brand Name</Logo.Text>
</Logo.Link>

// Image logo
<Logo.Link href="/" aria-label="Go to homepage">
  <Logo.Image src="/logo.png" alt="Brand Logo" />
</Logo.Link>
\`\`\`

### Router Integration

Use \`asChild\` for Next.js Link or React Router:

\`\`\`tsx
import * as Logo from '@/components/logo';
import Link from 'next/link';

<Logo.Link asChild>
  <Link href="/" aria-label="Go to homepage">
    <Logo.Text>Brand Name</Logo.Text>
  </Link>
</Logo.Link>
\`\`\`

## Primitives

| Primitive | Description |
|-----------|-------------|
| \`Logo.Link\` | Anchor wrapper with focus styles. Supports \`asChild\` for router integration. |
| \`Logo.Text\` | Text-based logo with responsive sizing. |
| \`Logo.Image\` | Image-based logo with \`src\`, \`alt\`, \`width\`, and \`height\` props. |
| \`Logo.Skeleton\` | Loading placeholder for the logo. |
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

// Text-based logo
export const TextLogo: Story = {
  render: () => (
    <Logo.Link aria-label="Go to homepage" href="#">
      <Logo.Text>Clean Essentials</Logo.Text>
    </Logo.Link>
  ),
};

// Image-based logo
export const ImageLogo: Story = {
  render: () => (
    <Logo.Link aria-label="Go to homepage" href="#">
      <Logo.Image alt="Brand Logo" src="https://placehold.co/120x40?text=Brand" />
    </Logo.Link>
  ),
};

// Skeleton loading state
export const Skeleton: Story = {
  render: () => <Logo.Skeleton />,
};
