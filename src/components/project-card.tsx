import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import Markdown from 'react-markdown';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { cn, shimmer, toBase64 } from '@/lib/utils';

type ProjectLink = {
  id: number;
  icon: React.ReactNode;
  type: string;
  href: string;
};

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

interface MediaProps {
  video?: string;
  image?: string;
  title: string;
  href?: string;
}

interface HeaderProps {
  title: string;
  dates: string;
  description: string;
  href?: string;
}

interface TagsProps {
  tags: readonly string[];
}

interface LinksProps {
  links: readonly ProjectLink[];
}

const ProjectCard = ({ children, className }: ProjectCardProps) => (
  <Card
    className={cn(
      'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full',
      className,
    )}
  >
    {children}
  </Card>
);

const Media = ({ video, image, title, href }: MediaProps) => {
  let content = null;

  if (video) {
    content = (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        aria-label={`Video preview for ${title}`}
      />
    );
  }

  if (image) {
    content = (
      <Image
        src={image}
        alt={`Project image for ${title}`}
        width={500}
        height={300}
        className="h-40 w-full overflow-hidden object-cover object-top"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
      />
    );
  }

  return (
    <Link
      href={href || '#'}
      className="block cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${title}`}
    >
      {content}
    </Link>
  );
};

const Header = ({ title, dates, description, href }: HeaderProps) => {
  const formattedLink = href
    ? href.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')
    : null;

  return (
    <CardHeader className="px-2">
      <div className="space-y-1">
        <CardTitle className="mt-1 text-base">{title}</CardTitle>
        <time className="font-sans text-xs">{dates}</time>
        {formattedLink ? (
          <div className="hidden font-sans text-xs underline print:visible">
            {formattedLink}
          </div>
        ) : null}
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </div>
    </CardHeader>
  );
};

const Tags = ({ tags }: TagsProps) => (
  <CardContent className="mt-auto flex flex-col px-2">
    {tags.length > 0 ? (
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            className="px-1 py-0 text-[10px]"
            variant="secondary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
      </div>
    ) : null}
  </CardContent>
);

const Links = ({ links }: LinksProps) => (
  <CardFooter className="px-2 pb-2">
    {links.length > 0 ? (
      <div className="flex flex-row flex-wrap items-start gap-1">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge className="flex gap-2 px-2 py-1 text-[10px]">
              {link.icon}
              {link.type}
            </Badge>
          </Link>
        ))}
      </div>
    ) : null}
  </CardFooter>
);

ProjectCard.Media = Media;
ProjectCard.Header = Header;
ProjectCard.Tags = Tags;
ProjectCard.Links = Links;

export { ProjectCard };
