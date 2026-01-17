import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type LogoTextProps = ComponentProps<'span'> & {
  children: string;
};

export function LogoText({ children, className, ...props }: LogoTextProps) {
  return (
    <span
      className={cn(
        'text-lg font-semibold text-[--logo-text,var(--foreground)] [font-family:var(--logo-font,var(--font-heading))] @xl:text-2xl',
        className,
      )}
      data-slot="logo-text"
      {...props}
    >
      {children}
    </span>
  );
}
