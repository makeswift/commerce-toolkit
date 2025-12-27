import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BannerContentProps = ComponentProps<'div'>;

export function BannerContent({ className, children, ...props }: BannerContentProps) {
  return (
    <div
      className={cn('flex items-center justify-between gap-4 px-8 py-3', className)}
      data-slot="banner-content"
      {...props}
    >
      {children}
    </div>
  );
}
