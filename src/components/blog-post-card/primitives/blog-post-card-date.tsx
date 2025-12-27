import type { ComponentProps } from 'react';

export type BlogPostCardDateProps = ComponentProps<'time'> & {
  children: string;
};

export function BlogPostCardDate({ className, children, ...props }: BlogPostCardDateProps) {
  return (
    <time className={className} data-slot="blog-post-card-date" dateTime={children} {...props}>
      {new Date(children).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
}
