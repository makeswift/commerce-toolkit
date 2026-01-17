import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerTitleProps = ComponentProps<'span'>;

export function CompareDrawerTitle({ children, className, ...props }: CompareDrawerTitleProps) {
  return (
    <span
      className={cn(
        'hidden truncate pl-3 pr-5 text-[--compare-drawer-text-primary,var(--text-primary)] @4xl:block',
        className,
      )}
      data-slot="compare-drawer-title"
      {...props}
    >
      {children}
    </span>
  );
}
