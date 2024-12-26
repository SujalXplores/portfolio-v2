import type { Metadata } from 'next';
import Image from 'next/image';

import { DATA, HACKATHONS } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Hackathons | Sujal Shah',
  description:
    'Explore my hackathon projects and experiences. From ideation to implementation, see how I tackle challenges and build innovative solutions under time constraints.',
  keywords: [
    'Hackathons',
    'Programming Competitions',
    'Project Development',
    'Software Engineering',
    'Innovation',
    'Problem Solving',
    'Rapid Prototyping',
    'Team Collaboration',
    'Technical Projects',
    'Coding Challenges',
  ],
  alternates: {
    canonical: `${DATA.url}/hackathons`,
  },
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: ReadonlyArray<{ href: string; title: string; icon: React.ReactNode }>;
  win?: string;
};

export default function HackathonsPage() {
  return (
    <section className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            My Hackathons
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Building Under Pressure
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of projects built during hackathons. From ideation to
            implementation, see how I tackle challenges and build innovative
            solutions under time constraints.
          </p>
        </div>
      </div>

      <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
        {HACKATHONS.map((hackathon: Hackathon) => (
          <li key={hackathon.title}>
            <div className="py-4 relative ml-10">
              <div className="absolute -left-16 top-2 flex items-center justify-center bg-background rounded-full">
                <div className="size-12 m-auto flex items-center justify-center border rounded-full overflow-hidden">
                  <Image
                    src={hackathon.image}
                    alt={hackathon.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-start gap-1">
                <time className="text-xs text-muted-foreground">
                  {hackathon.dates} • {hackathon.location}
                </time>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold leading-none">
                    {hackathon.title}
                  </h2>
                  {hackathon.win && (
                    <span className="text-xs bg-primary/5 text-primary px-2.5 py-0.5 rounded-full font-medium ring-1 ring-primary/20">
                      {hackathon.win}
                    </span>
                  )}
                </div>
                <span className="prose dark:prose-invert text-sm text-muted-foreground">
                  {hackathon.description}
                </span>
                {hackathon.links.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {hackathon.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary ring-1 ring-border group px-2.5 py-1 rounded-full transition-all duration-300 ease-in-out hover:bg-accent hover:ring-primary/20"
                      >
                        <span className="mr-1.5 [&>svg]:size-3.5 [&>svg]:stroke-[1.5] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                          {link.icon}
                        </span>
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
