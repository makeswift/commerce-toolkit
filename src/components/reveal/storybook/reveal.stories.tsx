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
A component for revealing long content with a show more/less toggle. Useful for product descriptions, FAQ sections, and collapsible content.

## CSS Variables

The underline variant inherits styling from the AnimatedUnderline component:

\`\`\`css
:root {
  --animated-underline: var(--brand);
}
\`\`\`

The button variant uses the Button component's theming.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'button'],
      description: 'Toggle style: "underline" for text link, "button" for outlined button',
    },
    showLabel: {
      control: 'text',
      description: 'Label when content is collapsed',
    },
    hideLabel: {
      control: 'text',
      description: 'Label when content is expanded',
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

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Collapsible content with underline toggle.',
      },
    },
  },
  args: {
    children: longContent,
  },
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Both toggle variants: underline (text link) and button (outlined).',
      },
      source: {
        code: `
<Reveal variant="underline">
  {content}
</Reveal>

<Reveal variant="button">
  {content}
</Reveal>
        `,
      },
    },
  },
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitive components for custom layouts.',
      },
      source: {
        code: `
<RevealPrimitive.Root
  variant="underline"
  showLabel="Show more"
  hideLabel="Show less"
  maxHeight={160}
>
  <RevealPrimitive.Viewport>
    {content}
  </RevealPrimitive.Viewport>
  <RevealPrimitive.Controls>
    <RevealPrimitive.Trigger />
  </RevealPrimitive.Controls>
</RevealPrimitive.Root>
        `,
      },
    },
  },
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
