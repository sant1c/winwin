'use strict';

const fs = require('fs');
const http = require('http');
const express = require('express');
// const bodyParser = require('body-parser');

// const url = require("url");
// const queryString = require("querystring");
let app = express();
// let port = 8082;

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let config = require('./config/config')[env];
require('./config/express')(app, config);

const httpServer = http.createServer(app);

if (!module.parent) {
	httpServer.listen(config.port, function() {
		//Callback triggered when server is successfully listening. Hurray!
		console.log("Server listening on: http://localhost:%s", config.port);
	});


	//  server.listen(config.port, config.ip);
}



let io = require('socket.io')(httpServer);

require('./routes/routes')(app, io);


module.exports = app;