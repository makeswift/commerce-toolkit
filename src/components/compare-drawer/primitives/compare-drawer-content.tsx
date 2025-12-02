import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerContentProps = ComponentProps<'div'>;

export function CompareDrawerContent({ children, className, ...props }: CompareDrawerContentProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-7xl flex-col items-start justify-end gap-x-3 gap-y-4 @md:flex-row',
        className,
      )}
      data-slot="compare-drawer-content"
      {...props}
    >
      {children}
    </div>
  );
}
