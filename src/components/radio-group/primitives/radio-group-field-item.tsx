import type { ComponentProps } from 'react';

import * as Field from '@/components/field';
import { cn } from '@/lib';

export type RadioGroupFieldItemProps = ComponentProps<typeof Field.Item>;

export function RadioGroupFieldItem({ className, children, ...props }: RadioGroupFieldItemProps) {
  return (
    <Field.Item
      className={cn(className)}
      data-slot="radio-group-field-item"
      orientation="horizontal"
      {...props}
    >
      {children}
    </Field.Item>
  );
}
