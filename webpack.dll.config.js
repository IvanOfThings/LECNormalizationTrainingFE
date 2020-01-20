const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-router-dom'] //dependencias core del producto
  },
  optimization:{
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin() ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js', // Librerias exportads
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json') //Referencias a las librerias
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/modules.*']
    })
  ]
};
