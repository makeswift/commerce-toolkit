import type { Meta, StoryObj } from '@storybook/react-vite';

import { Reveal, type RevealProps } from '@/components/reveal';
import * as RevealPrimitive from '@/components/reveal/primitives';

const longContent = (
  <div className="space-y-4 text-sm text-contrast-400">
    <p>
      Introducing our premium wireless headphones, meticulously designed for audiophiles and casual
      listeners alike. These headphones combine cutting-edge technology with exceptional comfort,
      delivering an unparalleled audio experience.
    </p>
    <p>
      Featuring active noise cancellation technology, you can immerse yourself in your favorite
      music without distractions. The advanced 40mm drivers produce rich, detailed sound across all
      frequencies, from deep bass to crystal-clear highs.
    </p>
    <p>
      With up to 30 hours of battery life on a single charge, these headphones will keep you
      entertained throughout your longest journeys. The quick-charge feature provides 5 hours of
      playback with just 10 minutes of charging.
    </p>
    <p>
      The ergonomic design includes memory foam ear cushions that adapt to your ears, ensuring
      comfort during extended listening sessions. The adjustable headband and rotating ear cups make
      these headphones perfect for any head size.
    </p>
  </div>
);

const meta: Meta<typeof Reveal> = {
  title: 'Components/Reveal',
  component: Reveal,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A component for revealing long content with a show more/less toggle. Useful for product descriptions, FAQ sections, and other collapsible content areas.

## CSS Variables

\`\`\`css
:root {
  --reveal-focus: var(--brand);
}
\`\`\`

## Usage

### High-Level Component

The \`Reveal\` component provides a simple API for collapsible content:

\`\`\`tsx
import { Reveal } from '@/components/reveal';

<Reveal
  variant="underline"
  showLabel="Show more"
  hideLabel="Show less"
  maxHeight={160}
>
  <p>Your long content here...</p>
</Reveal>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Reveal from '@/components/reveal';

<Reveal.Root
  variant="underline"
  showLabel="Show more"
  hideLabel="Show less"
  maxHeight={160}
>
  <Reveal.Viewport>
    <p>Your content here...</p>
  </Reveal.Viewport>
  <Reveal.Controls>
    <Reveal.Trigger />
  </Reveal.Controls>
</Reveal.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'button'],
      description: 'The visual variant of the toggle button',
    },
    showLabel: {
      control: 'text',
      description: 'Label for the show more button',
    },
    hideLabel: {
      control: 'text',
      description: 'Label for the show less button',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the content is expanded by default',
    },
    maxHeight: {
      control: 'number',
      description: 'Maximum height when collapsed (in pixels)',
    },
  },
  args: {
    variant: 'underline',
    showLabel: 'Show more',
    hideLabel: 'Show less',
    defaultOpen: false,
    maxHeight: 160,
  },
};

export default meta;
type Story = StoryObj<RevealProps>;

// Default with underline variant
export const Default: Story = {
  args: {
    children: longContent,
  },
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm font-medium text-contrast-500">Underline variant</p>
        <Reveal variant="underline">{longContent}</Reveal>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-contrast-500">Button variant</p>
        <Reveal variant="button">{longContent}</Reveal>
      </div>
    </div>
  ),
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <RevealPrimitive.Root
      hideLabel="Show less"
      maxHeight={160}
      showLabel="Show more"
      variant="underline"
    >
      <RevealPrimitive.Viewport>{longContent}</RevealPrimitive.Viewport>
      <RevealPrimitive.Controls>
        <RevealPrimitive.Trigger />
      </RevealPrimitive.Controls>
    </RevealPrimitive.Root>
  ),
};
