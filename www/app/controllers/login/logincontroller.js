define(function() {
  var coremodule = angular.module('coremodule');
  coremodule.controller('logincontroller', ['$scope', function($scope, $ionicModal, $timeout, $http, $ionicPopup, $window) {
    // Form data for the login modal
    $scope.loginData = {};
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };
    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };
    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      var userDetails = $scope.loginData;
      if (userDetails.username == "" || userDetails.username == null || userDetails.password == "" || userDetails.password == null) {
        var myPopup = $ionicPopup.show({
          template: 'Both the feilds are mandetory',
          title: 'Information',
          subTitle: '',
          scope: $scope,
          buttons: [{
            text: 'Ok'
          }]
        });
        myPopup.then(function(res) {
          console.log('Tapped!', res);
        });
      } else {
        $http({
            method: 'POST',
            url: '/users/authentication/',
            headers: 'Content-Type : application/json;charset=UTF-8',
            data: userDetails
          })
          .success(function(data) {
            if (data == "validuser") {
              $scope.closeLogin();
            } else if (data == "invalidusers") {
              // Custom popup
              var myPopup = $ionicPopup.show({
                template: 'Invalid usernaame/password',
                title: 'Information',
                subTitle: '',
                scope: $scope,

                buttons: [{
                  text: 'Ok'
                }]
              });
              myPopup.then(function(res) {
                console.log('Tapped!', res);
              });
            } else {
              var myPopup = $ionicPopup.show({
                template: 'Some thing wennt wrong please try again',
                title: 'Information',
                subTitle: '',
                scope: $scope,
                buttons: [{
                  text: 'Ok'
                }]
              });
              myPopup.then(function(res) {
                console.log('Tapped!', res);
              });
            }
          })
          .error(function() {
            console.log("error");
          });
      };
    }
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