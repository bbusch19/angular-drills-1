angular.module('routerApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'signupTmpl.html'
  })
  .state('details', {
    url: '/details',
    templateUrl: 'detailsTmpl.html',
    controller: 'controller',
    resolve: {
      getPokemon: function(svc) {
        console.log('hi');
        return svc.getPokemon();

      }
    }
  });

})
