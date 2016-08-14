/*************************************************************************
Created
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   : dashboardFactory.js

description :  handles core functionalities of winwin app
***************************************************************************
date             auther                 Change Description  
*************************************************************************** */        
define(function() {
	var coremodule = angular.module('coremodule');
	coremodule.factory('dashFactory', function($http) {
			var dash = {};
			dash.getImages = function(url,data) {
				return $http.post(url, data);

			}
			return dash;
	});
});

/********--------
                 |
                 |
                  -------------              o
                               |            -|- 
                               |            / \
                                // ---------------********/

/* steps you buld will lead u t0o sucess  @anish*/