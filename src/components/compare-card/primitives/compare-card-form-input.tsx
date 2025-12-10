import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardFormInputProps = ComponentProps<'input'>;

export function CompareCardFormInput({ children, className, ...props }: CompareCardFormInputProps) {
  return (
    <input className={cn(className)} data-slot="compare-card-form-input" {...props}>
      {children}
    </input>
  );
}
