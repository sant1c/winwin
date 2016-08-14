/*************************************************************************
Created nikhil :::::::::            
                   ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  query.js

description :  displaying images and inserting images
***************************************************************************
date      version       auther               Change Description  
***************************************************************************         
**************************************************************************/
const db_connection = require("./dbconnection");

/*
returns the promise for thr query of the dashboard image section
@nikhil 
*/
exports.getDashImages = function(selection) {
        /*
         query for images of sponsors to be displayed 
         in dashboard section
         @nikhil
        */
        if (selection === "sponsors") {
            return new Promise(function(resolve, reject) {
                db_connection().query('SELECT * FROM wsponsors', function(err, rows) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
            })

        }
        /*
         query for images of game to be displayed 
         in dashboard section
         @nikhil
        */
        else {
            return new Promise(function(resolve, reject) {
                    db_connection().query('SELECT * FROM wgame', function(err, rows) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                        }

                    });
                    /* 
                      ends the connection after every thing is done!!!!
                      @nikhil
                    */
                    db_connection().end();
                });
            }
        }