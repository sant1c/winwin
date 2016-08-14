/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  sponser.query.js

description :  handles sponsers query 
***************************************************************************
date      version       auther               Change Description  
***************************************************************************         
**************************************************************************/
const db_connection = require("./dbconnection");

/*
returns the promise for thr query to create a user
@nikhil 
*/
exports.createSponsers = function(sponserDet) {
  console.log(sponserDet);
  return new Promise(function(resolve, reject) {
    db_connection().query('INSERT INTO wsponsors SET ?', sponserDet, function(error) {
      console.log(error);
      if (error) {
        reject(error.message);
      } else {
        resolve('success');
      }
    });
    /*ends the connection after every thing is done!!!!
     @nikhil
    */
    db_connection().end();
  });

} 