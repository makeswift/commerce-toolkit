'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';
import { useReveal } from '@/components/reveal';

export type RevealControlsProps = ComponentProps<'div'>;

export function RevealControls({ children, className, ...props }: RevealControlsProps) {
  const { hasOverflow } = useReveal();

  if (!hasOverflow) return null;

  return (
    <div className={cn('flex w-full items-end pt-4', className)} {...props}>
      {children}
    </div>
  );
}
