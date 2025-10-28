import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight } from 'lucide-react';

import { ButtonLink, type ButtonLinkProps } from '@/components/button-link';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
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
  },
  args: {
    children: 'Button Link',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<ButtonLinkProps>;

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Shop Now',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'View Details',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
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
    children: <ArrowRight size={20} />,
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

export const SecondaryAction: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'View Collection',
  },
};

export const TextLink: Story = {
  args: {
    variant: 'ghost',
    size: 'small',
    children: 'Read more',
  },
};

// Multiple button links
export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <ButtonLink href="#" variant="primary">
        Primary Action
      </ButtonLink>
      <ButtonLink href="#" variant="secondary">
        Secondary Action
      </ButtonLink>
      <ButtonLink href="#" variant="ghost">
        Cancel
      </ButtonLink>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="#" variant="primary">
          Primary
        </ButtonLink>
        <ButtonLink href="#" variant="secondary">
          Secondary
        </ButtonLink>
        <ButtonLink href="#" variant="tertiary">
          Tertiary
        </ButtonLink>
        <ButtonLink href="#" variant="ghost">
          Ghost
        </ButtonLink>
      </div>
    </div>
  ),
};

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
        Extra Small
      </ButtonLink>
    </div>
  ),
};

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
