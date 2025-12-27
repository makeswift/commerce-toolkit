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
A pagination component for navigating through pages of content with ellipsis support for large page counts.

## CSS Variables

\`\`\`css
:root {
  --offset-pagination-focus: var(--brand);
  --offset-pagination-font-family: var(--font-family-body);
  --offset-pagination-ellipsis: var(--foreground);
  --offset-pagination-border: var(--contrast-100);
  --offset-pagination-text: var(--foreground);
  --offset-pagination-background-hover: var(--contrast-100);
  --offset-pagination-current-page-border: var(--foreground);
  --offset-pagination-current-page-background: var(--foreground);
  --offset-pagination-current-page-text: var(--background);
  --offset-pagination-current-page-background-hover: var(--contrast-500);
}
\`\`\`

## Usage

### High-Level Component

The \`OffsetPagination\` component takes a \`pages\` array and \`currentPage\`:

\`\`\`tsx
import { OffsetPagination, type PageItem } from '@/components/offset-pagination';

const pages: Array<PageItem | 'ellipsis'> = [
  { href: '/products?page=1', page: 1 },
  'ellipsis',
  { href: '/products?page=4', page: 4 },
  { href: '/products?page=5', page: 5 },
  { href: '/products?page=6', page: 6 },
  'ellipsis',
  { href: '/products?page=10', page: 10 },
];

<OffsetPagination
  pages={pages}
  currentPage={5}
  label="Product pagination"
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as OffsetPagination from '@/components/offset-pagination';

<OffsetPagination.Root aria-label="pagination" role="navigation">
  <OffsetPagination.List>
    <OffsetPagination.Item>
      <OffsetPagination.Link href="/products?page=1">1</OffsetPagination.Link>
    </OffsetPagination.Item>
    <OffsetPagination.Item>
      <OffsetPagination.Ellipsis />
    </OffsetPagination.Item>
    <OffsetPagination.Item>
      <OffsetPagination.Link href="/products?page=5" aria-current="page">
        5
      </OffsetPagination.Link>
    </OffsetPagination.Item>
  </OffsetPagination.List>
</OffsetPagination.Root>
\`\`\`

The \`Link\` component supports \`asChild\` for router integration with Next.js Link or React Router.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    pages: {
      control: false,
      description: 'Array of page items or ellipsis markers',
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

// Default pagination (middle of range with ellipsis)
export const Default: Story = {
  args: {
    pages: generatePages(10, 5),
    currentPage: 5,
  },
};

// Few pages (no ellipsis needed)
export const FewPages: Story = {
  args: {
    pages: generatePages(4, 2),
    currentPage: 2,
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
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
