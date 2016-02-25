angular.module('routerApp').controller('detailsCtrl', function($scope, getThatPokemon) {
  $scope.pokemon = getThatPokemon;
})
