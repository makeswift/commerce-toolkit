import type { ComponentProps } from 'react';

import * as Field from '@/components/field';
import { cn } from '@/lib';

export type CheckboxGroupLabelProps = ComponentProps<typeof Field.Label>;

export function CheckboxGroupLabel({ className, children, ...props }: CheckboxGroupLabelProps) {
  return (
    <Field.Label className={cn(className)} data-slot="checkbox-group-label" {...props}>
      {children}
    </Field.Label>
  );
}
