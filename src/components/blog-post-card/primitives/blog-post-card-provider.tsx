'use client';

import { createContext, use, useMemo } from 'react';
import type { ReactNode } from 'react';

export interface BlogPostCardContext {
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

export const BlogPostCardContext = createContext<BlogPostCardContext | undefined>(undefined);

export interface BlogPostCardProviderProps extends BlogPostCardContext {
  children: ReactNode;
}

export function BlogPostCardProvider({
  children,
  title,
  author,
  content,
  date,
  image,
  link,
}: BlogPostCardProviderProps) {
  const contextValues = useMemo(
    () => ({
      title,
      author,
      content,
      date,
      image,
      link,
    }),
    [title, author, content, date, image, link],
  );

  return (
    <BlogPostCardContext.Provider value={contextValues}>{children}</BlogPostCardContext.Provider>
  );
}

export function useBlogPostCard() {
  const context = use(BlogPostCardContext);

  if (context === undefined) {
    throw new Error('useBlogPostCard must be used within a BlogPostCardProvider');
  }

  return context;
}
