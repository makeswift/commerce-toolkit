'use client';

import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareCardFormProps = ComponentProps<'form'>;

export function CompareCardForm({ children, className, ...props }: CompareCardFormProps) {
  return (
    <form className={cn(className)} data-slot="compare-card-form" {...props}>
      {children}
    </form>
  );
}
