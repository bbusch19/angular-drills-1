angular.module('routerApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signupTmpl.html',
    controller: 'signupCtrl'
  })
  .state('details', {
    url: '/details',
    templateUrl: 'views/detailsTmpl.html',
    controller: 'detailsCtrl',
    resolve: {
      getThatPokemon: function(svc) {
        return svc.getPokemon();
      }
    }
  })
})
