import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	const currentDate = new Date();
	const targetDate = new Date(date.includes('T') ? date : `${date}T00:00:00`);
	const timeDifference = Math.abs(currentDate.getTime() - targetDate.getTime());
	const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	const fullDate = targetDate.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});

	if (daysAgo < 1) return 'Today';
	if (daysAgo < 7) return `${fullDate} (${daysAgo}d ago)`;
	if (daysAgo < 30) return `${fullDate} (${Math.floor(daysAgo / 7)}w ago)`;
	if (daysAgo < 365) return `${fullDate} (${Math.floor(daysAgo / 30)}mo ago)`;
	return `${fullDate} (${Math.floor(daysAgo / 365)}y ago)`;
}

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str);
