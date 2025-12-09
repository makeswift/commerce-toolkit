import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelCloseProps = ComponentProps<typeof Dialog.Close>;

export function SidePanelClose({ children, className, ...props }: SidePanelCloseProps) {
  return (
    <Dialog.Close className={cn(className)} data-slot="side-panel-close" {...props}>
      {children}
    </Dialog.Close>
  );
}
