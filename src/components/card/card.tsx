import { clsx } from 'clsx';
import type { ElementType, ReactNode } from 'react';

import * as Skeleton from '@/components/skeleton';

export interface CardProps<E extends ElementType> {
  as?: E;
  className?: string;
  children: ReactNode;
  link?: {
    href: string;
    ariaLabel: string;
    render?: (props: { href: string; ariaLabel: string; className: string }) => ReactNode;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-focus: hsl(var(--primary));
 *   --card-border-color: hsl(var(--contrast-200));
 *   --card-background: hsl(var(--background));
 *   --card-hover-background: color-mix(in oklab, hsl(var(--contrast-100)) 50%,transparent);
 * }
 * ```
 */
export function Card<T extends ElementType = 'div'>({
  as,
  className,
  children,
  link,
}: CardProps<T>) {
  const CardPrimitive = as ?? 'div';

  const renderLink = () => {
    if (!link) return null;

    const { href, ariaLabel, render } = link;

    const linkClassName = clsx(
      'absolute inset-0 rounded-2xl',
      'focus-visible:outline-[var(--card-focus,hsl(var(--primary)))] focus-visible:outline-solid focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4',
    );
    if (render) {
      return render({ href, ariaLabel, className: linkClassName });
    }

    return (
      <a className={linkClassName} href={link.href}>
        <span className="sr-only">{link.ariaLabel}</span>
      </a>
    );
  };

  return (
    <CardPrimitive
      className={clsx(
        'group/card relative w-full rounded-2xl border p-6 @container',
        'border-[var(--card-border-color,hsl(var(--contrast-200)))] bg-[var(--card-background,hsl(var(--background)))] has-[a]:hover:bg-[var(--card-hover-background,color-mix(in_oklab,hsl(var(--contrast-100))_50%,transparent))]',
        'transition-colors duration-300 ease-linear',
        className,
      )}
    >
      {children}
      {renderLink()}
    </CardPrimitive>
  );
}

export function CardSkeleton({ className }: Pick<CardProps<ElementType>, 'className'>) {
  return (
    <div className={clsx('@container', className)}>
      <Skeleton.Box />
    </div>
  );
}
