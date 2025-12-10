import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardSpecsDefinitionProps = ComponentProps<'dd'>;

export function CompareCardSpecsDefinition({
  children,
  className,
  ...props
}: CompareCardSpecsDefinitionProps) {
  return (
    <dd className={cn(className)} data-slot="compare-card-specs-definition" {...props}>
      {children}
    </dd>
  );
}
