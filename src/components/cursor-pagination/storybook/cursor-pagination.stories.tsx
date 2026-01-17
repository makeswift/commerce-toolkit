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
A cursor-based pagination component for navigating through paginated content. Uses cursor tokens instead of page numbers, ideal for real-time data.

## CSS Variables

\`\`\`css
:root {
  --cursor-pagination-fill: var(--background);
  --cursor-pagination-fill-hover: var(--contrast-100);
  --cursor-pagination-fill-icon: var(--foreground);
}
\`\`\`
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
      description: 'Previous link config with `href` and optional `asChild`',
    },
    nextLink: {
      control: false,
      description: 'Next link config with `href` and optional `asChild`',
    },
    previousIcon: {
      control: false,
      description: 'Custom previous icon with `asChild` support',
    },
    nextIcon: {
      control: false,
      description: 'Custom next icon with `asChild` support',
    },
  },
};

export default meta;
type Story = StoryObj<CursorPaginationProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Both directions enabled with cursor-based hrefs.',
      },
    },
  },
  args: {
    previousLink: { href: '?before=prev-cursor-123' },
    nextLink: { href: '?after=next-cursor-456' },
  },
};

export const FirstPage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'First page state with previous link disabled (href is null).',
      },
    },
  },
  args: {
    previousLink: { href: null },
    nextLink: { href: '?after=next-cursor-456' },
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
<CursorPaginationPrimitive.Root aria-label="Product pagination" role="navigation">
  <CursorPaginationPrimitive.List>
    <CursorPaginationPrimitive.Item>
      <CursorPaginationPrimitive.Link href="?before=cursor-123" aria-label="Go to previous page">
        <CursorPaginationPrimitive.PreviousIcon />
      </CursorPaginationPrimitive.Link>
    </CursorPaginationPrimitive.Item>
    <CursorPaginationPrimitive.Item>
      <CursorPaginationPrimitive.Link href="?after=cursor-456" aria-label="Go to next page">
        <CursorPaginationPrimitive.NextIcon />
      </CursorPaginationPrimitive.Link>
    </CursorPaginationPrimitive.Item>
  </CursorPaginationPrimitive.List>
</CursorPaginationPrimitive.Root>
        `,
      },
    },
  },
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

export const Skeleton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state placeholder.',
      },
      source: {
        code: `<CursorPaginationPrimitive.Skeleton />`,
      },
    },
  },
  render: () => <CursorPaginationPrimitive.Skeleton />,
};
