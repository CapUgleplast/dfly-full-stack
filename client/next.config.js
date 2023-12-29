const nextConfig = {}

module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/arts',
                permanent: true,
            },
        ]
    },
    images: {
        loader: 'custom',
        loaderFile: './imageLoader.js',
    },
    // basePath: "/arts",
}