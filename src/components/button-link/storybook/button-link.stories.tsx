import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, X } from 'lucide-react';

import { ButtonLink, type ButtonLinkProps } from '@/components/button-link';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A link styled as a button. Shares the same visual styles and CSS variables as the Button component.

## CSS Variables

\`\`\`css
:root {
  --button-font: var(--font-body);
  --button-fill-primary: var(--foreground);
  --button-text-primary: var(--text-inverse);
  --button-fill-brand: var(--brand);
  --button-text-brand: var(--text-primary);
  --button-fill-outline: var(--background);
  --button-text-outline: var(--text-primary);
  --button-stroke-outline: var(--border);
  --button-text-ghost: var(--text-primary);
  --button-fill-danger: var(--error);
  --button-danger-text: var(--text-inverse);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'brand', 'outline', 'ghost', 'danger'],
      description: 'The visual style variant of the button link',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'x-small'],
      description: 'The size of the button link',
    },
    shape: {
      control: 'select',
      options: ['pill', 'rounded', 'square', 'circle'],
      description: 'The border radius style of the button link',
    },
    href: {
      control: 'text',
      description: 'The URL to link to',
    },
    asChild: {
      control: 'boolean',
      description:
        'When true, renders the child element instead of an anchor tag, merging props. Useful for routing libraries like Next.js Link.',
    },
  },
  args: {
    children: 'Button Link',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<ButtonLinkProps>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Learn More',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonLink href="#" variant="primary">
        Primary
      </ButtonLink>
      <ButtonLink href="#" variant="brand">
        Brand
      </ButtonLink>
      <ButtonLink href="#" variant="outline">
        Outline
      </ButtonLink>
      <ButtonLink href="#" variant="ghost">
        Ghost
      </ButtonLink>
      <ButtonLink href="#" variant="danger">
        Danger
      </ButtonLink>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The button link supports five variants: `primary`, `brand`, `outline`, `ghost`, and `danger`.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonLink href="#" size="large">
        Large
      </ButtonLink>
      <ButtonLink href="#" size="medium">
        Medium
      </ButtonLink>
      <ButtonLink href="#" size="small">
        Small
      </ButtonLink>
      <ButtonLink href="#" size="x-small">
        X-Small
      </ButtonLink>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Four size options are available: `large` (default), `medium`, `small`, and `x-small`.',
      },
    },
  },
};

export const AllShapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <ButtonLink href="#" shape="pill">
        Pill
      </ButtonLink>
      <ButtonLink href="#" shape="rounded">
        Rounded
      </ButtonLink>
      <ButtonLink href="#" shape="square">
        Square
      </ButtonLink>
      <ButtonLink href="#" shape="circle">
        <X absoluteStrokeWidth size={20} strokeWidth={1.5} />
      </ButtonLink>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Shape options include `pill` (default), `rounded`, `square`, and `circle` (for icon-only links).',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        Shop Now
        <ArrowRight size={20} />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons can be added as children alongside text.',
      },
    },
  },
};
