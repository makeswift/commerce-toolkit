'use client';

import * as RevealPrimitive from '@/components/reveal';

import type { ReactNode } from 'react';

export interface RevealProps {
  className?: string;
  variant?: 'underline' | 'button';
  showLabel?: string;
  hideLabel?: string;
  defaultOpen?: boolean;
  children: ReactNode;
  maxHeight?: string;
}

export function Reveal({
  className,
  variant = 'underline',
  showLabel = 'Show more',
  hideLabel = 'Show less',
  defaultOpen = false,
  maxHeight = '10rem',
  children,
}: RevealProps) {
  return (
    <RevealPrimitive.Provider
      variant={variant}
      showLabel={showLabel}
      hideLabel={hideLabel}
      defaultOpen={defaultOpen}
      maxHeight={maxHeight}
    >
      <RevealPrimitive.Root className={className}>
        <RevealPrimitive.Viewport>{children}</RevealPrimitive.Viewport>
        <RevealPrimitive.Controls>
          <RevealPrimitive.Trigger />
        </RevealPrimitive.Controls>
      </RevealPrimitive.Root>
    </RevealPrimitive.Provider>
  );
}
