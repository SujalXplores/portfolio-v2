import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const contentDir = path.join(process.cwd(), 'content');

export async function markdownToHTML(markdown: string) {
	const p = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypePrettyCode, {
			// https://rehype-pretty.pages.dev/#usage
			theme: {
				light: 'min-light',
				dark: 'min-dark',
			},
			keepBackground: false,
		})
		.use(rehypeStringify)
		.process(markdown);

	return p.toString();
}

export async function getPost(slug: string) {
	const filePath = path.join(contentDir, `${slug}.mdx`);
	const source = fs.readFileSync(filePath, 'utf-8');
	const { content: rawContent, data: metadata } = matter(source);
	const content = await markdownToHTML(rawContent);
	return { source: content, metadata, slug };
}

async function getAllPosts() {
	const mdxFiles = fs
		.readdirSync(contentDir)
		.filter((file) => path.extname(file) === '.mdx');
	return Promise.all(
		mdxFiles.map(async (file) => {
			const slug = path.basename(file, path.extname(file));
			return getPost(slug);
		}),
	);
}

export const getBlogPosts = getAllPosts;
