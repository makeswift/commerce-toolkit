'use client';

import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import * as SidePanelPrimitive from '@/components/side-panel';

export interface SidePanelProps {
  title: string;
  children: ReactNode;
  trigger?: ReactNode;
  container?: HTMLElement | null;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --side-panel-overlay-background: color-mix(in oklab, var(--foreground) 50%, transparent);
 *   --side-panel-background: var(--background);
 *   --side-panel-title-text: var(--foreground);
 *   --side-panel-title-font-family: var(--font-family-heading);
 *   --side-panel-content-font-family: var(--font-family-body);
 *   --side-panel-overlay-background: color-mix(in oklab, var(--foreground) 50%, transparent);
 *   --side-panel-background: var(--background);
 *   --side-panel-title-text: var(--foreground);
 *   --side-panel-title-font-family: var(--font-family-heading);
 *   --side-panel-content-font-family: var(--font-family-body);
 * }
 * ```
 */
export function SidePanel({ title, children, trigger, container }: SidePanelProps) {
  return (
    <SidePanelPrimitive.Root>
      <SidePanelPrimitive.Trigger asChild>{trigger}</SidePanelPrimitive.Trigger>
      <SidePanelPrimitive.Portal container={container}>
        <SidePanelPrimitive.Overlay>
          <SidePanelPrimitive.Content forceMount>
            <SidePanelPrimitive.Header>
              <SidePanelPrimitive.Title>{title}</SidePanelPrimitive.Title>
              <SidePanelPrimitive.CloseButton
                icon={{ children: <X size={20} strokeWidth={1} /> }}
              />
            </SidePanelPrimitive.Header>
            <SidePanelPrimitive.ScrollArea>
              <SidePanelPrimitive.Body>{children}</SidePanelPrimitive.Body>
            </SidePanelPrimitive.ScrollArea>
          </SidePanelPrimitive.Content>
        </SidePanelPrimitive.Overlay>
      </SidePanelPrimitive.Portal>
    </SidePanelPrimitive.Root>
  );
}
