import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnimatedUnderline, type AnimatedUnderlineProps } from '@/components/animated-underline';

const meta: Meta<typeof AnimatedUnderline> = {
  title: 'Components/AnimatedUnderline',
  component: AnimatedUnderline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content to display with animated underline',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'Hover over me',
  },
};

export default meta;
type Story = StoryObj<AnimatedUnderlineProps>;

export const Default: Story = {
  args: {
    children: 'Hover over me',
  },
};

export const InText: Story = {
  render: () => (
    <p className="max-w-md text-base">
      This is a paragraph with an{' '}
      <a className="group/underline focus:outline-hidden" href="#">
        <AnimatedUnderline>animated underline link</AnimatedUnderline>
      </a>{' '}
      embedded within the text.
    </p>
  ),
};

export const MultiLine: Story = {
  args: {
    children:
      'This is a very long text that will span multiple lines to demonstrate the animated underline effect',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const InParagraph: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <p className="text-base">
        Welcome to our store! We offer a wide range of products.{' '}
        <a className="group/underline focus:outline-hidden" href="#">
          <AnimatedUnderline>Browse our catalog</AnimatedUnderline>
        </a>{' '}
        to find what you&apos;re looking for.
      </p>
      <p className="text-base">
        Need help?{' '}
        <a className="group/underline focus:outline-hidden" href="#">
          <AnimatedUnderline>Contact our support team</AnimatedUnderline>
        </a>{' '}
        for assistance.
      </p>
    </div>
  ),
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom styled link',
    className: 'text-xl',
  },
};

export const LargeText: Story = {
  args: {
    children: 'Large heading link',
    className: 'text-3xl',
  },
};

export const SmallText: Story = {
  args: {
    children: 'Small footnote link',
    className: 'text-xs',
  },
};
