import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardDefinitionProps = ComponentProps<'dd'>;

export function CompareCardDefinition({
  children,
  className,
  ...props
}: CompareCardDefinitionProps) {
  return (
    <dd className={cn(className)} data-slot="compare-card-definition" {...props}>
      {children}
    </dd>
  );
}
