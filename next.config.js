const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	...nextConfig,
	env: {
		JWT_SECRET: process.env.JWT_SECRET,
	},
};
