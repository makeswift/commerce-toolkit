import type { ReactNode } from 'react';

import { AnimatedUnderline } from '@/components/animated-underline';
import * as BreadcrumbsPrimitive from '@/components/breadcrumbs';
import { cn } from '@/lib';

interface Breadcrumb {
  label: string;
  href: string;
  asChild?: boolean;
  children?: ReactNode;
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
  ariaLabel?: string;
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --breadcrumbs-font:           var(--font-body);
 *   --breadcrumbs-text-primary:   var(--primary-text);
 *   --breadcrumbs-text-secondary: var(--text-secondary);
 *   --breadcrumbs-fill-icon:      var(--contrast-400);
 * }
 * ```
 */
export function Breadcrumbs({
  breadcrumbs,
  className,
  ariaLabel = 'Breadcrumb',
  icon,
}: BreadcrumbsProps) {
  return (
    <BreadcrumbsPrimitive.Root aria-label={ariaLabel} className={cn(className)}>
      <BreadcrumbsPrimitive.List>
        {breadcrumbs.map(({ label, href, asChild, children }, index) => {
          if (index < breadcrumbs.length - 1) {
            return (
              <BreadcrumbsPrimitive.Item key={href}>
                <BreadcrumbsPrimitive.Link asChild={asChild === true} href={href}>
                  {asChild === true ? children : <AnimatedUnderline>{label}</AnimatedUnderline>}
                </BreadcrumbsPrimitive.Link>
                <BreadcrumbsPrimitive.Icon asChild={icon?.asChild === true}>
                  {icon?.children}
                </BreadcrumbsPrimitive.Icon>
              </BreadcrumbsPrimitive.Item>
            );
          }

          return (
            <BreadcrumbsPrimitive.Item key={href}>
              <BreadcrumbsPrimitive.Current>{label}</BreadcrumbsPrimitive.Current>
            </BreadcrumbsPrimitive.Item>
          );
        })}
      </BreadcrumbsPrimitive.List>
    </BreadcrumbsPrimitive.Root>
  );
}
