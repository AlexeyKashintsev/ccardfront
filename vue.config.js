const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  assetsDir: 'static',
  publicPath: 'lk',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page'
    },
    login: {
      entry: 'src/loginPage/main.js',
      template: 'public/login.html',
      filename: 'login.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Login Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      //chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    login: {
      entry: 'src/loginFailedPage/main.js',
      template: 'public/login-failed.html',
      filename: 'login-failed.html',
      title: 'Login Page'
    },
  },
  configureWebpack: (config) => {
    config.plugins.push(new VuetifyLoaderPlugin());
  }
}
