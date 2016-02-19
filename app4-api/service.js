angular.module('apiApp').service('swSvc', function($q, $http) {

  var baseUrl = "http://swapi.co/api/";

  this.getStarships = function() {
    var later = $q.defer();
    //Promise1

    //Promise2
    $http({
      method: 'GET',
      url: baseUrl + 'starships/'
    }).then(function(response) {
        later.resolve(response.data)
    }, function(err) {
      later.reject(err);
    })


    return later.promise;
  }

})
