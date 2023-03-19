const withFonts = require('next-fonts');

module.exports = withFonts({
    // ...
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: 'static/videos/',
                    outputPath: 'fonts/',
                    name: '[name].[hash].[ext]',
                    esModule: false
                }
            }
        });

        return config;
    }
});
