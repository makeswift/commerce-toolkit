'use client';

import type { ComponentProps } from 'react';

import { useReveal } from '@/components/reveal';
import { cn } from '@/lib';

export type RevealControlsProps = ComponentProps<'div'>;

export function RevealControls({ children, className, ...props }: RevealControlsProps) {
  const { hasOverflow } = useReveal();

  if (!hasOverflow) return null;

  return (
    <div
      className={cn('flex w-full items-end pt-4', className)}
      data-slot="reveal-controls"
      {...props}
    >
      {children}
    </div>
  );
}
