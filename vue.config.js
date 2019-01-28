module.exports = {
  configureWebpack: {
  pages: {
    index: {
      // entry for the *public* page
      entry: 'src/main.js',
      // the source template
      template: 'index.html',
      // output as dist/index.html
      filename: 'indexy.html'
    },
    // an admin subpage 
    // when using the entry-only string format,
    // template is inferred to be 'public/subpage.html'
    // and falls back to 'public/index.html' if not found.
    // Output filename is inferred to be 'admin.html'.
    admin: 'src/loginPage/main.js'
  }}
}