import type { ComponentProps } from 'react';

import { ScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib';

export type SidePanelScrollAreaProps = ComponentProps<typeof ScrollArea>;

export function SidePanelScrollArea({ className, children, ...props }: SidePanelScrollAreaProps) {
  return (
    <ScrollArea className={cn(className)} data-slot="side-panel-scroll-area" {...props}>
      {children}
    </ScrollArea>
  );
}
