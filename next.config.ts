import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	compress: true,
	reactStrictMode: true,
	experimental: {
		reactCompiler: true,
		optimizeCss: true,
		useLightningcss: true,
		cssChunking: 'loose',
	},
};

export default nextConfig;
