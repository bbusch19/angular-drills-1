angular.module('apiApp').controller('mainCtrl', function($scope, svc) {

var promise = svc.getPokemon();

promise.then(function(dataFromReq) {
  $scope.pokemon = dataFromReq;
})


})
