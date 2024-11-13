import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
	preload: true,
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	metadataBase: new URL(DATA.url),
	title: {
		default: DATA.name,
		template: `%s | ${DATA.name}`,
	},
	publisher: 'Vercel',
	description: DATA.description,
	openGraph: {
		title: `${DATA.name}`,
		description: DATA.description,
		url: DATA.url,
		siteName: `${DATA.name}`,
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: `${DATA.name}`,
		card: 'summary_large_image',
	},
	verification: {
		google: 'emXNaAu1bB-dJ_oYwAJZSHD-sjn-n__6Zb70R-8Ffn4',
		yandex: 'b18e8e714a783eac',
	},
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	keywords: [
		DATA.name,
		'JavaScript',
		'TypeScript',
		'Next.js',
		'Vercel',
		'React',
	],
	creator: DATA.name,
	alternates: {
		canonical: '/',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6',
					fontSans.variable,
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
