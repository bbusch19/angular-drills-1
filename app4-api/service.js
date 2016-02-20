angular.module('apiApp').service('svc', function($q, $http) {

  var baseurl = 'http://pokeapi.co/api/v2/';

  this.getCharizard = function() {
    var defer = $q.defer();

    $http({
      method: 'GET',
      url: baseurl + 'pokemon/6/'
    }).then(function(response) {
        defer.resolve(response.data);
    })

    return defer.promise;
  }

})
