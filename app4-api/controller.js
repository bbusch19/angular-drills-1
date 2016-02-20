angular.module('apiApp').controller('mainCtrl', function($scope, svc) {

  var promise = svc.getCharizard();

  promise.then(function(infoFromApi) {
    $scope.pokemon = infoFromApi;
  })

})
