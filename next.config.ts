import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	compress: true,
	reactStrictMode: true,
	experimental: {
		reactCompiler: true,
		optimizeCss: true,
		cssChunking: 'loose',
	},
	poweredByHeader: false,
};

export default nextConfig;
