import type { ReactNode } from 'react';

import * as AccordionPrimitive from '.';

interface AccordionItemData {
  title: string;
  content: ReactNode;
  value?: string;
}

export type AccordionProps = AccordionPrimitive.RootProps & {
  colorScheme?: 'light' | 'dark';
  items: AccordionItemData[];
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --accordion-focus: var(--primary);
 *   --acordion-light-offset: var(--background);
 *   --accordion-light-title-text: var(--contrast-400);
 *   --accordion-light-title-text-hover: var(--foreground);
 *   --accordion-light-title-icon: var(--contrast-500);
 *   --accordion-light-title-icon-hover: var(--foreground);
 *   --accordion-light-content-text: var(--foreground);
 *   --acordion-dark-offset: var(--foreground);
 *   --accordion-dark-title-text: var(--contrast-200);
 *   --accordion-dark-title-text-hover: var(--background);
 *   --accordion-dark-title-icon: var(--contrast-200);
 *   --accordion-dark-title-icon-hover: var(--background);
 *   --accordion-dark-content-text: var(--background);
 *   --accordion-title-font-family: var(--font-family-mono);
 *   --accordion-content-font-family: var(--font-family-body);
 * }
 * ```
 */
export function Accordion({ colorScheme = 'light', items, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Provider colorScheme={colorScheme}>
      <AccordionPrimitive.Root {...props}>
        {items.map((item, index) => (
          <AccordionPrimitive.Item key={index} value={item.title}>
            <AccordionPrimitive.Trigger>{item.title}</AccordionPrimitive.Trigger>
            <AccordionPrimitive.Content>{item.content}</AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </AccordionPrimitive.Provider>
  );
}
