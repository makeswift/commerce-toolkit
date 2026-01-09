'use client';

import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import { useBanner } from '@/components/banner';
import { cn } from '@/lib';

export type BannerDismissProps = ComponentProps<'button'>;

export function BannerDismiss({ className, ...props }: BannerDismissProps) {
  const { hideDismiss, handleDismiss } = useBanner();

  if (hideDismiss) return null;

  return (
    <button
      aria-label="Dismiss banner"
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full bg-[var(--banner-close-background,transparent)] text-[var(--banner-close-icon,color-mix(in_oklab,var(--foreground)_50%,transparent))] transition-colors duration-300 focus:outline-none',
        // Hover state
        'hover:bg-[var(--banner-close-background-hover,color-mix(in_oklab,var(--background)_40%,transparent))] hover:text-[var(--banner-close-icon-hover,var(--foreground))]',
        // Focus-visible state
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--banner-focus,var(--foreground))]',
        className,
      )}
      data-slot="banner-dismiss"
      onClick={(e) => {
        e.preventDefault();
        handleDismiss();
      }}
      {...props}
    >
      <X absoluteStrokeWidth size={20} strokeWidth={1.5} />
    </button>
  );
}
