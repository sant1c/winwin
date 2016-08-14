'use strict';

let path = require('path');
let rootPath = path.normalize(__dirname + '/../');
let publicPath = rootPath + 'public';

module.exports = {
	development: {
		rootPath: rootPath,
		publicPath: publicPath,
		// db: 'mongodb://localhost/smarterQuote',
		port: process.env.PORT || 8082,
		ip: 'localhost'
	},
	production: {
		rootPath: rootPath,
		publicPath: publicPath,
		db:'',
		port: process.env.PORT || 80,
		ip: ''
	}
}