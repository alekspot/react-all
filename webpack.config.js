const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const optimization = require('./webpack.optimization');
const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = ext => isDev ? `bundle.${ext}` : `[name].[hash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'), 
    entry: {
        main: path.resolve(__dirname, 'src/index.tsx'),
        utils: path.resolve(__dirname, 'src/utils/utils.ts'),
    },
    devtool: isDev ? 'source-map': false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@models': path.resolve(__dirname, 'src/models/'),
            '@utils': path.resolve(__dirname, 'src/utils/')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader', 
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'build'),
    },
    optimization,
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html',
            minifi: {
                removeComments: isProd,
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]
};