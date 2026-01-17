import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BannerTextProps = ComponentProps<'div'>;

export function BannerText({ children, className, ...props }: BannerTextProps) {
  return (
    <div
      className={cn(
        'flex-1 text-sm text-[--banner-text,var(--text-primary)] [font-family:--banner-font,var(--font-body)] @xl:text-center @xl:text-base',
        className,
      )}
      data-slot="banner-text"
      {...props}
    >
      {children}
    </div>
  );
}
