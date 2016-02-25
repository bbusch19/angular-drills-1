angular.module('routerApp').service('svc', function($http, $q) {

  this.getPokemon = function() {
    var defer = $q.defer();

    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/1'
    }).then(function(response) {
      defer.resolve(response.data);
    })

    return defer.promise;
  }

})
