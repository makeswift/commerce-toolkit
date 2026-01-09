import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type LogoTextProps = ComponentProps<'span'> & {
  children: string;
};

export function LogoText({ children, className, ...props }: LogoTextProps) {
  return (
    <span
      className={cn(
        'text-lg font-semibold leading-none text-[var(--logo-text,var(--foreground))] [font-family:var(--logo-font-family,var(--font-family-heading))] @xl:text-2xl',
        className,
      )}
      data-slot="logo-text"
      {...props}
    >
      {children}
    </span>
  );
}
