import type { MetadataRoute } from 'next';

import { getBlogPosts } from '@/data/blog';
import { DATA } from '@/data/resume';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts();

  const routes = ['', '/blog'].map((route) => ({
    url: `${DATA.url}${route}`,
    lastModified: new Date(),
  }));

  const posts = blogPosts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
  }));

  return [...routes, ...posts];
}
