import * as ScrollAreaPrimitives from '@/components/scroll-area';

export type ScrollAreaProps = Pick<
  ScrollAreaPrimitives.RootProps,
  'className' | 'children' | 'orientation'
>;

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
export function ScrollArea({ className, children, orientation }: ScrollAreaPrimitives.RootProps) {
  return (
    <ScrollAreaPrimitives.Root
      className={className}
      orientation={orientation}
      scrollHideDelay={500}
      type="hover"
    >
      {children}
      <ScrollAreaPrimitives.Bar />
    </ScrollAreaPrimitives.Root>
  );
}
