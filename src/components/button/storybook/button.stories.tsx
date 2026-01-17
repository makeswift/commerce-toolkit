import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, X } from 'lucide-react';

import { Button } from '@/components/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component with multiple variants, sizes, and shapes.

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
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'x-small'],
      description: 'The size of the button',
    },
    shape: {
      control: 'select',
      options: ['pill', 'rounded', 'square', 'circle'],
      description: 'The border radius style of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner and disables interaction',
    },
    loaderIcon: {
      control: false,
      description: 'Custom loader icon configuration with `asChild` and `children` props',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Add to Cart',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The button supports five variants: `primary`, `brand`, `outline`, `ghost`, and `danger`.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
      <Button size="x-small">X-Small</Button>
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
      <Button shape="pill">Pill</Button>
      <Button shape="rounded">Rounded</Button>
      <Button shape="square">Square</Button>
      <Button shape="circle">
        <X absoluteStrokeWidth size={20} strokeWidth={1.5} />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Shape options include `pill` (default), `rounded`, `square`, and `circle` (for icon-only buttons).',
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

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing...',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The `loading` prop shows a spinner and disables interaction. Use the `loaderIcon` prop to customize the spinner.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
