'use client';

import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';

import { MotionDiv } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges = [],
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || '#'}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Image
            src={logoUrl}
            alt={altText}
            width={48}
            height={48}
            className="object-contain border size-12 m-auto bg-muted-background dark:bg-foreground rounded-full"
          />
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader className="gap-y-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0',
                  )}
                />
                {badges.length > 0 ? (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={badge}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                ) : null}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description ? (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </MotionDiv>
          ) : null}
        </div>
      </Card>
    </Link>
  );
};
