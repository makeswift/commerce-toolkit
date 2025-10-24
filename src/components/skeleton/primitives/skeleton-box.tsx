import { clsx } from 'clsx';

export interface SkeletonBoxProps {
  className?: string;
}

export function SkeletonBox({ className }: SkeletonBoxProps) {
  return (
    <div
      className={clsx(
        'bg-[var(--skeleton,color-mix(in_oklab,hsl(var(--contrast-300))_15%,transparent))]',
        className,
      )}
    />
  );
}
