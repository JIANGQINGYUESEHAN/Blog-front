/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'zy.img.qiuyue.space',
                port: '',
                pathname: '**',
            },

        ],
    },
}


module.exports = nextConfig
