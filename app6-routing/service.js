angular.module('routerApp').service('svc', function($q, $http) {

this.getPokemon = function() {
  var defer = $q.defer();

  return $http({
    method: 'GET',
    url: 'http://pokeapi.co/api/v2/pokemon/1'
  })

  }

})
