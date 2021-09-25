const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'build'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, 'build'),
        compress: false,
        host: '0.0.0.0',
        port: 8080,
        open: true,
        watchFiles: {
            paths: ['src/**/*'],
            options: {
                usePolling: false,
            },
        },
        allowedHosts: 'all',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
    ],
});
