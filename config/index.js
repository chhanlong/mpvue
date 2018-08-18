
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    // 在小程序开发者工具中不需要自动打开浏览器
    autoOpenBrowser: false,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
