import type { ComponentProps } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib';

import { useCarousel } from '@/components/carousel';

export type CarouselScrollbarProps = ComponentProps<'div'>;

export function CarouselScrollbar({ className }: CarouselScrollbarProps) {
  const { api, canScrollPrev, canScrollNext, colorScheme } = useCarousel();

  const [progress, setProgress] = useState(0);

  const [scrollbarPosition, setScrollbarPosition] = useState({ width: 0, left: 0 });

  const findClosestSnap = useCallback(
    (nextProgress: number) => {
      if (!api) return 0;

      const point = nextProgress / 100;
      const snapList = api.scrollSnapList();

      if (snapList.length === 0) return -1;

      const closestSnap = snapList.reduce((prev, curr) =>
        Math.abs(curr - point) < Math.abs(prev - point) ? curr : prev,
      );

      return snapList.findIndex((snap) => snap === closestSnap);
    },
    [api],
  );

  useEffect(() => {
    if (!api) return;

    const snapList = api.scrollSnapList();
    const closestSnapIndex = findClosestSnap(progress);
    const scrollbarWidth = 100 / snapList.length;
    const scrollbarLeft = (closestSnapIndex / snapList.length) * 100;

    setScrollbarPosition({ width: scrollbarWidth, left: scrollbarLeft });

    api.scrollTo(closestSnapIndex);
  }, [progress, api, findClosestSnap]);

  useEffect(() => {
    if (!api) return;

    function onScroll() {
      if (!api) return;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setProgress(api.scrollSnapList()[api.selectedScrollSnap()]! * 100);
    }

    api.on('select', onScroll);
    api.on('scroll', onScroll);
    api.on('reInit', onScroll);

    return () => {
      api.off('select', onScroll);
      api.off('scroll', onScroll);
      api.off('reInit', onScroll);
    };
  }, [api]);

  return (
    <div
      className={cn(
        'relative flex h-6 w-full max-w-56 items-center overflow-hidden',
        !canScrollPrev && !canScrollNext && 'pointer-events-none invisible',
        className,
      )}
      data-slot="carousel-scrollbar"
    >
      <input
        aria-label="Carousel scrollbar"
        aria-orientation="horizontal"
        aria-valuenow={progress}
        aria-valuetext={`${Math.round(progress)}%`}
        className="absolute h-full w-full cursor-pointer appearance-none bg-transparent opacity-0"
        max={100}
        min={0}
        onChange={(e) => setProgress(e.currentTarget.valueAsNumber)}
        type="range"
        value={progress}
      />
      {/* Track */}
      <div
        className={cn(
          'pointer-events-none absolute h-1 w-full rounded-full opacity-10',
          {
            light: 'bg-[var(--carousel-light-scrollbar,hsl(var(--foreground)))]',
            dark: 'bg-[var(--carousel-dark-scrollbar,hsl(var(--background)))]',
          }[colorScheme],
        )}
        data-slot="carousel-track"
      />
      {/* Bar */}
      <div
        className={cn(
          'pointer-events-none absolute h-1 rounded-full transition-all ease-out',
          {
            light: 'bg-[var(--carousel-light-scrollbar,hsl(var(--foreground)))]',
            dark: 'bg-[var(--carousel-dark-scrollbar,hsl(var(--background)))]',
          }[colorScheme],
        )}
        style={{
          width: `${scrollbarPosition.width}%`,
          left: `${scrollbarPosition.left}%`,
        }}
        data-slot="carousel-bar"
      />
    </div>
  );
}
