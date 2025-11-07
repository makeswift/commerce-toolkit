import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type BannerTextProps = ComponentProps<'div'>;

export function BannerText({ children, className, ...props }: BannerTextProps) {
  return (
    <div
      className={cn(
        'flex-1 text-sm font-[var(--banner-font-family,var(--font-family-body))] text-[var(--banner-text,hsl(var(--foreground)))] @xl:text-center @xl:text-base',
        className,
      )}
      data-slot="banner-text"
      {...props}
    >
      {children}
    </div>
  );
}
