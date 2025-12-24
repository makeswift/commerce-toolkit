import type { ComponentProps } from 'react';

import { useFileInputItem } from '@/components/file-input';
import { cn } from '@/lib';

export type FileInputProgressProps = ComponentProps<'div'>;

export function FileInputProgress({ className, ...props }: FileInputProgressProps) {
  const {
    generatedId,
    fileState: { progress },
  } = useFileInputItem();

  return (
    <div
      aria-labelledby={`${generatedId}-name`}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      aria-valuetext={`${progress}%`}
      className={cn(
        'absolute bottom-0 left-0 h-1 w-full bg-[var(--file-input-item-progress,hsl(var(--primary)))] transition-transform duration-300 ease-linear',
        className,
      )}
      role="progressbar"
      style={{ transform: `translateX(-${100 - progress}%)` }}
      {...props}
    />
  );
}
