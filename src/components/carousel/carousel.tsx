'use client';

import type { ComponentProps, ReactNode } from 'react';

import * as CarouselPrimitive from '@/components/carousel';

export type CarouselProps = ComponentProps<typeof CarouselPrimitive.Root> & {
  items: ReactNode[];
  showScrollbar?: boolean;
  showNav?: boolean;
  prevIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  nextIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
    --carousel-light-scrollbar: var(--foreground);
    --carousel-dark-scrollbar: var(--background);
    --carousel-focus: var(--brand);
    --carousel-light-button: var(--foreground);
    --carousel-dark-button: var(--background);
 * }
 * ```
 */
export function Carousel({
  className,
  items,
  showScrollbar = true,
  showNav = true,
  prevIcon,
  nextIcon,
  ...props
}: CarouselProps) {
  return (
    <CarouselPrimitive.Root className={className} {...props}>
      <CarouselPrimitive.Viewport>
        <CarouselPrimitive.Content>
          {items.map((item, idx) => (
            <CarouselPrimitive.Item key={idx}>{item}</CarouselPrimitive.Item>
          ))}
        </CarouselPrimitive.Content>
      </CarouselPrimitive.Viewport>
      <CarouselPrimitive.Controls>
        {showScrollbar && <CarouselPrimitive.Scrollbar />}
        {showNav && (
          <CarouselPrimitive.Nav>
            <CarouselPrimitive.Prev>
              <CarouselPrimitive.PrevIcon asChild={prevIcon?.asChild}>
                {prevIcon?.children}
              </CarouselPrimitive.PrevIcon>
            </CarouselPrimitive.Prev>
            <CarouselPrimitive.Next>
              <CarouselPrimitive.NextIcon asChild={nextIcon?.asChild}>
                {nextIcon?.children}
              </CarouselPrimitive.NextIcon>
            </CarouselPrimitive.Next>
          </CarouselPrimitive.Nav>
        )}
      </CarouselPrimitive.Controls>
    </CarouselPrimitive.Root>
  );
}
