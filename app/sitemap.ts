import { getSnippets } from 'app/db/snippets';

export default async function sitemap() {
  const snippets = getSnippets().map((post) => ({
    url: `https://sujal.vercel.app/snippets/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/snippets', '/guestbook', '/uses', '/experiments'].map((route) => ({
    url: `https://sujal.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...snippets];
}
