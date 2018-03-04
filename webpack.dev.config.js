const path = require('path'),
    webpack = require('webpack'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        app: [
            'react-hot-loader/patch',
            './app.js'
        ]
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './app/index.html'),
            minify: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => module.context && module.context.indexOf("node_modules") !== -1,
            filename: 'vendor.bundle.js'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled'
        })
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                  enforce: "pre",
                  test: /\.jsx?$/,
                  exclude: /node_modules/,
                  loader: "eslint-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            sourceMap: true,
                            presets: [["env", {"modules": false}], "react"],
                            plugins: [
                                "react-hot-loader/babel",
                                "transform-object-rest-spread",
                                "transform-decorators-legacy",
                                "transform-class-properties"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: false,
                            importLoaders: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [
                                    require("autoprefixer")
                                ];
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx' ],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './app')
        ]
    },
    stats: {
        colors: {
            green: '\u001b[32m'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, './app'),
        historyApiFallback: true,
        port: 3000,
        compress: false,
        inline: true,
        hot: true,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m'
            }
        }
    }
};