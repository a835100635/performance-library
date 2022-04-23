const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'build.js'
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
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets:
							['@babel/preset-env']
						}
					}
				],
				exclude: '/node_modules/'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html'
		})
	],
	performance: {
		hints: false
	}
}