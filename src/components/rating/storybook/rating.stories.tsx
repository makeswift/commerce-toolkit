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
      description: 'Rating value from 0 to 5',
    },
    showRating: {
      control: 'boolean',
      description: 'Show numeric rating badge',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    rating: 4.5,
    showRating: true,
  },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 4.5,
  },
};

export const FiveStars: Story = {
  args: {
    rating: 5,
  },
};

export const FourStars: Story = {
  args: {
    rating: 4,
  },
};

export const ThreeStars: Story = {
  args: {
    rating: 3,
  },
};

export const TwoStars: Story = {
  args: {
    rating: 2,
  },
};

export const OneStar: Story = {
  args: {
    rating: 1,
  },
};

export const ZeroStars: Story = {
  args: {
    rating: 0,
  },
};

export const HalfStars: Story = {
  args: {
    rating: 3.5,
  },
};

export const WithoutBadge: Story = {
  args: {
    rating: 4.5,
    showRating: false,
  },
};

export const AllRatings: Story = {
  args: {
    rating: 4.5,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Rating rating={5} />
      <Rating rating={4.5} />
      <Rating rating={4} />
      <Rating rating={3.5} />
      <Rating rating={3} />
      <Rating rating={2.5} />
      <Rating rating={2} />
      <Rating rating={1.5} />
      <Rating rating={1} />
      <Rating rating={0.5} />
      <Rating rating={0} />
    </div>
  ),
};

export const WithoutBadges: Story = {
  args: {
    rating: 4.5,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Rating rating={5} showRating={false} />
      <Rating rating={4.5} showRating={false} />
      <Rating rating={4} showRating={false} />
      <Rating rating={3.5} showRating={false} />
      <Rating rating={3} showRating={false} />
    </div>
  ),
};
