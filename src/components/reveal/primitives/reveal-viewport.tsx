'use client';

import type { ComponentProps } from 'react';

export type RevealViewportProps = ComponentProps<'div'>;

import { useReveal } from '@/components/reveal';
import { cn } from '@/lib';

export function RevealViewport({ children, className, ...props }: RevealViewportProps) {
  const { hasOverflow, isOpen, maxHeight, contentRef } = useReveal();

  return (
    <div
      className={cn(
        hasOverflow &&
          !isOpen &&
          '[mask-image:linear-gradient(to_top,transparent,black_50px,black_calc(100%-50px))]',
        'overflow-hidden',
        className,
      )}
      ref={contentRef}
      style={{ maxHeight: isOpen ? 'none' : maxHeight }}
      {...props}
    >
      {children}
    </div>
  );
}
