import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SkeletonViews from 'app/components/skeleton-loader/views';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getSnippets } from 'app/db/snippets';

export const metadata = {
  title: 'Snippets - Sujal Shah',
  description: 'Read my thoughts on software development, design, and more.',
};

const BuyMeACoffeeButton = () => (
  <a
    href="https://www.buymeacoffee.com/sujal"
    target="_blank"
    rel="noopener noreferrer"
    className="px-3 py-2 border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100"
  >
    <Image src="/svgs/buymeacoffee.svg" alt="Coffee" width={20} height={20} />
    <span className="ml-3">Buy me a coffee</span>
  </a>
);

export default function SnippetsPage() {
  const allSnippets = getSnippets();

  return (
    <section>
      <h1 className="font-medium text-3xl mb-8 tracking-tighter">
        📝 Code Snippets
      </h1>
      <p className="mb-8 text-gray-300">
        A collection of code snippets that might be useful to you. I try to keep
        them as short as possible.
      </p>
      <div className="mb-8">
        <BuyMeACoffeeButton />
      </div>
      {allSnippets
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex space-y-1 mb-6 gap-4"
            href={`/snippets/${post.slug}`}
          >
            <Image
              src={`/svgs/${post.metadata.image}.svg`}
              alt={post.metadata.title}
              width="48"
              height="48"
              loading="lazy"
            />
            <div className="w-full flex flex-col border-l border-dashed border-neutral-600 pl-4">
              <p className="text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<SkeletonViews />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
