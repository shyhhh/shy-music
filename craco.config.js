const path = require('node:path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
