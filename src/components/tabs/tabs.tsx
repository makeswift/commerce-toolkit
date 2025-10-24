'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from 'react';

interface Tab {
  value: string;
  label: string;
  content: ReactNode;
}

export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  className?: string;
  defaultValue: string;
  tabs: Tab[];
};

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
    <TabsPrimitive.Root className={clsx(className)} defaultValue={defaultValue} {...props}>
      <TabsList>
        {tabs.map(({ value, label }) => (
          <TabsTrigger key={value} value={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </TabsPrimitive.Root>
  );
}

export type TabsListProps = ComponentPropsWithRef<typeof TabsPrimitive.List>;

function TabsList({ ref, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className="flex flex-wrap border-b border-[var(--tabs-border,hsl(var(--contrast-100)))]"
      ref={ref}
      {...props}
    />
  );
}

function TabsTrigger({ ref, ...props }: ComponentPropsWithRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className='relative p-4 text-sm font-[var(--tabs-font-family,var(--font-family-body))] font-semibold text-[var(--tabs-text,hsl(var(--contrast-500)))] transition-colors duration-200 ease-linear after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-bottom after:scale-y-0 after:bg-[var(--tabs-underline-default,hsl(var(--contrast-200)))] after:transition-all after:duration-200 after:ease-linear after:content-[""] hover:text-[var(--tabs-text-hover,hsl(var(--foreground)))] hover:after:scale-y-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tabs-focus,hsl(var(--primary)))] disabled:pointer-events-none disabled:text-[var(--tabs-text,hsl(var(--contrast-500)))] data-[state=active]:text-[var(--tabs-text-active,hsl(var(--foreground)))] data-[state=active]:after:scale-y-100 data-[state=active]:after:bg-[var(--tabs-underline-active,hsl(var(--primary)))] data-[state=inactive]:hover:after:bg-[var(--tabs-underline-hover,hsl(var(--contrast-200)))]'
      ref={ref}
      {...props}
    />
  );
}

function TabsContent({ ref, ...props }: ComponentPropsWithRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tabs-focus,hsl(var(--primary)))] focus-visible:ring-offset-2"
      ref={ref}
      {...props}
    />
  );
}
