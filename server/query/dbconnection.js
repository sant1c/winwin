/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  dbconnection.js

description :  database connection file
****************************************************************************
date      version       auther               Change Description  
***************************************************************************         
**************************************************************************/
var mysql      = require('mysql');
module.exports=databaseConnection;

function databaseConnection(){
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'winwin'
	});

	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    return;
	  }

	  console.log('connected as id ' + connection.threadId);
	});
	return connection;
}