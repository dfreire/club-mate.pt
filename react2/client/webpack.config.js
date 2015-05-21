var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
	entry: ['webpack/hot/dev-server', './app/main.jsx'],
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel']
		}]
	}
};

module.exports = config;
