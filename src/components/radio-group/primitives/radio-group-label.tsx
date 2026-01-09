import type { ComponentProps } from 'react';

import * as Field from '@/components/field';
import { cn } from '@/lib';

export type RadioGroupLabelProps = ComponentProps<typeof Field.Label>;

export function RadioGroupLabel({ className, children, ...props }: RadioGroupLabelProps) {
  return (
    <Field.Label className={cn(className)} data-slot="radio-group-label" {...props}>
      {children}
    </Field.Label>
  );
}
