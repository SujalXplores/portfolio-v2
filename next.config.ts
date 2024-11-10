import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	experimental: {
		reactCompiler: true,
	},
};

export default nextConfig;
