'use client';

import * as OffsetPaginationPrimitive from '@/components/offset-pagination';

export interface PageItem {
  href: string;
  page: number;
}

export interface OffsetPaginationProps {
  pages: Array<PageItem | 'ellipsis'>;
  currentPage: number;
  label?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --offset-pagination-focus: var(--brand);
 *   --offset-pagination-font-family: var(--font-family-body);
 *   --offset-pagination-ellipsis: var(--foreground);
 *   --offset-pagination-border: var(--contrast-100);
 *   --offset-pagination-text: var(--foreground);
 *   --offset-pagination-background-hover: var(--contrast-100);
 *   --offset-pagination-current-page-border: var(--foreground);
 *   --offset-pagination-current-page-background: var(--foreground);
 *   --offset-pagination-current-page-text: var(--background);
 *   --offset-pagination-current-page-background-hover: var(--contrast-500);
 * }
 * ```
 */
export function OffsetPagination({
  pages,
  currentPage,
  label = 'pagination',
}: OffsetPaginationProps) {
  return (
    <OffsetPaginationPrimitive.Root aria-label={label} role="navigation">
      <OffsetPaginationPrimitive.List>
        {pages.map((item, index) =>
          item === 'ellipsis' ? (
            <OffsetPaginationPrimitive.Item key={`ellipsis-${index}`}>
              <OffsetPaginationPrimitive.Ellipsis />
            </OffsetPaginationPrimitive.Item>
          ) : (
            <OffsetPaginationPrimitive.Item key={item.page}>
              <OffsetPaginationPrimitive.Link
                aria-current={item.page === currentPage ? 'page' : undefined}
                href={item.href}
              >
                {item.page}
              </OffsetPaginationPrimitive.Link>
            </OffsetPaginationPrimitive.Item>
          ),
        )}
      </OffsetPaginationPrimitive.List>
    </OffsetPaginationPrimitive.Root>
  );
}
