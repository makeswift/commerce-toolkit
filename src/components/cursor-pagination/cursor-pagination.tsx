import type { ReactNode } from 'react';

import * as CursorPaginationPrimitive from '@/components/cursor-pagination';

export interface CursorPaginationProps {
  previousLink?: {
    href?: string | null;
    asChild?: boolean;
    children?: ReactNode;
  };
  previousIcon?: {
    label?: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  nextLink?: {
    href?: string | null;
    asChild?: boolean;
    children?: ReactNode;
  };
  nextIcon?: {
    label?: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  label?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --cursor-pagination-fill: var(--background);
 *   --cursor-pagination-fill-hover: var(--contrast-100);
 *   --cursor-pagination-fill-icon: var(--foreground);
 * }
 * ```
 */
export function CursorPagination({
  previousLink,
  previousIcon,
  nextLink,
  nextIcon,
  label = 'pagination',
}: CursorPaginationProps) {
  const previousLabel = previousIcon?.label ?? 'Go to previous page';
  const nextLabel = nextIcon?.label ?? 'Go to next page';

  const previousHref = previousLink?.href;
  const nextHref = nextLink?.href;

  const previousLinkAsChild = previousLink?.asChild === true;
  const nextLinkAsChild = nextLink?.asChild === true;

  const previousIconContent = (
    <CursorPaginationPrimitive.PreviousIcon asChild={previousIcon?.asChild}>
      {previousIcon?.children}
    </CursorPaginationPrimitive.PreviousIcon>
  );

  const nextIconContent = (
    <CursorPaginationPrimitive.NextIcon asChild={nextIcon?.asChild}>
      {nextIcon?.children}
    </CursorPaginationPrimitive.NextIcon>
  );

  return (
    <CursorPaginationPrimitive.Root aria-label={label} role="navigation">
      <CursorPaginationPrimitive.List>
        <CursorPaginationPrimitive.Item>
          {previousHref != null ? (
            <CursorPaginationPrimitive.Link
              aria-label={previousLabel}
              asChild={previousLinkAsChild}
              href={previousHref}
            >
              {previousLinkAsChild ? previousLink.children : previousIconContent}
            </CursorPaginationPrimitive.Link>
          ) : (
            <CursorPaginationPrimitive.Link aria-disabled aria-label={previousLabel}>
              {previousIconContent}
            </CursorPaginationPrimitive.Link>
          )}
        </CursorPaginationPrimitive.Item>
        <CursorPaginationPrimitive.Item>
          {nextHref != null ? (
            <CursorPaginationPrimitive.Link
              aria-label={nextLabel}
              asChild={nextLinkAsChild}
              href={nextHref}
            >
              {nextLinkAsChild ? nextLink.children : nextIconContent}
            </CursorPaginationPrimitive.Link>
          ) : (
            <CursorPaginationPrimitive.Link aria-disabled aria-label={nextLabel}>
              {nextIconContent}
            </CursorPaginationPrimitive.Link>
          )}
        </CursorPaginationPrimitive.Item>
      </CursorPaginationPrimitive.List>
    </CursorPaginationPrimitive.Root>
  );
}
