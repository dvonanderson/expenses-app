const path = require('path');
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/playground/redux-101.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/
      }, 
      {
        test: /\.s?css$/, 
        use:[
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
