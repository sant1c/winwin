'use strict';

module.exports = function(app, io) {
   app.use('/winwin/dashboard/image/', require("../server/controller/dashboard/image/"));
   app.use('/winwin/sponsers/', require("../server/controller/sponser/"));  
}