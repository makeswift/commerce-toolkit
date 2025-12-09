import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelBodyProps = ComponentProps<'div'>;

export function SidePanelBody({ children, className, ...props }: SidePanelBodyProps) {
  return (
    <div className={cn('px-6 pb-6 @md:px-8 @md:pb-8', className)} {...props}>
      {children}
    </div>
  );
}
