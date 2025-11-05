import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, X } from 'lucide-react';

import { Button } from '@/components/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
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

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
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

export const SecondaryMediumRounded: Story = {
  args: {
    variant: 'secondary',
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
