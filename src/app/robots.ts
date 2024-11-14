export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/*', '/_next/*', '/static/*'],
			},
		],
		sitemap: 'https://sujal.vercel.app/sitemap.xml',
		host: 'https://sujal.vercel.app',
	};
}
