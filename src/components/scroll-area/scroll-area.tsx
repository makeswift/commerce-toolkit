import type { ComponentProps } from 'react';

import * as ScrollAreaPrimitives from '@/components/scroll-area';

export interface ScrollAreaProps extends ComponentProps<typeof ScrollAreaPrimitives.Root> {
  orientation?: 'vertical' | 'horizontal' | 'both';
  scrollHideDelay?: number;
  type?: 'auto' | 'always' | 'scroll' | 'hover';
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --scroll-area-fill: var(--contrast-200);
 * }
 * ```
 */
export function ScrollArea({
  className,
  children,
  orientation = 'vertical',
  scrollHideDelay = 500,
  type = 'hover',
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitives.Provider
      orientation={orientation}
      scrollHideDelay={scrollHideDelay}
      type={type}
    >
      <ScrollAreaPrimitives.Root className={className} {...props}>
        <ScrollAreaPrimitives.Viewport>{children}</ScrollAreaPrimitives.Viewport>
        <ScrollAreaPrimitives.Bar>
          <ScrollAreaPrimitives.Thumb />
        </ScrollAreaPrimitives.Bar>
        <ScrollAreaPrimitives.Corner />
      </ScrollAreaPrimitives.Root>
    </ScrollAreaPrimitives.Provider>
  );
}
