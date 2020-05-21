const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    entry: {
        index: './src/components/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    devtool: 'none',
    externals: {
        react: 'commonjs react',
        'react-dom': 'commonjs react-dom',
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    ecma: 6,
                },
            }),
        ],
    },
});
