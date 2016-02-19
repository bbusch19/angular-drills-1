angular.module('myApp').controller('mainCtrl', function($scope, svc) {

  $scope.data = svc.getData();

    $scope.filterObj = {
      email: ".uk",
      phone: "1"
    }

})
