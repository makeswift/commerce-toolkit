'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

export type SidePanelPortalProps = ComponentProps<typeof Dialog.Portal>;

export function SidePanelPortal({ children, ...props }: SidePanelPortalProps) {
  return (
    <Dialog.Portal data-slot="side-panel-portal" {...props}>
      {children}
    </Dialog.Portal>
  );
}
