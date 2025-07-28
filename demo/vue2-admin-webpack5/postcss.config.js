module.exports = {
  plugins: [
    // 自动添加浏览器前缀,比如-webkit- -moz- -ms- -o-,css兼容性浏览器处理
    require('autoprefixer')()
  ]
}