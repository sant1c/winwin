/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  index.js

description :  sponsers index
****************************************************************************
date      version       auther               Change Description  
***************************************************************************         
**************************************************************************/
'use strict';

let io;
let express = require('express');
let router = express.Router();
let cors = require('cors');

router.use(cors());
let sponsersController = require('./sponsers.controller');

router.post('/createSponsers', sponsersController.createSponsers);

module.exports = router;