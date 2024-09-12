/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "ik.imagekit.io",
                port: '',
                pathname: '/Farhan007/StillMotion-ImageServer/**',
            },
             {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "**",
             }
        ]
    }
};

export default nextConfig;
