const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: 'app.bunfle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: 'development'
}