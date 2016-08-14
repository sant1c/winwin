/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  index.js

description :  dashboard index
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
let imageController = require('./image.controller');

router.post('/getImages', imageController.getImages);

module.exports = router;