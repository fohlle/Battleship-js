
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  mode:"development",
  devServer: {
    static: './dist',
  },
  entry: {
    index:"./src/index.js",
    ship:"./src/ship.js",
    gameboard: "./src/gameboard.js",
    player:"./src/player.js",
    dom: "./src/dom.js",
    game: "./src/game.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};