import type { ComponentProps, ReactNode } from 'react';

import { Input } from '@/components/input';

export interface DatePickerInputProps extends ComponentProps<'input'> {
  prependIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export function DatePickerInput({ className, prependIcon, ...props }: DatePickerInputProps) {
  return (
    <Input
      className={className}
      data-slot="date-picker-input"
      prependIcon={prependIcon}
      {...props}
    />
  );
}
