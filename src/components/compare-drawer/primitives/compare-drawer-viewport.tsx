import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerViewportProps = ComponentProps<'div'>;

export function CompareDrawerViewport({
  className,
  children,
  ...props
}: CompareDrawerViewportProps) {
  return (
    <div
      className={cn(
        'sticky bottom-0 z-10 w-full border-t border-[var(--compare-drawer-card-border,hsl(var(--contrast-100)))] bg-[var(--compare-drawer-background,hsl(var(--background)))] px-3 py-4 @container @md:py-5 @xl:px-6 @5xl:px-10',
        className,
      )}
      data-slot="compare-drawer-viewport"
      {...props}
    >
      {children}
    </div>
  );
}
