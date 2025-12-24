import type { ComponentProps } from 'react';

import { Label } from '@/components/label';
import { cn } from '@/lib';

export type FieldLabelProps = ComponentProps<'label'>;

export function FieldLabel({ className, children, ...props }: FieldLabelProps) {
  return (
    <Label className={cn(className)} data-slot="field-label" {...props}>
      {children}
    </Label>
  );
}
