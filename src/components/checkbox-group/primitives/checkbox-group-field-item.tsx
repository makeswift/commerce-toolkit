import type { ComponentProps } from 'react';

import * as Field from '@/components/field';
import { cn } from '@/lib';

export type CheckboxGroupFieldItemProps = ComponentProps<typeof Field.Item>;

export function CheckboxGroupFieldItem({
  className,
  children,
  ...props
}: CheckboxGroupFieldItemProps) {
  return (
    <Field.Item
      className={cn(className)}
      data-slot="checkbox-group-field-item"
      orientation="horizontal"
      {...props}
    >
      {children}
    </Field.Item>
  );
}
