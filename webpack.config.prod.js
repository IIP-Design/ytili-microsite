const webpack = require( 'webpack' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  entry: {
    main: './src/index.js',
    loader: './src/module-loader.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '*', '.js', '.jsx'
    ]
  },
  output: {
    library: ['YTILI'],
    libraryTarget: 'umd',

    path: __dirname,
    publicPath: '/',
    filename: 'dist/ytili-[name].min.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin( {
        uglifyOptions: {
          warnings: false,
          mangle: true,
          keep_fnames: false
        }
      } )
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'dist/ytili.css'
    } )
  ]
};
