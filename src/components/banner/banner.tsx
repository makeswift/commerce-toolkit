import type { ReactNode } from 'react';

import * as BannerPrimitive from '@/components/banner';

export interface BannerProps {
  className?: string;
  id: string;
  hideDismiss?: boolean;
  children: ReactNode;
  onDismiss?: () => void;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --banner-focus: var(--foreground);
 *   --banner-background: var(--brand);
 *   --banner-text: var(--foreground);
 *   --banner-close-icon: color-mix(in oklab, var(--foreground) 50%, transparent);
 *   --banner-close-icon-hover: var(--foreground);
 *   --banner-close-background: transparent;
 *   --banner-close-background-hover: color-mix(in oklab, var(--background) 40%, transparent);
 *   --banner-font-family: var(--font-family-body);
 * }
 * ```
 */
export function Banner({ id, children, hideDismiss = false, className, onDismiss }: BannerProps) {
  return (
    <BannerPrimitive.Root
      className={className}
      hideDismiss={hideDismiss}
      id={id}
      onDismiss={onDismiss}
    >
      <BannerPrimitive.Content>
        <BannerPrimitive.Text>{children}</BannerPrimitive.Text>
        <BannerPrimitive.Dismiss />
      </BannerPrimitive.Content>
    </BannerPrimitive.Root>
  );
}
