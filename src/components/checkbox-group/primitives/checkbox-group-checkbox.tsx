import type { ComponentProps } from 'react';

import { Checkbox } from '@/components/checkbox';
import { cn } from '@/lib';

export type CheckboxGroupCheckboxProps = ComponentProps<typeof Checkbox>;

export function CheckboxGroupCheckbox({ className, ...props }: CheckboxGroupCheckboxProps) {
  return <Checkbox className={cn(className)} data-slot="checkbox-group-checkbox" {...props} />;
}
