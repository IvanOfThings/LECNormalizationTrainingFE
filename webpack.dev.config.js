const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); -> En desarrollo podemos usar style-loader para que lo inyecte
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: 'http://localhost:9030/',
    chunkFilename: 'js/[id].[chunkhash].js' //Genera nuevos nombres a partir del has así si el fichero cambia cambiará el nombre
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9030,
    hot: true,
    open: true
  }
  ,
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ['babel-loader'], 
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader','css-loader'
        ] 
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'file-loader', //El orden de ejecución es desde el último al primero
          options: {
            outputPath: 'assets/'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
};
