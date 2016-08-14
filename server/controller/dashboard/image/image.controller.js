/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  image.controller.js

description :  handle the image section of dashboard
****************************************************************************
date      version       auther               Change Description  
***************************************************************************         
**************************************************************************/
const dashquery = require("../../../query/dashboard.query");

exports.getImages = function(req, res) {
	dashquery.getDashImages(req.body.selection).then(function(rows) {

		res.send(rows);

	});
}