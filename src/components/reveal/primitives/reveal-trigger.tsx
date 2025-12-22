'use client';

import type { ComponentProps } from 'react';

import { AnimatedUnderline } from '@/components/animated-underline';
import { Button } from '@/components/button';
import { useReveal } from '@/components/reveal';
import { cn } from '@/lib';

export type RevealTriggerProps = ComponentProps<'button'>;

export function RevealTrigger({ children, className, ...props }: RevealTriggerProps) {
  const { variant, showLabel, hideLabel, isOpen, toggleOpen } = useReveal();

  return (
    <>
      {variant === 'underline' && (
        <button
          className={cn('group/underline text-sm focus:outline-none', className)}
          onClick={() => toggleOpen()}
          type="button"
          {...props}
        >
          <AnimatedUnderline>{isOpen ? hideLabel : showLabel}</AnimatedUnderline>
        </button>
      )}
      {variant === 'button' && (
        <Button
          className={className}
          onClick={() => toggleOpen()}
          size="x-small"
          type="button"
          variant="outline"
          {...props}
        >
          {isOpen ? hideLabel : showLabel}
        </Button>
      )}
    </>
  );
}
