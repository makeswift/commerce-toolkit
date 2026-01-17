import type { ReactNode } from 'react';

import * as BannerPrimitive from '@/components/banner';

export interface BannerProps {
  className?: string;
  id: string;
  hideDismiss?: boolean;
  children: ReactNode;
  onDismiss?: () => void;
  dismissIcon?: {
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
 *   --banner-text: var(--text-primary);
 *   --banner-fill: var(--brand);
 *   --banner-fill-icon: var(--contrast-400);
 *   --banner-font: var(--font-body);
 * }
 * ```
 */
export function Banner({
  id,
  children,
  hideDismiss = false,
  className,
  onDismiss,
  dismissIcon,
}: BannerProps) {
  return (
    <BannerPrimitive.Root
      className={className}
      hideDismiss={hideDismiss}
      id={id}
      onDismiss={onDismiss}
    >
      <BannerPrimitive.Content>
        <BannerPrimitive.Text>{children}</BannerPrimitive.Text>
        <BannerPrimitive.Dismiss>
          <BannerPrimitive.DismissIcon asChild={dismissIcon?.asChild}>
            {dismissIcon?.children}
          </BannerPrimitive.DismissIcon>
        </BannerPrimitive.Dismiss>
      </BannerPrimitive.Content>
    </BannerPrimitive.Root>
  );
}
