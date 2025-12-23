import type { Meta, StoryObj } from '@storybook/react-vite';

import * as RatingPrimitive from '@/components/rating';
import { Rating, type RatingProps } from '@/components/rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'The rating value (0-5)',
    },
    totalReviews: {
      control: 'number',
      description: 'Total number of reviews to display',
    },
    showRating: {
      control: 'boolean',
      description: 'Whether to show the numeric rating value',
    },
    showTotalReviews: {
      control: 'boolean',
      description: 'Whether to show the total reviews count',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
    },
  },
};

export default meta;
type Story = StoryObj<RatingProps>;

export const Default: Story = {
  args: {
    rating: 4.5,
    totalReviews: 128,
  },
};

export const FullStars: Story = {
  args: {
    rating: 5,
    totalReviews: 1024,
  },
};

export const HalfStar: Story = {
  args: {
    rating: 3.5,
    totalReviews: 42,
  },
};

export const LowRating: Story = {
  args: {
    rating: 1.5,
    totalReviews: 7,
  },
};

export const SingleReview: Story = {
  args: {
    rating: 5,
    totalReviews: 1,
  },
};

export const StarsOnly: Story = {
  args: {
    rating: 4,
    showRating: false,
    showTotalReviews: false,
  },
};

export const WithoutTotalReviews: Story = {
  args: {
    rating: 4.5,
    showTotalReviews: false,
  },
};

/**
 * The Rating component is built using composable primitives that can be used
 * independently to create custom layouts. Here's the anatomy:
 *
 * - `Root` - Context provider and container
 * - `Stars` - Renders all 5 stars based on the rating
 * - `Star` - Individual star icon (empty, half, or full)
 * - `Value` - Numeric rating display
 * - `Total` - Review count display
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <RatingPrimitive.Root rating={4.5} totalReviews={256}>
      <RatingPrimitive.Stars />
      <RatingPrimitive.Value>
        <RatingPrimitive.Total />
      </RatingPrimitive.Value>
    </RatingPrimitive.Root>
  ),
};
