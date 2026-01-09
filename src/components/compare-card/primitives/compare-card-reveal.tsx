import type { ComponentProps } from 'react';

import { Reveal } from '@/components/reveal';
import { cn } from '@/lib';

export type CompareCardRevealProps = ComponentProps<typeof Reveal>;

export function CompareCardReveal({ className, children, ...props }: CompareCardRevealProps) {
  return (
    <Reveal className={cn(className)} data-slot="compare-card-reveal" {...props}>
      {children}
    </Reveal>
  );
}
