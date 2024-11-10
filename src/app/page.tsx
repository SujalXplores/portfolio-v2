import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import About from '@/components/about';
import Hero from '@/components/hero';
import { Skeleton } from '@/components/ui/skeleton';

const WorkExperience = dynamic(() => import('@/components/work-experience'));
const Education = dynamic(() => import('@/components/education'));
const Skills = dynamic(() => import('@/components/skills'));
const Projects = dynamic(() => import('@/components/projects'));
const Contact = dynamic(() => import('@/components/contact'));

const SectionSkeleton = () => (
	<div className="space-y-4">
		<Skeleton className="h-8 w-1/4" />
		<Skeleton className="h-24 w-full" />
		<Skeleton className="h-24 w-full" />
	</div>
);

export default function Page() {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<Hero />
			<About />
			<Suspense fallback={<SectionSkeleton />}>
				<WorkExperience />
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<Education />
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<Skills />
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<Projects />
			</Suspense>
			<Suspense fallback={<SectionSkeleton />}>
				<Contact />
			</Suspense>
		</main>
	);
}
