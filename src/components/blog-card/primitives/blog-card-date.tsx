import type { ComponentProps } from 'react';

export type BlogCardDateProps = ComponentProps<'time'> & {
  children: string;
};

export function BlogCardDate({ className, children, ...props }: BlogCardDateProps) {
  return (
    <time className={className} data-slot="blog-card-date" dateTime={children} {...props}>
      {new Date(children).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
}
