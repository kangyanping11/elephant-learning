// vue2 使用 vue-loader 15版本时，需要配置这个插件
const { VueLoaderPlugin } = require('vue-loader');
// 清理输出目录dist （每次打包前，都会删除上次dist目录）
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 复制静态资源到输出目录
const CopyWebpackPlugin = require('copy-webpack-plugin')
// 生成HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 合并配置文件
const { merge } = require('webpack-merge')
// 可以压缩js
const TerserPlugin = require("terser-webpack-plugin");
// 分离css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const resolveApp = require('./paths')

// 导入其它的配置
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')

// 定义对象保存 base 配置信息
const commonConfig = (isProduction) => {
    return {
        entry: './src/main.js',
        // 模块解析规则
        resolve: {
            // 导入时可以减写的扩展名后缀
            extensions: [".js", ".json", '.ts', '.jsx', '.vue'],
            // 别名
            alias: {
                '@': resolveApp('./src'),
                'vue$': 'vue/dist/vue.esm.js' // 确保使用的是完整版的 Vue，而不是运行时版本
            },

        },
        output: {
            filename: 'js/[name].[contenthash:8].bundle.js',
            path: resolveApp('./dist'),
        },
        optimization: {
            // 代码分割
            splitChunks: {
                chunks: 'all',// 选择哪些 chunk 进行分割,可选值：'all'（所有chunk）、'async'（按需加载的chunk）、'initial'（初始chunk）
                minSize: 20000,// 最小尺寸，超过这个值才会进行分割,这里20KB
                minRemainingSize: 0,// 分割后剩下的块的最小大小，0表示不限制
                minChunks: 1,// 模块被引用次数大于等于该值时才被分割
                maxAsyncRequests: 30, // 按需加载时的最大并行请求数
                maxInitialRequests: 30, // 入口点(初始加载)的最大并行请求数
                enforceSizeThreshold: 50000, //  强制执行拆分的体积阈值（50KB）
                // 缓存组
                cacheGroups: {
                    // **分离第三方库**：将`node_modules`中的第三方库打包到`vendors` chunk中，因为第三方库通常变化较少，可以长期缓存。
                    // 将node_modules中的包分离到vendors.js中
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10, // 优先级，数值越大优先级越高
                        reuseExistingChunk: true,// 如果当前块包含已经从主包中分离出的模块，则重用该块
                        name: 'vendors'// 分割后的chunk名称
                    },
                    // **分离公共模块**：将被多个chunk引用的公共模块（至少被2个chunk引用）打包到`common` chunk中，避免重复加载。
                    default: {// 默认分离
                        // 将公共模块分离到common.js中
                        minChunks: 2,// 模块被至少2个chunk引用时才会被分割
                        priority: -20,// 优先级低于defaultVendors
                        reuseExistingChunk: true,// 重用已存在的块
                        name: 'common'// 分割后的chunk名称
                    }
                }

            },
            // 压缩js
            runtimeChunk: true,// 将运行时代码分离到单独的文件
            minimize: true, // 是否压缩代码
            minimizer: [
                // 压缩js
                new TerserPlugin({
                    extractComments: false, // 不提取注释
                }),
            ]
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                esModule: false
                            }
                        },
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 2 } // 2个 loader (postcss + sass)
                        },
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg|gif|jpe?g)$/,
                    type: 'asset',
                    generator: {
                        filename: "img/[name].[hash:4][ext]"
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 30 * 1024// 30KB以下的图片会被转成base64格式，插在代码中 ，超过30KB的图片会被单独打包成文件
                        }
                    }
                },
                {
                    test: /\.vue$/,
                    // 支持模块热替换（HMR）,配置vue文件
                    use: ['vue-loader']
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                // 支持json文件
                {
                    test: /\.json$/,
                    type: 'json',
                    parser: {
                        parse: JSON.parse
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Vue2 Admin222',
                template: './public/index.html',
            }),
            // new CopyWebpackPlugin({
            //     patterns: [
            //         {
            //             from: resolveApp('./public'),
            //             to: resolveApp('./dist'),
            //             globOptions: {
            //                 ignore: ['**/index.html', '**/favicon.ico']
            //             }   
            //         }
            //     ]
            // })
        ]
    }
}


module.exports = (env) => {
    const isProduction = env.production
    process.env.NODE_ENV = isProduction ? 'production' : 'development'

    // 依据当前的打包模式来合并配置
    const config = isProduction ? prodConfig : devConfig

    const mergeConfig = merge(commonConfig(isProduction), config)

    return mergeConfig
}