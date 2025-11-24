import type { ComponentProps } from 'react';

export type BlogPostCardDateProps = ComponentProps<'time'> & {
  children: string;
};

export function BlogPostCardDate({ className, children, ...props }: BlogPostCardDateProps) {
  return (
    <time className={className} dateTime={children} {...props} data-slot="blog-post-card-date">
      {new Date(children).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
}
