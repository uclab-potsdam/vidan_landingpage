module.exports = {
  publicPath: './',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}
