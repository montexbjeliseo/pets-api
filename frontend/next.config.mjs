/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'cdn2.thecatapi.com', 
            'cdn2.thedogapi.com',
            'ecf5lrqe5smgmf0i.public.blob.vercel-storage.com'
        ],
    },

};

export default nextConfig;
