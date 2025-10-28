'use client';

import { Sliders } from 'lucide-react';
import type { ReactNode } from 'react';

import { Button } from '@/components/button';
import * as SidePanelPrimitives from '@/components/side-panel';

export interface SidePanelProps {
  title: string;
  content: ReactNode;
  trigger?: ReactNode;
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
export function SidePanel({ title, content, trigger }: SidePanelProps) {
  return (
    <SidePanelPrimitives.Root>
      <SidePanelPrimitives.Trigger asChild>
        {trigger !== undefined ? (
          trigger
        ) : (
          <Button size="medium" variant="secondary">
            Filters
            <span className="hidden @xl:block">
              <Sliders size={20} />
            </span>
          </Button>
        )}
      </SidePanelPrimitives.Trigger>
      <SidePanelPrimitives.Content title={title}>
        <p className="text-lg text-contrast-500">{content}</p>
      </SidePanelPrimitives.Content>
    </SidePanelPrimitives.Root>
  );
}
