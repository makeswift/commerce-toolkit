'use client';

import * as Portal from '@radix-ui/react-portal';
import type { ComponentProps } from 'react';

export type CompareDrawerRootProps = ComponentProps<typeof Portal.Root>;

export function CompareDrawerRoot({ children, ...props }: CompareDrawerRootProps) {
  return (
    <Portal.Root data-slot="compare-drawer-root" {...props}>
      {children}
    </Portal.Root>
  );
}
