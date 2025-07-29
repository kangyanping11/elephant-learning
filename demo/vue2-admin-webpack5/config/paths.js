const path = require('path')

// 获取当前工作目录
// process.cwd() 返回 Node.js 进程的当前工作目录
const appDir = process.cwd()

const resolveApp = (relativePath) => {
  return path.resolve(appDir, relativePath)
}

module.exports = resolveApp
