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
A star rating component for displaying product reviews and ratings. Shows filled, half-filled, and empty stars based on the rating value.

## CSS Variables

\`\`\`css
:root {
  --rating-icon: var(--foreground);
  --rating-border: var(--contrast-100);
  --rating-text: var(--contrast-400);
}
\`\`\`

## Usage

### High-Level Component

The \`Rating\` component provides a simple API for displaying ratings:

\`\`\`tsx
import { Rating } from '@/components/rating';

<Rating
  rating={4.5}
  totalReviews={128}
  showRating
  showTotalReviews
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Rating from '@/components/rating';

<Rating.Root rating={4.5} totalReviews={128} showRating showTotalReviews>
  <Rating.Stars />
  <Rating.Value>
    <Rating.Total />
  </Rating.Value>
</Rating.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'The rating value (0-5)',
    },
    totalReviews: {
      control: 'number',
      description: 'Total number of reviews',
    },
    showRating: {
      control: 'boolean',
      description: 'Whether to show the numeric rating value',
    },
    showTotalReviews: {
      control: 'boolean',
      description: 'Whether to show the total reviews count',
    },
  },
};

export default meta;
type Story = StoryObj<RatingProps>;

// Default rating
export const Default: Story = {
  args: {
    rating: 4.5,
    totalReviews: 128,
    showRating: true,
    showTotalReviews: true,
  },
};

// Various ratings
export const AllRatings: Story = {
  render: () => (
    <div className="space-y-4">
      <Rating rating={5} showRating showTotalReviews={false} />
      <Rating rating={4.5} showRating showTotalReviews={false} />
      <Rating rating={4} showRating showTotalReviews={false} />
      <Rating rating={3.5} showRating showTotalReviews={false} />
      <Rating rating={3} showRating showTotalReviews={false} />
      <Rating rating={2} showRating showTotalReviews={false} />
      <Rating rating={1} showRating showTotalReviews={false} />
    </div>
  ),
};

// Stars only
export const StarsOnly: Story = {
  args: {
    rating: 4,
    showRating: false,
    showTotalReviews: false,
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <RatingPrimitive.Root rating={4.5} showRating showTotalReviews totalReviews={256}>
      <RatingPrimitive.Stars />
      <RatingPrimitive.Value>
        <RatingPrimitive.Total />
      </RatingPrimitive.Value>
    </RatingPrimitive.Root>
  ),
};
