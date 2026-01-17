'use client';

import type { ComponentProps } from 'react';

import { useBanner } from '@/components/banner';
import { Button } from '@/components/button';
import { cn } from '@/lib';

export type BannerDismissProps = ComponentProps<'button'>;

export function BannerDismiss({ children, className, ...props }: BannerDismissProps) {
  const { hideDismiss, handleDismiss } = useBanner();

  if (hideDismiss) return null;

  return (
    <Button
      aria-label="Dismiss banner"
      className={cn('focus-secondary', className)}
      data-slot="banner-dismiss"
      onClick={(e) => {
        e.preventDefault();
        handleDismiss();
      }}
      shape="circle"
      size="x-small"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
