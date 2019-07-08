const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
console.log(__dirname)
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/content/' : '/',
//   publicPath: '/content/',
  devServer: {
    before: (app) => {
    },
    // proxy: []
  },
  css: {
    sourceMap: true
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        oneOf: [
          {
            test: /node_modules(\/|\\)(quill|test)[\s\S]*\.svg$/,
            use: 'html-loader'
          },
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        include: [
          /src/,
          /\/node_modules\/quill/,
          /\\node_modules\\quill/
        ],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env', {
                modules: 'commonjs',
                useBuiltIns: false,
                debug: false
              }
            ]
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
          ]
        }
      }
      ]
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module.rules.delete('js')
    config.resolve.alias.set('assets', path.resolve(__dirname, 'src/assets/'))
                        .set('views', path.resolve(__dirname, 'src/views/'))
                        .set('components', path.resolve(__dirname, 'src/components/'))
  }
}
