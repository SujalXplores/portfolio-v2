import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	compress: true,
	reactStrictMode: true,
	experimental: {
		reactCompiler: true,
	},
};

export default nextConfig;
