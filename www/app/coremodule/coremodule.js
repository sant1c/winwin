/*************************************************************************
Created
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   : coremodule.js

description :  handles core functionalities of winwin app
***************************************************************************
date             auther                 Change Description  
***************************************************************************         

**************************************************************************/

define(['app/runners/logrunner.js'], function(logrunner) {
  /*
  core module defination and initializaiton
 @anish
*/
  var coremodule = angular.module('coremodule', ['ionic', 'ionic.contrib.ui.hscrollcards']);
  /*
   log maintained for coremoduke
   @anish
  */
  coremodule.run(logrunner);


  coremodule.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      /* Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
       for form inputs)
       @anish
      */
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        /* org.apache.cordova.statusbar required
        @anish
        */
        StatusBar.styleDefault();
      }
    });
  })

  /*
  route configuration
  @anish
  */
  coremodule.config(function($stateProvider, $urlRouterProvider, $httpProvider) {


    $httpProvider.interceptors.push(function() {
      return {
        request: function(req) {
          console.log("hello");
          if (req.url.charAt(0) == '/') {
            req.url = 'http://192.168.0.123:8082' + req.url;
          }
          return req;
        }
      }
    })



    $stateProvider
      .state('app', {
        url: '/app',
        templateUrl: 'templates/menu.html',
        controller: 'dashboardcontroller'
      })
      .state('app.dashboard', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardcontroller'
          }
        }
      })
      .state('app.campaigns', {
        url: '/campaigns',
        views: {
          'menuContent': {
            templateUrl: 'templates/campaigns.html',
            controller: 'campaignscontroller'
          }
        }
      })

    /* 
    if none of the above states are matched, use this as the fallback
    @anish
    */
    $urlRouterProvider.otherwise('/app/main');
  });

  /*
 including refrece of all required controilers and bodotstrapping thr defoined and 
 initialized app
*/
  require(['app/refrences.js'], function(refrences) {
    require(refrences, function() {

      angular.bootstrap(document, ['coremodule']);

    })
  })

})


/********--------
                 |
                 |
                  -------------              o
                               |            -|- 
                               |            / \
                                // ---------------********/

/* steps you buld will lead u t0o sucess  @anish*/