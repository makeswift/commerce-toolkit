import type { Meta, StoryObj } from '@storybook/react-vite';

import * as Logo from '@/components/logo';

const meta = {
  title: 'Components/Logo',
  component: Logo.Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'Link destination URL',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the link',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Logo.Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextLogo: Story = {
  args: {
    href: '#',
    'aria-label': 'Go to homepage',
  },
  render: (args) => (
    <Logo.Link {...args}>
      <Logo.Text>Brand Name</Logo.Text>
    </Logo.Link>
  ),
};

export const ImageLogo: Story = {
  args: {
    href: '#',
    'aria-label': 'Go to homepage',
  },
  render: (args) => (
    <Logo.Link {...args}>
      <Logo.Image alt="Brand Logo" src="https://placehold.co/120x40?text=Brand+Name" />
    </Logo.Link>
  ),
};

export const LogoWithDimensions: Story = {
  args: {
    href: '#',
    'aria-label': 'Go to homepage',
  },
  render: (args) => (
    <Logo.Link {...args}>
      <Logo.Image
        alt="Brand Logo"
        height={50}
        src="https://placehold.co/150x50?text=Logo"
        width={150}
      />
    </Logo.Link>
  ),
};
