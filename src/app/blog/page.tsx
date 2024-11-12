import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

import BlurFade from '@/components/magicui/blur-fade';

import { getBlogPosts } from '@/data/blog';

export const metadata = {
	title: 'Blog',
	description: 'Building in Public',
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
		<section className="max-w-2xl mx-auto p-4">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
							My Blog
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Building in Public
						</h2>
						<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Welcome to my digital garden — where I share everything from
							coding adventures to life lessons. Consider this my public
							notebook of discoveries.
						</p>
					</div>
				</div>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<ul className="mb-4 ml-4 divide-y divide-dashed border-l">
					{sortedPosts.map((post, index) => (
						<BlurFade
							delay={BLUR_FADE_DELAY * 2 + index * 0.05}
							key={post.slug}
						>
							<li className="py-4 relative ml-10">
								<div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
									<Avatar className="border size-12 m-auto flex items-center justify-center">
										<AvatarImage
											src={`${post.metadata.image}.svg`}
											alt={post.metadata.title}
											className="object-cover w-6 h-6"
										/>
										<AvatarFallback className="text-xs">
											{post.metadata.title[0]}
										</AvatarFallback>
									</Avatar>
								</div>
								<Link href={`/blog/${post.slug}`}>
									<div className="flex flex-1 flex-col justify-start gap-1 group">
										<time className="text-xs text-muted-foreground">
											{new Date(post.metadata.publishedAt).toLocaleDateString(
												'en-US',
												{
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												},
											)}
										</time>
										<h2 className="font-semibold leading-none group-hover:text-primary transition-colors">
											{post.metadata.title}
										</h2>
										<span className="prose dark:prose-invert text-sm text-muted-foreground">
											{post.metadata.summary}
										</span>
									</div>
								</Link>
							</li>
						</BlurFade>
					))}
				</ul>
			</BlurFade>
		</section>
	);
}
