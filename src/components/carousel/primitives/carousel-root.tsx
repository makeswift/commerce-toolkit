'use client';

import { cn } from '@/lib';

import useEmblaCarousel from 'embla-carousel-react';
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import type { ComponentProps, KeyboardEvent } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselContext {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  colorScheme: 'light' | 'dark';
  hideOverflow: boolean;
}

export const CarouselContext = createContext<CarouselContext | null>(null);

export interface CarouselRootProps extends ComponentProps<'div'> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
  hideOverflow?: boolean;
  colorScheme?: 'light' | 'dark';
}

export function CarouselRoot({
  children,
  className,
  opts,
  plugins,
  setApi,
  hideOverflow = true,
  colorScheme = 'light',
  ...props
}: CarouselRootProps) {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);

  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  const contextValue = useMemo(
    () => ({
      carouselRef,
      api,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
      colorScheme,
      hideOverflow,
    }),
    [carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext],
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        aria-roledescription="carousel"
        className={cn('relative p-1.5 @container', hideOverflow && 'overflow-hidden', className)}
        onKeyDownCapture={handleKeyDown}
        role="region"
        data-slot="carousel-root"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <CarouselRoot />');
  }

  return context;
}
