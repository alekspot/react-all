const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const optimization = require('./webpack.optimization');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

//const filename = ext => isDev ? `bundle.${ext}` : `[name].[hash].${ext}`
const filename = ext => `js/bundle.${ext}`

module.exports = {
    entry: './client/app.tsx',
    output: {
        filename: filename('js'),
        path: __dirname + '/public'
    },
    devtool: isDev ? 'source-map': false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            '@components': path.resolve(__dirname, 'components/')
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
   // optimization,
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        })
    ]
};