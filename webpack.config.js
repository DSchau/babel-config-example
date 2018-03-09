const path = require('path');

module.exports = function webpackConfig() {
  return {
    mode: 'production',
    entry: path.join(__dirname, 'src/index'),
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader']
        }
      ]
    }
  };
}
