const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js",
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "main.js",
    publicPath: '/',
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js", '.jsx']
  },
  module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.(js|jsx)$/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['url-loader?limit=100000'] 
      }
    ],
 },
    plugins: [
        new HtmlWebpackPlugin({
                // Inserta los assets en el documento HTML
          inject: true,
                // Ubicación de tu HTML en el proyecto
          template: "./public/index.html",
                // Nombre y dirección del HTML que se creara al momento de ejecutar webpack
          filename: "./index.html"
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src", "assets/images"),
                to: "assets/images"
              },
              {
                from: path.resolve(__dirname, "src", "assets/icons"),
                to: "assets/icons"
              },
              {
                from: path.resolve(__dirname, "src", "assets/font"),
                to: "assets/font"
              }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ]
    },
    devServer: {
      historyApiFallback: true,
    }
}