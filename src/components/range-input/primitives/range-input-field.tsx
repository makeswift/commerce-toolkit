import type { ComponentProps } from 'react';

import { Input } from '@/components/input';
import { cn } from '@/lib';

export type RangeInputFieldProps = ComponentProps<typeof Input>;

export function RangeInputField({ className, ...props }: RangeInputFieldProps) {
  return <Input className={cn(className)} data-slot="range-input-field" {...props} />;
}
