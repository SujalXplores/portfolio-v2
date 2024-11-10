import Link from 'next/link';

import BlurFade from '@/components/magicui/blur-fade';

import { getBlogPosts } from '@/data/blog';

export const metadata = {
	title: 'Blog',
	description: 'My thoughts on software development, life, and more.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
	const posts = await getBlogPosts();

	// Sort posts by publishedAt date in descending order
	const sortedPosts = posts.sort(
		(a, b) =>
			new Date(b.metadata.publishedAt).getTime() -
			new Date(a.metadata.publishedAt).getTime(),
	);

	return (
		<section>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog</h1>
			</BlurFade>
			{sortedPosts.map((post, index) => (
				<BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.05} key={post.slug}>
					<Link
						className="flex flex-col space-y-1 mb-4"
						href={`/blog/${post.slug}`}
					>
						<div className="w-full flex flex-col">
							<p className="tracking-tight">{post.metadata.title}</p>
							<p className="h-6 text-xs text-muted-foreground">
								{new Date(post.metadata.publishedAt).toLocaleDateString(
									'en-US',
									{
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									},
								)}
							</p>
						</div>
					</Link>
				</BlurFade>
			))}
		</section>
	);
}
