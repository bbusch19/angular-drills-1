angular.module('apiApp').service('svc', function($q, $http) {
var baseUrl = "http://pokeapi.co/api/v2/";

  this.getPokemon = function() {
    var defer = $q.defer();

    $http({
      method: 'GET',
      url: baseUrl + 'pokemon/1/'
    }).then(function(response) {
        defer.resolve(response.data)
    })

    return defer.promise;
  }
})
