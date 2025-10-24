import { clsx } from 'clsx';

export interface SkeletonTextProps {
  characterCount?: number | 'full';
  className?: string;
}

export function SkeletonText({ characterCount = 10, className }: SkeletonTextProps) {
  return (
    <div className={clsx('flex h-[1lh] items-center', className)}>
      <div
        className={clsx(
          `h-[1ex] max-w-full rounded-[inherit] bg-[var(--skeleton,color-mix(in_oklab,hsl(var(--contrast-300))_15%,transparent))]`,
        )}
        style={{ width: characterCount === 'full' ? '100%' : `${characterCount}ch` }}
      />
    </div>
  );
}
