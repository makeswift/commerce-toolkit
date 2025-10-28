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
      description: 'Logo content - can be a string (text logo) or an object with image details',
    },
    link: {
      description: 'Link configuration with href, ariaLabel, and optional custom render function',
    },
    width: {
      control: 'number',
      description: 'Width of the logo (in pixels, only applies to image logos)',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: 'number',
      description: 'Height of the logo (in pixels, only applies to image logos)',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextLogo: Story = {
  args: {
    logo: 'Brand Name',
    link: {
      href: '/',
      ariaLabel: 'Go to homepage',
    },
    width: 120,
    height: 40,
  },
};

export const ImageLogo: Story = {
  args: {
    logo: {
      src: 'https://placehold.co/120x40?text=Brand+Name',
      alt: 'Brand Logo',
    },
    link: {
      href: '/',
      ariaLabel: 'Go to homepage',
    },
    width: 120,
    height: 40,
  },
};
