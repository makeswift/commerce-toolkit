'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import * as CursorPaginationPrimitive from '@/components/cursor-pagination';

export interface CursorPaginationProps {
  previousHref?: string | null;
  nextHref?: string | null;
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --cursor-pagination-focus: var(--brand);
 *   --cursor-pagination-border: var(--contrast-100);
 *   --cursor-pagination-border-hover: var(--contrast-200);
 *   --cursor-pagination-icon: var(--foreground);
 *   --cursor-pagination-background: var(--background);
 *   --cursor-pagination-background-hover: var(--contrast-100);
 * }
 * ```
 */
export function CursorPagination({
  previousHref,
  nextHref,
  label = 'pagination',
  previousLabel = 'Go to previous page',
  nextLabel = 'Go to next page',
}: CursorPaginationProps) {
  return (
    <CursorPaginationPrimitive.Root aria-label={label} role="navigation">
      <CursorPaginationPrimitive.List>
        <CursorPaginationPrimitive.Item>
          {previousHref != null ? (
            <CursorPaginationPrimitive.Link aria-label={previousLabel} href={previousHref}>
              <ArrowLeft absoluteStrokeWidth size={24} strokeWidth={1} />
            </CursorPaginationPrimitive.Link>
          ) : (
            <CursorPaginationPrimitive.Link aria-disabled aria-label={previousLabel}>
              <ArrowLeft absoluteStrokeWidth size={24} strokeWidth={1} />
            </CursorPaginationPrimitive.Link>
          )}
        </CursorPaginationPrimitive.Item>
        <CursorPaginationPrimitive.Item>
          {nextHref != null ? (
            <CursorPaginationPrimitive.Link aria-label={nextLabel} href={nextHref}>
              <ArrowRight absoluteStrokeWidth size={24} strokeWidth={1} />
            </CursorPaginationPrimitive.Link>
          ) : (
            <CursorPaginationPrimitive.Link aria-disabled aria-label={previousLabel}>
              <ArrowRight absoluteStrokeWidth size={24} strokeWidth={1} />
            </CursorPaginationPrimitive.Link>
          )}
        </CursorPaginationPrimitive.Item>
      </CursorPaginationPrimitive.List>
    </CursorPaginationPrimitive.Root>
  );
}
