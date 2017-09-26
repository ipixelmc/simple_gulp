(  function  () {
  'use strict';
  /** 
   * @module app
   * Módulo principal de la aplicación, aquí se deben injectar todos los módulos que use la aplicación, de terceros o generados.
   */
  angular.module('app', ['ui.router','angular.filter','app.exception'])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        
        $stateProvider  
          .state('home', {
            url: '/',
            templateUrl: 'view/public/home.html'
          });
      }])
    .value('URL_SERVER', 'http://localhost:9090/')
    .run(['$state',
      function($state) {
        $state.go('/');
      }
    ]);


})();