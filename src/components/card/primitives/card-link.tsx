import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface CardLinkProps {
  link?: {
    href: string;
    ariaLabel: string;
    render?: (props: { href: string; ariaLabel: string; className: string }) => ReactNode;
  };
}

export function CardLink({ link }: CardLinkProps) {
  if (!link) return null;

  const { href, ariaLabel, render } = link;

  const defaultClassName = cn(
    'absolute inset-0 rounded-2xl',
    'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--card-focus,hsl(var(--primary)))]',
  );

  if (render) {
    return render({ href, ariaLabel, className: defaultClassName });
  }

  return (
    <a className={defaultClassName} data-slot="card-link" href={href}>
      <span className="sr-only">{ariaLabel}</span>
    </a>
  );
}
