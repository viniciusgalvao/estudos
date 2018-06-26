var app = angular.module('app', []);
app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {

  var refresh = function () {
    $http.get('/contactlist').success(function( response ) {
      $scope.contactlist  = response;
      $scope.contact      = "";
    });
  }

  refresh();

  $scope.clear = function () {
    $scope.contact = "";
  }

  $scope.addContact = function () {
    $http.post('/contactlist', $scope.contact).success(function (response) {
      refresh();
    });
  }

  $scope.updateContact = function () {
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {
      refresh();
    });
  }

  $scope.removeContact = function (id) {
    $http.delete('/contactlist/' + id).success(function (response) {
      refresh();
    });
  }

  $scope.editContact = function (id) {
    $http.get('/contactlist/' + id).success(function (response) {
      console.log(response);
      $scope.contact = response;
    });
  }

}]);
