'use client';

import type { ComponentProps } from 'react';

import { useBanner } from '@/components/banner';
import { cn } from '@/lib/utils';

export type BannerRootProps = ComponentProps<'div'>;

export function BannerRoot({ children, className, ...props }: BannerRootProps) {
  const { id, isDismissed } = useBanner();

  return (
    <div
      className={cn(
        'overflow-hidden bg-[var(--banner-background,hsl(var(--primary)))] transition-all duration-300 ease-in @container',
        isDismissed ? 'pointer-events-none max-h-0' : 'max-h-32',
        className,
      )}
      data-slot="banner-root"
      id={id}
      {...props}
    >
      {children}
    </div>
  );
}
