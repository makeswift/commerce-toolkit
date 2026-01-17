import type { Meta, StoryObj } from '@storybook/react-vite';

import { Rating, type RatingProps } from '@/components/rating';
import * as RatingPrimitive from '@/components/rating/primitives';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A star rating component for displaying product reviews. Shows filled, half-filled, and empty stars based on the rating value.

## CSS Variables

\`\`\`css
:root {
  --rating-fill: var(--foreground);
  --rating-text: var(--text-secondary);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Rating value from 0 to 5 (supports half stars)',
    },
    totalReviews: {
      control: 'number',
      description: 'Total number of reviews to display',
    },
    showRating: {
      control: 'boolean',
      description: 'Show the numeric rating value',
    },
    showTotalReviews: {
      control: 'boolean',
      description: 'Show the total reviews count',
    },
  },
};

export default meta;
type Story = StoryObj<RatingProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Rating with stars, numeric value, and review count.',
      },
    },
  },
  args: {
    rating: 4.5,
    totalReviews: 128,
    showRating: true,
    showTotalReviews: true,
  },
};

export const StarsOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Stars without numeric value or review count.',
      },
    },
  },
  args: {
    rating: 4,
    showRating: false,
    showTotalReviews: false,
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitive components for custom layouts.',
      },
      source: {
        code: `
<RatingPrimitive.Root rating={4.5} totalReviews={256} showRating showTotalReviews>
  <RatingPrimitive.Stars />
  <RatingPrimitive.Value>
    <RatingPrimitive.Total />
  </RatingPrimitive.Value>
</RatingPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <RatingPrimitive.Root rating={4.5} showRating showTotalReviews totalReviews={256}>
      <RatingPrimitive.Stars />
      <RatingPrimitive.Value>
        <RatingPrimitive.Total />
      </RatingPrimitive.Value>
    </RatingPrimitive.Root>
  ),
};
