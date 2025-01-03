import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode, createElement } from 'react';
import { createHighlighter } from 'shiki';

const highlighter = createHighlighter({
  themes: ['github-dark-default'],
  langs: ['javascript', 'css', 'html', 'jsx'],
});

interface CalloutProps {
  emoji: string;
  children: ReactNode;
}

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href?.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// This replaces rehype-slug
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: ReactNode }) => {
    const slug = slugify(children as string);
    const headingText = children as string;

    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement(
          'a',
          {
            href: `#${slug}`,
            key: `link-${slug}`,
            className: 'anchor',
            'aria-label': `Link to section: ${headingText}`,
          },
          createElement(
            'span',
            {
              className: 'sr-only',
            },
            `Link to section: ${headingText}`,
          ),
        ),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function Callout({ emoji, children }: CalloutProps) {
  return (
    <div className="px-4 py-3 border border-neutral-700 bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
}

function ProsCard({ title, pros }: { title: string; pros: string[] }) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span className="text-neutral-900 dark:text-neutral-100">{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro: string) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <title>green checkmark</title>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span className="text-neutral-900 dark:text-neutral-100">
              {pro}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-red-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span className="text-neutral-900 dark:text-neutral-100">{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <title>red cross</title>
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span className="text-neutral-900 dark:text-neutral-100">
              {con}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

async function Code({ children, ...props }: CodeBlockProps) {
  const { className } = props;
  const codeHTML = (await highlighter).codeToHtml(children as string, {
    lang: className?.replace('language-', '') ?? 'javascript',
    theme: 'github-dark-default',
  });

  const codeContent = codeHTML.match(/<code[^>]*>([\s\S]*)<\/code>/)?.[1] || '';

  return <code dangerouslySetInnerHTML={{ __html: codeContent }} {...props} />;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  ProsCard,
  ConsCard,
  Callout,
  Table,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
