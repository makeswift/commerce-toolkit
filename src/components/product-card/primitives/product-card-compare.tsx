import type { ComponentProps } from 'react';

import { Checkbox } from '@/components/checkbox';
import * as FieldPrimitive from '@/components/field/primitives';
import { Label } from '@/components/label';
import { cn } from '@/lib';

export interface ProductCardCompareProps extends Omit<ComponentProps<typeof Checkbox>, 'children'> {
  label: string;
}

export function ProductCardCompare({ className, id, label, ...props }: ProductCardCompareProps) {
  return (
    <FieldPrimitive.Item
      className={cn(className)}
      data-slot="product-card-compare"
      orientation="horizontal"
    >
      <Checkbox id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </FieldPrimitive.Item>
  );
}
