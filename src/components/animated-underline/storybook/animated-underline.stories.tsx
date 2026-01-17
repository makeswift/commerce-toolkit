import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnimatedUnderline, type AnimatedUnderlineProps } from '@/components/animated-underline';

const meta: Meta<typeof AnimatedUnderline> = {
  title: 'Components/AnimatedUnderline',
  component: AnimatedUnderline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
An animated underline component that creates a smooth expanding underline effect on hover or focus.

## CSS Variables

\`\`\`css
:root {
  --animated-underline: var(--brand);
}
\`\`\`
        `,
      },
    },
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

export const InParagraph: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <p className="text-base">
        Welcome to our store! We offer a wide range of products.{' '}
        <a className="group/underline focus-visible:outline-none" href="#">
          <AnimatedUnderline>Browse our catalog</AnimatedUnderline>
        </a>{' '}
        to find what you&apos;re looking for.
      </p>
      <p className="text-base">
        Need help?{' '}
        <a className="group/underline focus-visible:outline-none" href="#">
          <AnimatedUnderline>Contact our support team</AnimatedUnderline>
        </a>{' '}
        for assistance.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Wrap the AnimatedUnderline in an anchor tag with `group/underline` class for proper hover effects.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'The underline effect works across multiple lines of text.',
      },
    },
  },
};
