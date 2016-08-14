/*************************************************************************
Created
Auther : anish :::::::::            
                    ::::::::::
                         ::::::::::::Steps you build will lead u to sucess 
**************************************************************************
file name   :  campaignscontroller.js

description :  injects slider , horizontal scroll and news feedto the 
               dashboard controller scope
***************************************************************************
date             auther                 Change Description  
***************************************************************************         

**************************************************************************/

define(function() {
  var coremodule = angular.module('coremodule');
  coremodule.controller('campaignscontroller', ['$scope', '$ionicSlideBoxDelegate', '$window', '$ionicPopup', '$timeout', function($scope, $ionicSlideBoxDelegate, $window, $ionicPopup, $timeout) {

    $scope.items = [];

    for (var i = 0; i <= 5; i++) {
      var tmp = [{
        desc: 'The Ramones',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSulfJcjBhxxW2NBBn9KbE3B4BSeh0R7mQ38wUi_zpJlQrMoDWh_qFcMelE_tjtAERUPTc'
      }, {
        desc: 'The Beatles',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGpH07f9zeucoOs_stZyIFtBncU-Z8TDYmJgoFnlnxYmXjJEaitmxZNDkNvYnCzwWTySM'
      }, {
        desc: 'Pink Floyd',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-FbU5dD_Wz472srRIvoZAhyGTEytx9HWGusbhYgSc2h0N6AqqRrDwzApmyxZoIlyxDcU'
      }, {
        desc: 'The Rolling Stones',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6uwPPBnHfAAUcSzxr3iq9ou1CZ4f_Zc2O76i5A4IyoymIVwjOMXwUFTGSrVGcdGT9vQY'
      }, {
        desc: 'The Jimi Hendrix Experience',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA3jz0uhVypONAKWUve80Q6HASvuvZiohl4Sru5ZihkAsjWiaGjocfxd0aC3H7EeFk5-I'
      }, {
        desc: 'Van Halen',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIslVN9cJJ6YuV0y7JihAyA63JDhXGhkCVxHIRE-IoaF-rpefjIXO5osA24QvN9iCptC8'
      }];
      $scope.items = $scope.items.concat(tmp);
    };
    //horizental scroll end  

    $scope.slideVisible = function(index) {
      if (index < $ionicSlideBoxDelegate.currentIndex() - 1 || index > $ionicSlideBoxDelegate.currentIndex() + 1) {
        return false;
      }

      return true;
    }

    $scope.navigate = function() {
      $scope.data = {}

      $scope.gameNavigate = function() {
        myPopup.close();
        console.log(location);
        location.hash = "/#/app/game";
        $window.location.href = '/#/app/game';
      }

      var templatecola = '<ion-pane><hscroller><hcard ng-click="gameNavigate()" ng-repeat="item in items" index="{{$index}}" desc="{{item.desc}}" image="{{item.image}}"></hcard></hscroller><ion-slide-box><ion-slide ng-repeat="image in images"><div class="container" ng-if="slideVisible($index)" class="scrollCanvas"><ion-scroll class="scrollCanvas" zooming="true" min-zoom="1" direction="xy" locked="false"><div class="image" style="background-image: url( {{image}} )"></div></ion-scroll></div><div>&nbsp;</div></ion-slide></ion-slide-box></ion-pane>';


      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: templatecola,
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        cssClass: 'landing',
        scope: $scope,
        buttons: [{
          text: 'Cancel'
        }, {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }, ]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
    }
    $scope.images = [
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSeuNVzlDcFunjMxXa3_ui65_fJgwvT8Eq0M5GluaIbl5DJYLOaCI0McDw"
    ]



  }]);
});