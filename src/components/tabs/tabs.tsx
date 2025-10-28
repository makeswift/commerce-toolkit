'use client';

import { ReactNode } from 'react';

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
 *   --tabs-focus: hsl(var(--primary));
 *   --tabs-font-family: var(--font-family-body);
 *   --tabs-text: hsl(var(--contrast-500));
 *   --tabs-text-hover: hsl(var(--foreground));
 *   --tabs-text-active: hsl(var(--foreground));
 *   --tabs-underline-default: hsl(var(--contrast-200));
 *   --tabs-underline-active: hsl(var(--primary));
 *   --tabs-underline-hover: hsl(var(--contrast-200));
 *   --tabs-border: hsl(var(--contrast-100));
 * }
 * ```
 */
export function Tabs({ className, defaultValue, tabs, ...props }: TabsProps) {
  return (
    <TabsPrimitives.Root className={className} defaultValue={defaultValue} {...props}>
      <TabsPrimitives.List>
        {tabs.map(({ value, label }) => (
          <TabsPrimitives.Trigger key={value} value={value}>
            {label}
          </TabsPrimitives.Trigger>
        ))}
      </TabsPrimitives.List>
      {tabs.map(({ value, content }) => (
        <TabsPrimitives.Content key={value} value={value}>
          {content}
        </TabsPrimitives.Content>
      ))}
    </TabsPrimitives.Root>
  );
}
