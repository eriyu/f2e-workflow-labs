var webpack = require('webpack');
module.exports = {
  entry: {
    bundle: './app/app.module.js'
  },
  output: {
    filename: '[name].js'
  },
  module:{
  	loaders:[
  		{ test: /\.css$/, loader: "style!css" },
  		// { test: /\.(png|jpg|jpeg|gif)$/, loader: "url?limit=10000" }
  		{ test: /\.(png|jpg|jpeg|gif)$/, loader: "file?name=img/[name].[ext]?[hash]" }
  	]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
