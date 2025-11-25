import type { Meta, StoryObj } from '@storybook/react-vite';

import { Logo } from '@/components/logo/logo';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    logo: {
      control: 'text',
      description:
        'Logo content - can be a string (text logo), an object with image details, or asChild with custom element',
    },
    link: {
      description:
        'Link configuration with href and ariaLabel, or asChild with custom link element',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextLogo: Story = {
  args: {
    logo: 'Brand Name',
    link: {
      href: '#',
      ariaLabel: 'Go to homepage',
    },
  },
};

export const ImageLogo: Story = {
  args: {
    logo: {
      src: 'https://placehold.co/120x40?text=Brand+Name',
      alt: 'Brand Logo',
    },
    link: {
      href: '#',
      ariaLabel: 'Go to homepage',
    },
  },
};
