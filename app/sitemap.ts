import { getSnippets } from '@/db/snippets';

export default async function sitemap() {
  const snippets = getSnippets().map((post) => ({
    url: `https://sujal.vercel.app/snippets/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/snippets', '/guestbook', '/uses'].map((route) => ({
    url: `https://sujal.vercel.app${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...snippets];
}
