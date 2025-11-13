import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ChipButtonProps = ComponentProps<'button'>;

export function ChipButton({ className, ...props }: ChipButtonProps) {
  return (
    <button
      className={cn(
        'flex h-5 w-5 items-center justify-center rounded-full hover:bg-[var(--chip-background-hover,hsl(var(--contrast-200)))] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--button-focus,hsl(var(--foreground)))]',
        className,
      )}
      {...props}
    >
      <X size={12} />
    </button>
  );
}
