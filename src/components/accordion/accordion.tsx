import type { ReactNode } from 'react';

import * as AccordionPrimitive from '@/components/accordion';

interface BaseAccordionProps {
  className?: string;
  colorScheme: 'light' | 'dark';
  items: Array<{
    title: string;
    content: ReactNode;
    value: string;
  }>;
}

interface AccordionSingleProps extends BaseAccordionProps {
  type: 'single';
  collapsible?: boolean;
  defaultValue?: string;
}

interface AccordionMultipleProps extends BaseAccordionProps {
  type: 'multiple';
  defaultValue?: string[];
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

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
export function Accordion({ className, colorScheme = 'light', items, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Provider colorScheme={colorScheme} items={items}>
      <AccordionPrimitive.Root className={className} {...props}>
        {items.map((item) => {
          return (
            <AccordionPrimitive.ItemProvider
              content={item.content}
              key={item.value}
              title={item.title}
              value={item.value}
            >
              <AccordionPrimitive.Item>
                <AccordionPrimitive.Trigger />
                <AccordionPrimitive.Content />
              </AccordionPrimitive.Item>
            </AccordionPrimitive.ItemProvider>
          );
        })}
      </AccordionPrimitive.Root>
    </AccordionPrimitive.Provider>
  );
}
