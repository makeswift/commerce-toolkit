import { clsx } from 'clsx';
import type { ReactNode } from 'react';

import * as SkeletonPrimitives from '@/components/skeleton';

export interface BlogPost {
  title: string;
  author?: string;
  content: string;
  date: string;
  image?: {
    src: string;
    alt: string;
    render?: (props: { src: string; alt: string; className: string }) => ReactNode;
  };
  link: {
    href: string;
    ariaLabel: string;
    render?: (props: { href: string; ariaLabel: string; className: string }) => ReactNode;
  };
}

export interface BlogPostCardProps extends BlogPost {
  className?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --blog-post-card-focus: hsl(var(--primary));
 *   --blog-post-card-image-background: hsl(var(--contrast-100));
 *   --blog-post-card-empty-text: color-mix(in oklab, hsl(var(--foreground)) 15%, transparent);
 *   --blog-post-card-title-text: hsl(var(--foreground));
 *   --blog-post-card-content-text: hsl(var(--contrast-400));
 *   --blog-post-card-author-date-text: hsl(var(--foreground));
 *   --blog-post-card-font-family: var(--font-family-body);
 *   --blog-post-card-summary-text: hsl(var(--contrast-400));
 *   --blog-post-card-author-date-text: hsl(var(--foreground));
 * }
 * ```
 */
export function BlogPostCard({
  author,
  content,
  date,
  link,
  image,
  title,
  className,
}: BlogPostCardProps) {
  const renderImage = () => {
    if (!image) {
      return (
        <div className="p-4 text-5xl font-bold leading-none tracking-tighter text-[var(--blog-post-card-empty-text,color-mix(in_oklab,hsl(var(--foreground))_15%,transparent))]">
          {title}
        </div>
      );
    }

    const { src, alt, render } = image;

    const imageClassName =
      'h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110';

    if (render) {
      return render({ src, alt, className: imageClassName });
    }

    return <img alt={alt} className={imageClassName} src={src} />;
  };

  const renderLink = () => {
    const { href, ariaLabel, render } = link;

    const linkClassName = clsx(
      'focus:outline-none focus-visible:ring-[var(--blog-post-card-focus,hsl(var(--primary)))] absolute inset-0 rounded-b-lg rounded-t-2xl focus-visible:ring-2 focus-visible:ring-offset-4',
    );

    if (render) {
      return render({ href, ariaLabel, className: linkClassName });
    }

    return (
      <a className={linkClassName} href={href}>
        <span className="sr-only">{ariaLabel}</span>
      </a>
    );
  };

  return (
    <article
      className={clsx(
        'group relative w-full max-w-md font-[var(--blog-post-card-font-family,var(--font-family-body))] @container',
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--blog-post-card-image-background,hsl(var(--contrast-100)))]">
        {renderImage()}
      </div>
      <h5 className="mt-4 text-lg font-medium leading-snug text-[var(--blog-post-card-title-text,hsl(var(--foreground)))]">
        {title}
      </h5>
      <p className="mt-1.5 line-clamp-3 text-sm font-normal text-[var(--blog-post-card-content-text,hsl(var(--contrast-400)))]">
        {content}
      </p>
      <div className="mt-3 text-sm text-[var(--blog-post-card-author-date-text,hsl(var(--foreground)))]">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        {author != null && (
          <>
            <span className="after:mx-2 after:content-['•']" />
            <span>{author}</span>
          </>
        )}
      </div>
      {renderLink()}
    </article>
  );
}

export function BlogPostCardSkeleton({
  aspectRatio = '4:3',
  className,
}: {
  aspectRatio?: '5:6' | '3:4' | '4:3' | '1:1';
  className?: string;
}) {
  return (
    <div className={clsx('w-full max-w-md', className)}>
      <SkeletonPrimitives.Box
        className={clsx(
          'mb-4 w-full rounded-2xl',
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '4:3': 'aspect-[4/3]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      />
      <SkeletonPrimitives.Text characterCount={25} className="mt-4 rounded text-lg" />
      <div className="mt-1.5">
        <SkeletonPrimitives.Text characterCount="full" className="rounded text-sm" />
        <SkeletonPrimitives.Text characterCount="full" className="rounded text-sm" />
        <SkeletonPrimitives.Text characterCount={15} className="rounded text-sm" />
      </div>
      <SkeletonPrimitives.Text characterCount={10} className="mt-3 rounded text-sm" />
    </div>
  );
}
