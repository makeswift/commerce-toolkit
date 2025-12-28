import type { ComponentProps } from 'react';

import { Checkbox } from '@/components/checkbox';
import { cn } from '@/lib';

export type ProductCardCheckboxProps = ComponentProps<typeof Checkbox>;

export function ProductCardCheckbox({ className, ...props }: ProductCardCheckboxProps) {
  return <Checkbox className={cn(className)} data-slot="product-card-checkbox" {...props} />;
}
