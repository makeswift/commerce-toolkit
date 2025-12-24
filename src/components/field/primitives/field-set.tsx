import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldSetProps = ComponentProps<'fieldset'>;

export function FieldSet({ className, children, ...props }: FieldSetProps) {
  return (
    <fieldset className={cn(className)} data-slot="field-set" {...props}>
      {children}
    </fieldset>
  );
}
