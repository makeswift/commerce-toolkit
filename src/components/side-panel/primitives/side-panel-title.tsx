import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelTitleProps = ComponentProps<typeof Dialog.Title>;

export function SidePanelTitle({ children, className, ...props }: SidePanelTitleProps) {
  return (
    <Dialog.Title
      className={cn(
        'text-2xl font-medium text-[var(--side-panel-title-text,hsl(var(--foreground)))] [font-family:var(--side-panel-title-font-family,var(--font-family-heading))] @lg:text-3xl',
        className,
      )}
      data-slot="side-panel-title"
      {...props}
    >
      {children}
    </Dialog.Title>
  );
}
