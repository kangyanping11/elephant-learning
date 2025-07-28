// css抽离
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// css压缩
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
// 打包分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
    })
  ]
}