const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        app: [
            './app.js'
        ]
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].[chunkhash].min.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './app/index.html'),
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => module.context && module.context.indexOf("node_modules") !== -1,
            filename: 'vendor.[chunkhash].js'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                warnings: false,
                compress: {
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false
                }
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractTextPlugin({
            filename: 'style.[chunkhash].css',
            allChunks: true
        })
    ],
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
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
                                "transform-object-rest-spread",
                                "transform-decorators-legacy",
                                "transform-class-properties",
                                "transform-react-remove-prop-types"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                })
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
        hot: false,
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