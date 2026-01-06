import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerFallbackProps = ComponentProps<'span'> & {
  children: string;
};

export function CompareDrawerFallback({
  children,
  className,
  ...props
}: CompareDrawerFallbackProps) {
  return (
    <span
      className={cn(
        'flex h-full w-full items-center justify-center break-all p-1 text-xs text-[var(--compare-drawer-empty-image-text,var(--brand-shadow))] opacity-20',
        className,
      )}
      data-slot="compare-drawer-fallback"
      {...props}
    >
      {children
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)}
    </span>
  );
}
