import type { Meta, StoryObj } from '@storybook/react-vite';

import { Rating } from '@/components/rating';

const meta = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'The rating value (0-5). Values over 5 will be capped at 5.',
      table: {
        type: { summary: 'number' },
      },
    },
    showRating: {
      control: 'boolean',
      description: 'Whether to show the numeric rating value next to the stars',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showTotalReviews: {
      control: 'boolean',
      description: 'Whether to show the total number of reviews',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    totalReviews: {
      control: { type: 'number', min: 0, step: 1 },
      description: 'The total number of reviews. Only displayed when `showTotalReviews` is true.',
      table: {
        type: { summary: 'number | undefined' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
    },
  },
  args: {
    rating: 4.5,
    showRating: true,
    showTotalReviews: true,
    totalReviews: 128,
  },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The Rating component displays a star rating with an optional numeric value and review count.
 *
 * ## CSS Variables
 *
 * The component supports the following CSS variables for theming:
 *
 * ```css
 * :root {
 *   --rating-icon: hsl(var(--foreground));
 *   --rating-border: hsl(var(--contrast-100));
 *   --rating-text: hsl(var(--foreground));
 * }
 * ```
 *
 * - `--rating-icon`: Color of the star icons (defaults to foreground color)
 * - `--rating-border`: Border color for rating elements (defaults to contrast-100)
 * - `--rating-text`: Text color for the rating value (defaults to foreground color)
 *
 * ## Usage
 *
 * The component displays 5 stars based on the rating value:
 * - Full stars for whole number ratings
 * - Half stars for decimal values (e.g., 4.5 shows 4 full stars and 1 half star)
 * - Empty stars for remaining positions
 *
 * The numeric rating value and review count can be shown or hidden independently using the `showRating` and `showTotalReviews` props.
 */

// Basic examples
export const Default: Story = {
  args: {
    rating: 4.5,
    totalReviews: 128,
  },
};

export const HighRating: Story = {
  args: {
    rating: 5,
    totalReviews: 234,
  },
};

export const LowRating: Story = {
  args: {
    rating: 2.5,
    totalReviews: 15,
  },
};

export const WholeNumberRating: Story = {
  args: {
    rating: 4,
    totalReviews: 89,
  },
};

export const DecimalRating: Story = {
  args: {
    rating: 3.7,
    totalReviews: 42,
  },
};

// Review count variations
export const SingleReview: Story = {
  args: {
    rating: 5,
    totalReviews: 1,
  },
};

export const ManyReviews: Story = {
  args: {
    rating: 4.8,
    totalReviews: 12345,
  },
};

export const FewReviews: Story = {
  args: {
    rating: 3.2,
    totalReviews: 3,
  },
};

// Visibility options
export const StarsOnly: Story = {
  args: {
    rating: 4.5,
    showRating: false,
    totalReviews: 128,
  },
};

export const RatingOnly: Story = {
  args: {
    rating: 4.5,
    showRating: true,
    showTotalReviews: false,
    totalReviews: 128,
  },
};

export const WithoutReviews: Story = {
  args: {
    rating: 4.5,
    showTotalReviews: false,
  },
};

// Edge cases
export const ZeroRating: Story = {
  args: {
    rating: 0,
    totalReviews: 0,
  },
};

export const MaximumRating: Story = {
  args: {
    rating: 5,
    totalReviews: 1000,
  },
};

export const HalfStar: Story = {
  args: {
    rating: 2.5,
    totalReviews: 5,
  },
};

// Rating over 5 (should be capped)
export const OverMaximum: Story = {
  args: {
    rating: 6,
    totalReviews: 50,
  },
};

// Custom styling example
export const CustomStyling: Story = {
  args: {
    rating: 4.5,
    totalReviews: 128,
    className: 'p-4 bg-contrast-50 rounded-lg',
  },
  decorators: [
    (Story) => (
      <div className="bg-contrast-50 rounded-lg p-6">
        <Story />
      </div>
    ),
  ],
};
