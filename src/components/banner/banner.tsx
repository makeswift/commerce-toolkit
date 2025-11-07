'use client';

import type { ComponentProps } from 'react';

import * as BannerPrimitive from '@/components/banner';

export type BannerProps = ComponentProps<'div'> & {
  id: string;
  hideDismiss?: boolean;
  onDismiss?: () => void;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --banner-focus: hsl(var(--foreground));
 *   --banner-background: hsl(var(--primary));
 *   --banner-text: hsl(var(--foreground));
 *   --banner-close-icon: color-mix(in oklab, hsl(var(--foreground)) 50%, transparent);
 *   --banner-close-icon-hover: hsl(var(--foreground));
 *   --banner-close-background: transparent;
 *   --banner-close-background-hover: color-mix(in oklab, hsl(var(--background)) 40%, transparent);
 *   --banner-font-family: var(--font-family-body);
 * }
 * ```
 */
export const Banner = ({
  id,
  children,
  hideDismiss = false,
  className,
  onDismiss,
}: BannerProps) => {
  return (
    <BannerPrimitive.Provider hideDismiss={hideDismiss} id={id} onDismiss={onDismiss}>
      <BannerPrimitive.Root className={className}>
        <BannerPrimitive.Content>
          <BannerPrimitive.Text>{children}</BannerPrimitive.Text>
          <BannerPrimitive.Dismiss />
        </BannerPrimitive.Content>
      </BannerPrimitive.Root>
    </BannerPrimitive.Provider>
  );
};
