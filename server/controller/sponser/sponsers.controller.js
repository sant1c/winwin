/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  sponsers.controller.js

description :  handle the image section of dashboard
****************************************************************************
date      version       auther               Change Description  
***************************************************************************         
**************************************************************************/
const dashquery = require("../../query/sponsers.query");

exports.createSponsers = function(req, res) {
	console.log(req.body.sponsor);
	dashquery.createSponsers({
		wssponsorname: req.body.sponsor,
		wpid : req.body.prizeid,
		wgid : req.body.gameid
	}).then(function(status) {
		console.log(status);
	});
}

