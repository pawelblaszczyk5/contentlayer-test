/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		serverActions: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
