import type { ReactNode } from 'react';

import * as OffsetPaginationPrimitive from '@/components/offset-pagination';

export interface PageItem {
  href: string;
  page: number;
  asChild?: boolean;
  children?: ReactNode;
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
 *   --offset-pagination-font: var(--font-body);
 *   --offset-pagination-ellipsis: var(--foreground);
 *   --offset-pagination-text-primary: var(--text-primary);
 *   --offset-pagination-fill-hover: var(--contrast-100);
 *   --offset-pagination-fill-current: var(--foreground);
 *   --offset-pagination-text-current: var(--text-inverse);
 *   --offset-pagination-fill-current-hover: var(--contrast-500);
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
                asChild={item.asChild}
                href={item.href}
              >
                {item.asChild === true ? item.children : item.page}
              </OffsetPaginationPrimitive.Link>
            </OffsetPaginationPrimitive.Item>
          ),
        )}
      </OffsetPaginationPrimitive.List>
    </OffsetPaginationPrimitive.Root>
  );
}
