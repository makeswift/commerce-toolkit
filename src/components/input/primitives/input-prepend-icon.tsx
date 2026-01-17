import { Slot } from '@radix-ui/react-slot';
import { Search } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface InputPrependIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function InputPrependIcon({ asChild = false, className, children }: InputPrependIconProps) {
  const iconStyles = cn(
    'text-[--input-fill-icon,var(--form-fill-icon)] group-data-[size=large]/input:size-5 group-data-[size=medium]/input:size-5 group-data-[size=small]/input:size-4',
    className,
  );

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="input-prepend-icon">
        {children}
      </Slot>
    );
  }

  return (
    <Search
      absoluteStrokeWidth
      className={iconStyles}
      color="currentColor"
      data-slot="input-prepend-icon"
      strokeWidth={1.5}
    />
  );
}
