import type { Meta, StoryObj } from '@storybook/react-vite';

import { OffsetPagination, type PageItem } from '@/components/offset-pagination';

/**
 * Helper function to generate page items for stories.
 * In a real app, this logic would typically be in a utility or the parent component.
 */
function generatePages(
  totalPages: number,
  currentPage: number,
  pathname = '/products',
): Array<PageItem | 'ellipsis'> {
  const pages: Array<number | 'ellipsis'> = [];

  if (totalPages <= 4) {
    pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('ellipsis');
    }

    if (currentPage > 2 && currentPage < totalPages - 1) {
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
    } else if (currentPage <= 2) {
      pages.push(2);
      pages.push(3);
    } else {
      pages.push(totalPages - 2);
      pages.push(totalPages - 1);
    }

    if (currentPage < totalPages - 2) {
      pages.push('ellipsis');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }
  }

  return pages.map((page) =>
    page === 'ellipsis' ? 'ellipsis' : { href: `${pathname}?page=${page}`, page },
  );
}

const meta = {
  title: 'Components/Offset Pagination',
  component: OffsetPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pages: {
      control: 'object',
      description: 'Array of page items or ellipsis markers',
    },
    currentPage: {
      control: 'number',
      description: 'Current page number (1-indexed)',
    },
    label: {
      control: 'text',
      description: 'Aria label for the navigation',
    },
  },
} satisfies Meta<typeof OffsetPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstPage: Story = {
  args: {
    pages: generatePages(10, 1),
    currentPage: 1,
  },
};

export const SecondPage: Story = {
  args: {
    pages: generatePages(10, 2),
    currentPage: 2,
  },
};

export const MiddlePage: Story = {
  args: {
    pages: generatePages(10, 5),
    currentPage: 5,
  },
};

export const NearEnd: Story = {
  args: {
    pages: generatePages(10, 9),
    currentPage: 9,
  },
};

export const LastPage: Story = {
  args: {
    pages: generatePages(10, 10),
    currentPage: 10,
  },
};

export const FewPages: Story = {
  args: {
    pages: generatePages(4, 2),
    currentPage: 2,
  },
};

export const ManyPages: Story = {
  args: {
    pages: generatePages(100, 50),
    currentPage: 50,
  },
};
