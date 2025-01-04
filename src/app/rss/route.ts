import { getBlogPosts } from '@/data/blog';
import { DATA } from '@/data/resume';

export function GET() {
  const posts = getBlogPosts();
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${DATA.name}'s Blog</title>
    <link>${DATA.url}/blog</link>
    <description>Technical articles about web development, software engineering, and tech insights.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${
      DATA.url
    }/rss.xml" rel="self" type="application/rss+xml"/>
    <copyright>All rights reserved ${new Date().getFullYear()}, ${
      DATA.name
    }</copyright>
    <generator>Next.js</generator>
    ${sortedPosts
      .map(
        (post) => `
      <item>
        <guid isPermaLink="true">${DATA.url}/blog/${post.slug}</guid>
        <title>${post.metadata.title}</title>
        <link>${DATA.url}/blog/${post.slug}</link>
        <description>${post.metadata.summary}</description>
        <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      </item>`,
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
