angular.module('app3').controller('mainCtrl', function($scope, svc) {

  $scope.data = svc.getData();

})
