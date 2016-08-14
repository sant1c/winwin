'use strict';

let express = require('express');
let bodyParser = require('body-parser');

module.exports = function(app, config) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    app.use(express.static(config.rootPath + 'public'));
    app.set('views', config.rootPath + 'public');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
}