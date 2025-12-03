import type { Meta, StoryObj } from '@storybook/react-vite';

import { CursorPagination, Skeleton } from '@/components/cursor-pagination';

const meta = {
  title: 'Components/Cursor Pagination',
  component: CursorPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible label for the pagination navigation',
    },
    previousHref: {
      control: 'text',
      description: 'URL for the previous page link. If null, the previous button is disabled.',
    },
    nextHref: {
      control: 'text',
      description: 'URL for the next page link. If null, the next button is disabled.',
    },
    previousLabel: {
      control: 'text',
      description: 'Accessible label for the previous page button',
    },
    nextLabel: {
      control: 'text',
      description: 'Accessible label for the next page button',
    },
  },
} satisfies Meta<typeof CursorPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    previousHref: '?before=prev-cursor-123',
    nextHref: '?after=next-cursor-456',
  },
};

export const FirstPage: Story = {
  args: {
    previousHref: null,
    nextHref: '?after=next-cursor-456',
  },
};

export const LastPage: Story = {
  args: {
    previousHref: '?before=prev-cursor-123',
    nextHref: null,
  },
};

export const WithSearchParams: Story = {
  args: {
    previousHref: '?sort=date&filter=active&before=prev-cursor-123',
    nextHref: '?sort=date&filter=active&after=next-cursor-456',
  },
};

export const CustomLabels: Story = {
  args: {
    label: 'Product pagination',
    previousLabel: 'Previous products',
    nextLabel: 'Next products',
    previousHref: '?before=prev-cursor-123',
    nextHref: '?after=next-cursor-456',
  },
};

export const SkeletonStory: StoryObj<typeof Skeleton> = {
  name: 'Skeleton',
  render: () => <Skeleton />,
};
