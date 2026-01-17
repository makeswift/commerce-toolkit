import type { ReactNode } from 'react';

import * as AccordionPrimitive from '@/components/accordion';

interface BaseAccordionProps {
  className?: string;
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
 *   --accordion-text-primary: var(--text-primary);
 *   --accordion-text-secondary: var(--text-secondary);
 *   --accordion-fill-icon: var(--contrast-400);
 *   --accordion-font-title: var(--font-heading);
 *   --accordion-font-body: var(--font-body);
 * }
 * ```
 */
export function Accordion({ className, items, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root className={className} {...props}>
      {items.map(({ content, title, value }) => (
        <AccordionPrimitive.Item key={value} value={value}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger>
              <AccordionPrimitive.Title>{title}</AccordionPrimitive.Title>
              <AccordionPrimitive.Chevron />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content>
            <AccordionPrimitive.Body>{content}</AccordionPrimitive.Body>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
