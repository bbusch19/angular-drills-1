angular.module('routerApp').controller('controller', function($scope, svc, getPokemon) {

$scope.pokemon = getPokemon;


})
