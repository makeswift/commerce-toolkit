import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type IconSkeletonProps = Omit<SkeletonPrimitive.IconProps, 'icon'> & {
  size?: number;
};

export function IconSkeleton({ className, size = 24 }: IconSkeletonProps) {
  return (
    <SkeletonPrimitive.Icon
      className={cn('overflow-hidden rounded-full', className)}
      data-slot="icon-skeleton"
      icon={
        <div
          className="bg-[var(--skeleton,var(--contrast-300))] opacity-25"
          style={{ width: size, height: size }}
        />
      }
    />
  );
}
