const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  assetsDir: 'static',
  
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
  }
}
