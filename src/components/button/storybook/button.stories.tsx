import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, LoaderCircle, X } from 'lucide-react';

import { Button } from '@/components/button';

const meta = {
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
  --button-focus: var(--brand);
  --button-font-family: var(--font-family-body);
  --button-brand-background: var(--brand);
  --button-brand-text: var(--foreground);
  --button-primary-background: var(--foreground);
  --button-primary-text: var(--background);
  --button-outline-background: var(--background);
  --button-outline-text: var(--foreground);
  --button-outline-border: var(--contrast-200);
  --button-ghost-text: var(--foreground);
  --button-danger-background: var(--error);
  --button-danger-text: var(--background);
  --button-loader-icon: var(--foreground);
}
\`\`\`

## Custom Loader Icon

The loading spinner can be customized using the \`loaderIcon\` prop with \`asChild\`:

\`\`\`tsx
<Button
  loading
  loaderIcon={{
    asChild: true,
    children: <LoaderCircle />,
  }}
>
  Loading...
</Button>
\`\`\`

The \`LoaderIcon\` primitive is also available:

\`\`\`tsx
import * as ButtonPrimitive from '@/components/button';

<ButtonPrimitive.LoaderIcon asChild>
  <MyCustomSpinner />
</ButtonPrimitive.LoaderIcon>
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
      description: 'Shows a loading spinner',
    },
    loaderIcon: {
      control: false,
      description: 'Custom loader icon with asChild support',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
    children: 'Brand Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

// Size stories
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'x-small',
    children: 'Extra Small',
  },
};

// Shape stories
export const Pill: Story = {
  args: {
    shape: 'pill',
    children: 'Pill Shape',
  },
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    children: 'Rounded Shape',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    children: 'Square Shape',
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    children: <X absoluteStrokeWidth size={20} strokeWidth={1.5} />,
  },
};

// State stories
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const CustomLoaderIcon: Story = {
  args: {
    loading: true,
    loaderIcon: {
      asChild: true,
      children: <LoaderCircle />,
    },
    children: 'Custom Loader',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Combination examples
export const DangerSmallPill: Story = {
  args: {
    variant: 'danger',
    size: 'small',
    shape: 'pill',
    children: 'Delete',
  },
};

export const PrimaryMediumRounded: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    children: 'Cancel',
  },
};

// With icon examples
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
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
    size: 'medium',
    children: <ArrowRight size={20} />,
  },
};

// Use case examples
export const CallToAction: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: (
      <>
        Get Started <ArrowRight size={20} />
      </>
    ),
  },
};

export const DangerWithIcon: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    children: (
      <>
        <X size={20} />
        Delete Item
      </>
    ),
  },
};
