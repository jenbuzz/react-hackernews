const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            {
                                plugins: [
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-proposal-class-properties',
                                ],
                            },
                        ],
                    },
                },
            },
        ],
    },
};
