'use client';

import type { ComponentProps } from 'react';

import { useBlogPostCard } from '@/components/blog-post-card';
import { cn } from '@/lib/utils';

export type BlogPostCardImageProps = ComponentProps<'div'>;

export function BlogPostCardImage({ className, ...props }: BlogPostCardImageProps) {
  const { image, title } = useBlogPostCard();

  const imageClassName =
    'h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110';

  const renderImage = () => {
    if (!image) {
      return (
        <div
          className={cn(
            'p-4 text-5xl font-bold leading-none tracking-tighter [color:var(--blog-post-card-empty-text,color-mix(in_oklab,hsl(var(--foreground))_15%,transparent))]',
            className,
          )}
          {...props}
        >
          {title}
        </div>
      );
    }

    const { src, alt, render } = image;

    if (render) {
      return render({ src, alt, className: imageClassName });
    }

    return <img alt={alt} className={imageClassName} src={src} />;
  };

  return (
    <div
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--blog-post-card-image-background,hsl(var(--contrast-100)))]',
        className,
      )}
      {...props}
    >
      {renderImage()}
    </div>
  );
}
