import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type AnimatedUnderlineProps = ComponentProps<'span'> & {
  children: string;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --animated-underline-hover: hsl(var(--primary));
 *   --animated-underline-text: hsl(var(--foreground));
 *   --animated-underline-font-family: var(--font-family-body);
 * }
 * ```
 */
export function AnimatedUnderline({ className, children, ...props }: AnimatedUnderlineProps) {
  return (
    <span
      className={cn(
        'origin-left font-semibold leading-normal text-[var(--animated-underline-text,hsl(var(--foreground)))] transition-[background-size] duration-300 [background:linear-gradient(0deg,var(--animated-underline-hover,hsl(var(--primary))),var(--animated-underline-hover,hsl(var(--primary))))_no-repeat_left_bottom_/_0_2px] [font-family:var(--animated-underline-font-family,var(--font-family-body))] hover:bg-[size:100%_2px] group-focus/underline:bg-[size:100%_2px]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
