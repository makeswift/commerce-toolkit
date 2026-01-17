import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  OffsetPagination,
  type OffsetPaginationProps,
  type PageItem,
} from '@/components/offset-pagination';
import * as OffsetPaginationPrimitive from '@/components/offset-pagination/primitives';

/**
 * Helper function to generate page items for stories.
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

const meta: Meta<typeof OffsetPagination> = {
  title: 'Components/OffsetPagination',
  component: OffsetPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A pagination component for navigating through pages with ellipsis support for large page counts.

## CSS Variables

\`\`\`css
:root {
  --offset-pagination-font: var(--font-body);
  --offset-pagination-ellipsis: var(--foreground);
  --offset-pagination-text-primary: var(--text-primary);
  --offset-pagination-fill-hover: var(--contrast-100);
  --offset-pagination-fill-current: var(--foreground);
  --offset-pagination-text-current: var(--text-inverse);
  --offset-pagination-fill-current-hover: var(--contrast-500);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    pages: {
      control: false,
      description: 'Array of `PageItem` objects or `"ellipsis"` strings',
    },
    currentPage: {
      control: 'number',
      description: 'Current page number (1-indexed)',
    },
    label: {
      control: 'text',
      description: 'Accessible label for the navigation',
    },
  },
};

export default meta;
type Story = StoryObj<OffsetPaginationProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Pagination in the middle of a range with ellipsis on both sides.',
      },
    },
  },
  args: {
    pages: generatePages(10, 5),
    currentPage: 5,
  },
};

export const FewPages: Story = {
  parameters: {
    docs: {
      description: {
        story: 'When there are few pages, no ellipsis is needed.',
      },
    },
  },
  args: {
    pages: generatePages(4, 2),
    currentPage: 2,
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
<OffsetPaginationPrimitive.Root aria-label="pagination" role="navigation">
  <OffsetPaginationPrimitive.List>
    <OffsetPaginationPrimitive.Item>
      <OffsetPaginationPrimitive.Link href="/products?page=1">1</OffsetPaginationPrimitive.Link>
    </OffsetPaginationPrimitive.Item>
    <OffsetPaginationPrimitive.Item>
      <OffsetPaginationPrimitive.Ellipsis />
    </OffsetPaginationPrimitive.Item>
    <OffsetPaginationPrimitive.Item>
      <OffsetPaginationPrimitive.Link href="/products?page=5" aria-current="page">
        5
      </OffsetPaginationPrimitive.Link>
    </OffsetPaginationPrimitive.Item>
    <OffsetPaginationPrimitive.Item>
      <OffsetPaginationPrimitive.Ellipsis />
    </OffsetPaginationPrimitive.Item>
    <OffsetPaginationPrimitive.Item>
      <OffsetPaginationPrimitive.Link href="/products?page=10">10</OffsetPaginationPrimitive.Link>
    </OffsetPaginationPrimitive.Item>
  </OffsetPaginationPrimitive.List>
</OffsetPaginationPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <OffsetPaginationPrimitive.Root aria-label="pagination" role="navigation">
      <OffsetPaginationPrimitive.List>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Link href="/products?page=1">1</OffsetPaginationPrimitive.Link>
        </OffsetPaginationPrimitive.Item>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Ellipsis />
        </OffsetPaginationPrimitive.Item>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Link href="/products?page=4">4</OffsetPaginationPrimitive.Link>
        </OffsetPaginationPrimitive.Item>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Link aria-current="page" href="/products?page=5">
            5
          </OffsetPaginationPrimitive.Link>
        </OffsetPaginationPrimitive.Item>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Link href="/products?page=6">6</OffsetPaginationPrimitive.Link>
        </OffsetPaginationPrimitive.Item>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Ellipsis />
        </OffsetPaginationPrimitive.Item>
        <OffsetPaginationPrimitive.Item>
          <OffsetPaginationPrimitive.Link href="/products?page=10">
            10
          </OffsetPaginationPrimitive.Link>
        </OffsetPaginationPrimitive.Item>
      </OffsetPaginationPrimitive.List>
    </OffsetPaginationPrimitive.Root>
  ),
};
