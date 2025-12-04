import * as BlogPostCardPrimitive from '@/components/blog-post-card';

export interface BlogPostCardProps {
  className?: string;
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
  return (
    <BlogPostCardPrimitive.Root className={className}>
      <BlogPostCardPrimitive.Thumbnail>
        {image ? (
          <BlogPostCardPrimitive.Image alt={image.alt} src={image.src} />
        ) : (
          <BlogPostCardPrimitive.Fallback>{title}</BlogPostCardPrimitive.Fallback>
        )}
      </BlogPostCardPrimitive.Thumbnail>
      <BlogPostCardPrimitive.Title>{title}</BlogPostCardPrimitive.Title>
      <BlogPostCardPrimitive.Content>{content}</BlogPostCardPrimitive.Content>
      <BlogPostCardPrimitive.Details>
        <BlogPostCardPrimitive.Date>{date}</BlogPostCardPrimitive.Date>
        {author !== undefined && (
          <BlogPostCardPrimitive.Author>{author}</BlogPostCardPrimitive.Author>
        )}
      </BlogPostCardPrimitive.Details>
      <BlogPostCardPrimitive.Link aria-label={link.ariaLabel} href={link.href} />
    </BlogPostCardPrimitive.Root>
  );
}
