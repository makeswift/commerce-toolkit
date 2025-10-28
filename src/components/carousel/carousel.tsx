'use client';

import type {
  CarouselApi as CarouselApiType,
  CarouselProps as CarouselProviderProps,
} from './primitives/carousel-provider';
import { CarouselProvider } from './primitives/carousel-provider';
import { CarouselRoot } from './primitives/carousel-root';

export type CarouselApi = CarouselApiType;
export type CarouselProps = CarouselProviderProps;

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
    --carousel-light-scrollbar: hsl(var(--foreground));
    --carousel-dark-scrollbar: hsl(var(--background));
    --carousel-focus: hsl(var(--primary));
    --carousel-light-button: hsl(var(--foreground));
    --carousel-dark-button: hsl(var(--background));
 * }
 * ```
 */

/**
 * Main Carousel component that wraps children with provider and keyboard navigation
 */
function Carousel({ opts, setApi, plugins, ...props }: CarouselProps) {
  return (
    <CarouselProvider opts={opts} plugins={plugins} setApi={setApi}>
      <CarouselRoot {...props} />
    </CarouselProvider>
  );
}

export { Carousel };
