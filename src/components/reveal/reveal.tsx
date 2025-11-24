import type { ReactNode } from 'react';

import * as RevealPrimitive from '@/components/reveal';

export interface RevealProps {
  className?: string;
  variant?: 'underline' | 'button';
  showLabel?: string;
  hideLabel?: string;
  defaultOpen?: boolean;
  children: ReactNode;
  maxHeight?: number;
}

export function Reveal({
  className,
  variant = 'underline',
  showLabel = 'Show more',
  hideLabel = 'Show less',
  defaultOpen = false,
  maxHeight = 160,
  children,
}: RevealProps) {
  return (
    <RevealPrimitive.Root
      className={className}
      defaultOpen={defaultOpen}
      hideLabel={hideLabel}
      maxHeight={maxHeight}
      showLabel={showLabel}
      variant={variant}
    >
      <RevealPrimitive.Viewport>{children}</RevealPrimitive.Viewport>
      <RevealPrimitive.Controls>
        <RevealPrimitive.Trigger />
      </RevealPrimitive.Controls>
    </RevealPrimitive.Root>
  );
}
