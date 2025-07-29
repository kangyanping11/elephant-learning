// css抽离
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// css压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
// 打包分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// 压缩
const CompressionPlugin = require("compression-webpack-plugin")


module.exports = {
  mode: 'production',
  // optimization: {
  //   minimizer: [
  //     new CssMinimizerPlugin()
  //   ]
  // },
  plugins: [

    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',// 生成静态HTML文件
      openAnalyzer: false, // 不自动打开浏览器
      reportFilename: 'bundle-report.html'// 报告文件名
    }),
    new CompressionPlugin({
      // filename: '[path].gz[query]',// 压缩后的文件名
      algorithm: 'gzip',// 使用gzip算法进行压缩
      test: /\.(js|css|html|svg)$/,// 匹配文件名
      threshold: 0,
      // threshold: 10240,// 对超过10k的数据压缩
      minRatio: 0.8// 压缩率
    })
  ]
}