import type { ReactNode } from 'react';

import * as TabsPrimitives from '@/components/tabs';

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps extends TabsPrimitives.RootProps {
  className?: string;
  defaultValue: string;
  tabs: Tab[];
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --tabs-text: var(--text-secondary);
 *   --tabs-text-hover: var(--text-primary);
 *   --tabs-text-active: var(--text-primary);
 *   --tabs-font: var(--font-body);
 *   --tabs-underline: var(--contrast-200);
 *   --tabs-underline-active: var(--brand);
 * }
 * ```
 */
export function Tabs({ className, defaultValue, tabs, ...props }: TabsProps) {
  return (
    <TabsPrimitives.Root className={className} defaultValue={defaultValue} {...props}>
      <TabsPrimitives.List>
        {tabs.map(({ label, value }) => (
          <TabsPrimitives.Trigger key={value} value={value}>
            {label}
          </TabsPrimitives.Trigger>
        ))}
      </TabsPrimitives.List>
      {tabs.map(({ content, value }) => (
        <TabsPrimitives.Content key={value} value={value}>
          {content}
        </TabsPrimitives.Content>
      ))}
    </TabsPrimitives.Root>
  );
}
