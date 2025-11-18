import type { ReactNode } from 'react';

import * as ScrollAreaPrimitives from '@/components/scroll-area';

export interface ScrollAreaProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal' | 'both';
  scrollHideDelay?: number;
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  children: ReactNode;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --scroll-area-background: var(--contrast-100);
 *   --scroll-area-thumb: var(--contrast-200);
 * }
 * ```
 */
export function ScrollArea({
  className,
  children,
  orientation = 'vertical',
  scrollHideDelay = 500,
  type = 'hover',
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitives.Provider
      orientation={orientation}
      scrollHideDelay={scrollHideDelay}
      type={type}
    >
      <ScrollAreaPrimitives.Root className={className}>
        <ScrollAreaPrimitives.Viewport>{children}</ScrollAreaPrimitives.Viewport>
        <ScrollAreaPrimitives.Bar>
          <ScrollAreaPrimitives.Thumb />
        </ScrollAreaPrimitives.Bar>
        <ScrollAreaPrimitives.Corner />
      </ScrollAreaPrimitives.Root>
    </ScrollAreaPrimitives.Provider>
  );
}
