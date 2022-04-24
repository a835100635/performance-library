const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: {
		SDK: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'build.js',
    libraryTarget: 'umd'
	},
	devtool: 'eval-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist/index.html'),
		},
		port: 8000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets:
							['@babel/preset-env']
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: 'head',
			template: './public/index.html',
			scriptLoading: 'blocking'
		}),
		new UglifyJsPlugin({
			test: /\.js$/,
			exclude: /node_modules/
		})
	],
	performance: {
		hints: false
	},
	resolve: {
    extensions: ['.js'],
  },
}