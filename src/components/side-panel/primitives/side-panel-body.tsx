import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelBodyProps = ComponentProps<'div'>;

export function SidePanelBody({ children, className, ...props }: SidePanelBodyProps) {
  return (
    <div
      className={cn(
        'px-6 pb-6 text-[--side-panel-text-secondary,var(--text-secondary)] @md:px-8 @md:pb-8',
        className,
      )}
      data-slot="side-panel-body"
      {...props}
    >
      {children}
    </div>
  );
}
