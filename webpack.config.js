const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin para generar el archivo HTML

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'; // Variable para saber si estamos en producción o desarrollo

  return {
    entry: './src/index.js', // Archivo de entrada
    output: { 
      filename: 'bundle.js', // Archivo de salida
      path: path.resolve(__dirname, 'dist'), // Carpeta de salida
      clean: true,
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.css$/, 
          use: ['style-loader', 'css-loader'], // Para cargar archivos CSS
        },
        {
          test: /\.html$/, // Para cargar archivos HTML
          use: ['html-loader'], // Para cargar imágenes en el archivo HTML
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Para manejar archivos de imagen
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Plantilla HTML
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'), // Para que el servidor de desarrollo sirva los archivos desde la carpeta dist
      },
      compress: true, // Para que los archivos se sirvan comprimidos
      port: 9000,
      open: true,
      historyApiFallback: { // Para que funcione el router en el servidor de desarrollo
        index: 'index.html'
      },
    },
  };
};
