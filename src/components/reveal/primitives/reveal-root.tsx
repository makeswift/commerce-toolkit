import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RevealRootProps = ComponentProps<'div'>;

export function RevealRoot({ children, className, ...props }: RevealRootProps) {
  return (
    <div className={cn('relative', className)} {...props}>
      {children}
    </div>
  );
}
