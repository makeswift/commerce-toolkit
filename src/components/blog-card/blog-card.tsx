import * as BlogCardPrimitive from '@/components/blog-card';

export interface BlogCardProps {
  className?: string;
  aspectRatio?: '5/6' | '3/4' | '4/3' | '1/1';
  title: string;
  author?: string;
  content: string;
  date: string;
  image?: {
    src: string;
    alt: string;
  };
  link: {
    href: string;
    ariaLabel: string;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --blog-card-text-primary: var(--text-primary);
 *   --blog-card-text-secondary: var(--text-secondary);
 *   --blog-card-font-title: var(--font-body);
 *   --blog-card-font-content: var(--font-body);
 * }
 * ```
 */
export function BlogCard({
  author,
  aspectRatio = '4/3',
  content,
  date,
  link,
  image,
  title,
  className,
}: BlogCardProps) {
  return (
    <BlogCardPrimitive.Root aspectRatio={aspectRatio} className={className}>
      <BlogCardPrimitive.Thumbnail>
        {image ? (
          <BlogCardPrimitive.Image alt={image.alt} src={image.src} />
        ) : (
          <BlogCardPrimitive.Fallback>{title}</BlogCardPrimitive.Fallback>
        )}
      </BlogCardPrimitive.Thumbnail>
      <BlogCardPrimitive.Title>{title}</BlogCardPrimitive.Title>
      <BlogCardPrimitive.Content>{content}</BlogCardPrimitive.Content>
      <BlogCardPrimitive.Details>
        <BlogCardPrimitive.Date>{date}</BlogCardPrimitive.Date>
        {author !== undefined && <BlogCardPrimitive.Author>{author}</BlogCardPrimitive.Author>}
      </BlogCardPrimitive.Details>
      <BlogCardPrimitive.Link aria-label={link.ariaLabel} href={link.href} />
    </BlogCardPrimitive.Root>
  );
}
