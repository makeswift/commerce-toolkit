import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight } from 'lucide-react';

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

The ButtonLink component supports extensive theming through the shared Button CSS variables:

\`\`\`css
:root {
  --button-focus: var(--brand);
  --button-font-family: var(--font-family-body);

  /* Primary variant */
  --button-primary-background: var(--foreground);
  --button-primary-text: var(--background);

  /* Brand variant */
  --button-brand-background: var(--brand);
  --button-brand-text: var(--foreground);

  /* Outline variant */
  --button-outline-background: var(--background);
  --button-outline-text: var(--foreground);
  --button-outline-border: var(--contrast-200);

  /* Ghost variant */
  --button-ghost-text: var(--foreground);
}
\`\`\`

## Usage with Routing Libraries

The \`asChild\` prop allows ButtonLink to integrate seamlessly with routing libraries like Next.js Link or React Router:

\`\`\`tsx
import { ButtonLink } from '@/components/button-link';
import Link from 'next/link';

<ButtonLink asChild variant="primary">
  <Link href="/products">View Products</Link>
</ButtonLink>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'brand', 'outline', 'ghost'],
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
        'When true, the component will render its child element instead of an anchor tag, merging props and behavior',
    },
  },
  args: {
    children: 'Button Link',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<ButtonLinkProps>;

// Default story
export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Learn More',
  },
};

// Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <ButtonLink href="#" variant="brand">
        Brand
      </ButtonLink>
      <ButtonLink href="#" variant="primary">
        Primary
      </ButtonLink>
      <ButtonLink href="#" variant="outline">
        Outline
      </ButtonLink>
      <ButtonLink href="#" variant="ghost">
        Ghost
      </ButtonLink>
    </div>
  ),
};

// Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
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
};

// Shapes
export const AllShapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
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
        <ArrowRight size={20} />
      </ButtonLink>
    </div>
  ),
};

// With Icon
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: (
      <>
        Shop Now
        <ArrowRight size={20} />
      </>
    ),
  },
};

// Icon Only
export const IconOnly: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    size: 'medium',
    children: <ArrowRight size={20} />,
  },
};

// asChild usage with custom link
export const WithAsChild: Story = {
  name: 'With asChild (Router Integration)',
  render: () => (
    <ButtonLink asChild variant="primary">
      <a
        href="/products"
        onClick={(e) => {
          e.preventDefault();
          alert('This would navigate using your routing library (e.g., Next.js Link)');
        }}
      >
        View Products
      </a>
      <ArrowRight size={20} />
    </ButtonLink>
  ),
};
