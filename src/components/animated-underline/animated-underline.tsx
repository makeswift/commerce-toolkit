import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type AnimatedUnderlineProps = ComponentProps<'span'> & {
  children: string;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --animated-underline: var(--brand);
 * }
 * ```
 */
export function AnimatedUnderline({ className, children, ...props }: AnimatedUnderlineProps) {
  return (
    <span
      className={cn(
        'origin-left font-semibold text-inherit transition-[background-size] duration-300 [background:linear-gradient(0deg,var(--animated-underline,var(--brand)),var(--animated-underline,var(--brand)))_no-repeat_left_bottom_/_0_2px] [font-family:inherit]',
        // Hover state
        'hover:bg-[size:100%_2px]',
        // Group focus state
        'group-focus/underline:bg-[size:100%_2px]',
        className,
      )}
      data-slot="animated-underline"
      {...props}
    >
      {children}
    </span>
  );
}
