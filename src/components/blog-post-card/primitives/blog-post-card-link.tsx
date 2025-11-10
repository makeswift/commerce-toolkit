'use client';

import type { ComponentProps } from 'react';

import { useBlogPostCard } from '@/components/blog-post-card';
import { cn } from '@/lib/utils';

export type BlogPostCardLinkProps = ComponentProps<'a'>;

export function BlogPostCardLink({ className, ...props }: BlogPostCardLinkProps) {
  const {
    link: { href, ariaLabel, render },
  } = useBlogPostCard();

  const linkClassName = cn(
    'absolute inset-0 rounded-b-lg rounded-t-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blog-post-card-focus,hsl(var(--primary)))] focus-visible:ring-offset-4',
    className,
  );

  if (render) {
    return render({ href, ariaLabel, className: linkClassName, ...props });
  }

  return (
    <a className={linkClassName} href={href} {...props}>
      <span className="sr-only">{ariaLabel}</span>
    </a>
  );
}
