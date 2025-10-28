import type { Meta, StoryObj } from '@storybook/react-vite';

import { Reveal } from '@/components/reveal';

const meta = {
  title: 'Components/Reveal',
  component: Reveal,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'button'],
      description: 'Toggle button variant',
      table: {
        defaultValue: { summary: 'underline' },
      },
    },
    showLabel: {
      control: 'text',
      description: 'Label for the show more button',
      table: {
        defaultValue: { summary: 'Show more' },
      },
    },
    hideLabel: {
      control: 'text',
      description: 'Label for the show less button',
      table: {
        defaultValue: { summary: 'Show less' },
      },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the content is expanded by default',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height when collapsed (in rem or px)',
      table: {
        defaultValue: { summary: '10rem' },
      },
    },
    children: {
      description: 'Content to show/hide',
    },
  },
  args: {
    variant: 'underline',
    showLabel: 'Show more',
    hideLabel: 'Show less',
    defaultOpen: false,
    maxHeight: '10rem',
  },
} satisfies Meta<typeof Reveal>;

export default meta;

type Story = StoryObj<typeof meta>;

const longContent = (
  <div className="space-y-4 text-sm text-contrast-400">
    <h3 className="text-lg font-semibold text-foreground">Product Description</h3>
    <p>
      Introducing our premium wireless headphones, meticulously designed for audiophiles and casual
      listeners alike. These headphones combine cutting-edge technology with exceptional comfort,
      delivering an unparalleled audio experience.
    </p>
    <p>
      Featuring active noise cancellation technology, you can immerse yourself in your favorite
      music without distractions. The advanced 40mm drivers produce rich, detailed sound across all
      frequencies, from deep bass to crystal-clear highs.
    </p>
    <p>
      With up to 30 hours of battery life on a single charge, these headphones will keep you
      entertained throughout your longest journeys. The quick-charge feature provides 5 hours of
      playback with just 10 minutes of charging.
    </p>
    <p>
      The ergonomic design includes memory foam ear cushions that adapt to your ears, ensuring
      comfort during extended listening sessions. The adjustable headband and rotating ear cups make
      these headphones perfect for any head size.
    </p>
  </div>
);

export const UnderlineVariant: Story = {
  args: {
    variant: 'underline',
    children: longContent,
  },
};

export const ButtonVariant: Story = {
  args: {
    variant: 'button',
    children: longContent,
  },
};

export const DefaultOpen: Story = {
  args: {
    variant: 'underline',
    defaultOpen: true,
    children: longContent,
  },
};

export const CustomLabels: Story = {
  args: {
    variant: 'underline',
    showLabel: 'Read more',
    hideLabel: 'Read less',
    children: longContent,
  },
};

export const ShortMaxHeight: Story = {
  args: {
    variant: 'underline',
    maxHeight: '5rem',
    children: longContent,
  },
};

export const TallMaxHeight: Story = {
  args: {
    variant: 'underline',
    maxHeight: '15rem',
    children: longContent,
  },
};

export const ShortContent: Story = {
  args: {
    variant: 'underline',
    children: (
      <div className="space-y-4 text-sm text-contrast-400">
        <h3 className="text-lg font-semibold text-foreground">Short Content</h3>
        <p>This content is short enough that it doesn't trigger the reveal functionality.</p>
      </div>
    ),
  },
};
