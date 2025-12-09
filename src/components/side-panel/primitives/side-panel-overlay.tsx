import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelOverlayProps = ComponentProps<typeof Dialog.Overlay>;

export function SidePanelOverlay({ children, className, ...props }: SidePanelOverlayProps) {
  return (
    <Dialog.Overlay
      className={cn(
        'fixed inset-0 z-30 overflow-hidden bg-[var(--side-panel-overlay-background,color-mix(in_oklab,hsl(var(--foreground))_50%,transparent))] @container',
        className,
      )}
      data-slot="side-panel-overlay"
      {...props}
    >
      {children}
    </Dialog.Overlay>
  );
}
