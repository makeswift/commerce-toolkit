'use client';

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

interface BlogPostCardContext {
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

export interface BlogPostCardProviderProps {
  children: ReactNode;
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

export function BlogPostCardProvider({
  children,
  title,
  author,
  content,
  date,
  image,
  link,
}: BlogPostCardProviderProps) {
  return (
    <BlogPostCardContext.Provider
      value={{
        title,
        author,
        content,
        date,
        image,
        link,
      }}
    >
      {children}
    </BlogPostCardContext.Provider>
  );
}

export function useBlogPostCard() {
  const context = useContext(BlogPostCardContext);

  if (context === undefined) {
    throw new Error('useBlogPostCard must be used within a BlogPostCardProvider');
  }

  return context;
}
