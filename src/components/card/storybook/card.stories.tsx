import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, type CardProps } from '@/components/card';
import * as CardPrimitive from '@/components/card/primitives';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile container component for displaying content with optional link behavior for clickable cards.

## CSS Variables

\`\`\`css
:root {
  --card-fill: var(--background);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'article', 'section', 'aside'],
      description: 'The HTML element to render as',
    },
    link: {
      control: false,
      description:
        'Link configuration with `href`, `ariaLabel`, and optional `asChild` for router integration',
    },
    children: {
      control: false,
      description: 'Content to display inside the card',
    },
  },
  decorators: [(Story) => <div className="w-80">{Story()}</div>],
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="mt-2 text-sm text-contrast-400">
          This is a simple card component with some basic content.
        </p>
      </>
    ),
  },
};

export const WithLink: Story = {
  args: {
    children: (
      <>
        <h3 className="text-lg font-semibold">Clickable Card</h3>
        <p className="mt-2 text-sm text-contrast-400">
          This card is clickable and will navigate to a new page.
        </p>
      </>
    ),
    link: {
      href: '#',
      ariaLabel: 'Learn more about this card',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Add the `link` prop to make the entire card clickable. The card will show a hover state when it contains a link.',
      },
    },
  },
};

/**
 * Use the composable primitives to build custom card layouts.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <CardPrimitive.Root>
      <h3 className="text-lg font-semibold">Composable Card</h3>
      <p className="mt-2 text-sm text-contrast-400">Using primitives for custom card layouts.</p>
      <CardPrimitive.Link aria-label="View details" href="#" />
    </CardPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom card layouts:

\`\`\`tsx
import * as CardPrimitive from '@/components/card/primitives';

<CardPrimitive.Root>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
  <CardPrimitive.Link href="/page" aria-label="Go to page" />
</CardPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};

export const Skeleton: Story = {
  render: () => <CardPrimitive.Skeleton className="h-40" />,
  parameters: {
    docs: {
      description: {
        story: 'Use the Skeleton primitive to display a loading state.',
      },
    },
  },
};
