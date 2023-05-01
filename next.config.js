const withFonts = require('next-fonts');

module.exports = withFonts({
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/videos/',
                    outputPath: 'static/videos/',
                    outputPath: 'fonts/',
                    name: '[name].[ext]',
                    esModule: false
                }
            }
        });

        return config;
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgur.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
});
