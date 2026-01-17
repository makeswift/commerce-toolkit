import type { Meta, StoryObj } from '@storybook/react-vite';

import * as Logo from '@/components/logo';

const meta: Meta = {
  title: 'Components/Logo',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A composable logo component for displaying brand identity with text or image. This component is primitives-only.

## CSS Variables

\`\`\`css
:root {
  --logo-text: var(--foreground);
  --logo-font: var(--font-heading);
}
\`\`\`

## Container Queries

The text logo adapts based on container width.

| Element | Below @xl | @xl and above |
|---------|-----------|---------------|
| Text    | text-lg   | text-2xl      |
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const TextLogo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A text-based logo wrapped in a link.',
      },
      source: {
        code: `
<Logo.Link href="/" aria-label="Go to homepage">
  <Logo.Text>Clean Essentials</Logo.Text>
</Logo.Link>
        `,
      },
    },
  },
  render: () => (
    <Logo.Link aria-label="Go to homepage" href="#">
      <Logo.Text>Clean Essentials</Logo.Text>
    </Logo.Link>
  ),
};

export const ImageLogo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An image-based logo wrapped in a link.',
      },
      source: {
        code: `
<Logo.Link href="/" aria-label="Go to homepage">
  <Logo.Image src="/logo.png" alt="Brand Logo" />
</Logo.Link>
        `,
      },
    },
  },
  render: () => (
    <Logo.Link aria-label="Go to homepage" href="#">
      <Logo.Image alt="Brand Logo" src="https://placehold.co/120x40?text=Brand" />
    </Logo.Link>
  ),
};

export const Skeleton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state placeholder.',
      },
      source: {
        code: `<Logo.Skeleton />`,
      },
    },
  },
  render: () => <Logo.Skeleton />,
};
