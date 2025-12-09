import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelHeaderProps = ComponentProps<'div'>;

export function SidePanelHeader({ children, className, ...props }: SidePanelHeaderProps) {
  return (
    <header
      className={cn(
        'flex items-center justify-between gap-2 px-6 pb-4 pt-4 @md:px-8 @md:pt-7',
        className,
      )}
      data-slot="side-panel-header"
      {...props}
    >
      {children}
    </header>
  );
}
