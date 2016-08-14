/*******************************************************************************************
Created                                       development   :   info-ative
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
*********************************************************************************************
file name   :  dashboardcontroller.js

description :  injects slider , horizontal scroll and news feedto the 
               dashboard controller scope
*********************************************************************************************
date      version       auther               Change Description  
*********************************************************************************************         
11/8/016   1.0.1        anish            intended the code and arraged 
                                         the coding pattern    
11/8/016   1.0.2        anish            coded the static redring to dynamic 
                                         rendring retrieving fromthe database
12/8/016   1.0.3        anish            factory implementation for http over 
                                         request                                                                                                
*********************************************************************************************/
define(["app/settings/dashboard/dashsettings.js"], function(dashSettings) {
  var coremodule = angular.module('coremodule');
  coremodule.controller('dashboardcontroller', ['$scope', '$ionicSlideBoxDelegate', '$window', '$http', 'dashFactory', function($scope, $ionicSlideBoxDelegate, $window, $http, dashFactory) {
    /*horizental scroll start
        @anish
        */
    /*
    post request to the server fro front end loading
    @anish
    */
    dashFactory.getImages(dashSettings.routes.upperSlidersection.url, dashSettings.routes.upperSlidersection.data)
      .success(function(imageResponse) {
        var resData = imageResponse
        var tmp = [];
        for (var i = 0; i < resData.length; i++) {
          tmp.push({
            desc: resData[i]["wsimgdesc"],
            image: resData[i]["wsimages"]
          });
        }
        $scope.items = [];

        $scope.items = $scope.items.concat(tmp);
      }).error(function(imageError) {
        console.log("somthing thing went wrong " + " " + imageError);

      });
    /*horizental scroll end
        @anish
        */

    /* 
    slider starts
    @anish
    */
    dashFactory.getImages(dashSettings.routes.upperSlidersection.url, dashSettings.routes.upperSlidersection.data)
      .success(function(imageResponse) {
      var resData = imageResponse;
      var tmp = [];
      for (var i = 0; i < resData.length; i++) {
        tmp.push(
          resData[i]["wsimages"]
        );
      }
      $scope.images = tmp;
      $scope.slideVisible = function(index) {
        if (index < $ionicSlideBoxDelegate.currentIndex() - 1 || index > $ionicSlideBoxDelegate.currentIndex() + 1) {
          return false;
        }
        return true;
      }
      /*
        function navigate injected to the scope navigates to campaigns page  
         @anish
        */       
      $scope.navigate = function() {
        location.hash = "/#/app/campaigns";
        $window.location.href = '/#/app/campaigns';
      }
    }).error(function(imageError) {
        console.log("somthing thing went wrong " + " " + imageError);
      });

    /*
    slider ends
    @anish
    */
    /*
    news feeds forthe dashboard
    @anish
    */
    $scope.playlists = [{
      title: 'Reggae',
      id: 1
    }];
  }]);
});

/********--------
                 |
                 |
                  -------------              o
                               |            -|- 
                               |            / \
                                // ---------------********/

/* steps you buld will lead u t0o sucess  @anish*/