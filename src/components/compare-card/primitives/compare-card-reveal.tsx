import type { ComponentProps } from 'react';

import { Reveal } from '@/components/reveal';

export type CompareCardRevealProps = ComponentProps<typeof Reveal>;

export function CompareCardReveal({ className, children, ...props }: CompareCardRevealProps) {
  return (
    <Reveal className={className} data-slot="compare-card-reveal" {...props}>
      {children}
    </Reveal>
  );
}
