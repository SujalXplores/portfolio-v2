import About from '@/components/about';
import Contact from '@/components/contact';
import Education from '@/components/education';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import WorkExperience from '@/components/work-experience';

export default function Page() {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<Hero />
			<About />
			<WorkExperience />
			<Education />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
