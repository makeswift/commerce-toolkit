import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface BannerDismissIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function BannerDismissIcon({
  asChild = false,
  className,
  children,
}: BannerDismissIconProps) {
  const iconStyles = cn('size-5 shrink-0 text-[--banner-fill-icon,var(--foreground)]', className);

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="banner-dismiss-icon">
        {children}
      </Slot>
    );
  }

  return (
    <X
      absoluteStrokeWidth
      className={iconStyles}
      data-slot="banner-dismiss-icon"
      strokeWidth={1.5}
    />
  );
}
