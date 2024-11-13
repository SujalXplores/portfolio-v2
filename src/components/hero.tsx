import { DATA } from '@/data/resume';
import { shimmer, toBase64 } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
	return (
		<section id="hero">
			<div className="mx-auto w-full max-w-2xl space-y-8">
				<div className="gap-2 flex justify-between">
					<div className="flex-col flex flex-1 space-y-1.5">
						<h3 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							{`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
						</h3>
						<span className="max-w-[600px] md:text-xl">{DATA.description}</span>
					</div>
					<Image
						src={DATA.avatarUrl}
						alt={DATA.name}
						width={100}
						height={100}
						placeholder={`data:image/svg+xml;base64,${toBase64(
							shimmer(100, 100),
						)}`}
						className="rounded-full size-28 border"
					/>
				</div>
			</div>
		</section>
	);
}
