'use client';

import type { ComponentProps } from 'react';

import { useReveal } from '@/components/reveal';
import { cn } from '@/lib';

export type RevealViewportProps = ComponentProps<'div'>;

export function RevealViewport({ children, className, ...props }: RevealViewportProps) {
  const { contentRef } = useReveal();

  return (
    <div
      className={cn(
        'max-h-[--reveal-max-height] overflow-hidden',
        // Open state
        'group-data-[open=true]/reveal:max-h-none',
        // Overflow + Closed state (show gradient mask)
        'group-data-[overflow=true]/reveal:group-data-[open=false]/reveal:[mask-image:linear-gradient(to_top,transparent,black_50px,black_calc(100%-50px))]',
        className,
      )}
      data-slot="reveal-viewport"
      ref={contentRef}
      {...props}
    >
      {children}
    </div>
  );
}
