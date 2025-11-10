import * as BlogPostCardPrimitive from '@/components/blog-post-card';

export type BlogPostCardProps = Omit<BlogPostCardPrimitive.ProviderProps, 'children'> &
  Omit<BlogPostCardPrimitive.RootProps, 'children'>;

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
    <BlogPostCardPrimitive.Provider
      author={author}
      content={content}
      date={date}
      image={image}
      link={link}
      title={title}
    >
      <BlogPostCardPrimitive.Root className={className}>
        <BlogPostCardPrimitive.Image />
        <BlogPostCardPrimitive.Title />
        <BlogPostCardPrimitive.Content />
        <BlogPostCardPrimitive.Details>
          <BlogPostCardPrimitive.Date />
          {author != null && <BlogPostCardPrimitive.Author />}
        </BlogPostCardPrimitive.Details>
        <BlogPostCardPrimitive.Link />
      </BlogPostCardPrimitive.Root>
    </BlogPostCardPrimitive.Provider>
  );
}
