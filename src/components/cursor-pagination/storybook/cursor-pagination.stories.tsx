import type { Meta, StoryObj } from '@storybook/react-vite';

import { CursorPagination, type CursorPaginationProps } from '@/components/cursor-pagination';
import * as CursorPaginationPrimitive from '@/components/cursor-pagination/primitives';

const meta: Meta<typeof CursorPagination> = {
  title: 'Components/CursorPagination',
  component: CursorPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A cursor-based pagination component for navigating through paginated content. Uses cursor tokens instead of page numbers, ideal for infinite-scroll or real-time data.

## CSS Variables

\`\`\`css
:root {
  --cursor-pagination-focus: var(--brand);
  --cursor-pagination-border: var(--contrast-100);
  --cursor-pagination-border-hover: var(--contrast-200);
  --cursor-pagination-icon: var(--foreground);
  --cursor-pagination-background: var(--background);
  --cursor-pagination-background-hover: var(--contrast-100);
}
\`\`\`

## Usage

### High-Level Component

The \`CursorPagination\` component provides a simple API for cursor-based navigation:

\`\`\`tsx
import { CursorPagination } from '@/components/cursor-pagination';

<CursorPagination
  previousLink={{ href: '?before=cursor-123' }}
  nextLink={{ href: '?after=cursor-456' }}
/>
\`\`\`

### With Router Integration

Use the \`asChild\` pattern for Next.js Link or React Router:

\`\`\`tsx
import { CursorPagination } from '@/components/cursor-pagination';
import Link from 'next/link';

<CursorPagination
  previousLink={{
    asChild: true,
    children: <Link href="?before=cursor-123"><PreviousIcon /></Link>,
  }}
  nextLink={{
    asChild: true,
    children: <Link href="?after=cursor-456"><NextIcon /></Link>,
  }}
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as CursorPagination from '@/components/cursor-pagination';

<CursorPagination.Root aria-label="pagination" role="navigation">
  <CursorPagination.List>
    <CursorPagination.Item>
      <CursorPagination.Link href="?before=cursor-123" aria-label="Previous page">
        <CursorPagination.PreviousIcon />
      </CursorPagination.Link>
    </CursorPagination.Item>
    <CursorPagination.Item>
      <CursorPagination.Link href="?after=cursor-456" aria-label="Next page">
        <CursorPagination.NextIcon />
      </CursorPagination.Link>
    </CursorPagination.Item>
  </CursorPagination.List>
</CursorPagination.Root>
\`\`\`

The \`Link\` component supports \`asChild\` for router integration. Use \`aria-disabled\` for disabled states.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible label for the navigation landmark',
    },
    previousLink: {
      control: false,
      description: 'Configuration for the previous page link with href and optional asChild',
    },
    nextLink: {
      control: false,
      description: 'Configuration for the next page link with href and optional asChild',
    },
    previousIcon: {
      control: false,
      description: 'Custom previous icon configuration with asChild support',
    },
    nextIcon: {
      control: false,
      description: 'Custom next icon configuration with asChild support',
    },
  },
};

export default meta;
type Story = StoryObj<CursorPaginationProps>;

// Default with both directions enabled
export const Default: Story = {
  args: {
    previousLink: { href: '?before=prev-cursor-123' },
    nextLink: { href: '?after=next-cursor-456' },
  },
};

// First page (no previous link - disabled state)
export const FirstPage: Story = {
  args: {
    previousLink: { href: null },
    nextLink: { href: '?after=next-cursor-456' },
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <CursorPaginationPrimitive.Root aria-label="Product pagination" role="navigation">
      <CursorPaginationPrimitive.List>
        <CursorPaginationPrimitive.Item>
          <CursorPaginationPrimitive.Link
            aria-label="Go to previous page"
            href="?before=cursor-123"
          >
            <CursorPaginationPrimitive.PreviousIcon />
          </CursorPaginationPrimitive.Link>
        </CursorPaginationPrimitive.Item>
        <CursorPaginationPrimitive.Item>
          <CursorPaginationPrimitive.Link aria-label="Go to next page" href="?after=cursor-456">
            <CursorPaginationPrimitive.NextIcon />
          </CursorPaginationPrimitive.Link>
        </CursorPaginationPrimitive.Item>
      </CursorPaginationPrimitive.List>
    </CursorPaginationPrimitive.Root>
  ),
};

// Skeleton loading state
export const Skeleton: Story = {
  render: () => <CursorPaginationPrimitive.Skeleton />,
};
