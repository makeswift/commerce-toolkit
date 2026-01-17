import type { ReactNode } from 'react';
import type { ComponentProps } from 'react';

import { Input } from '@/components/input';

export type DatePickerInputProps = ComponentProps<typeof Input> & {
  prependIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
};

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
