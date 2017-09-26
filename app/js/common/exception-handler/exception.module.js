(  function  () {
  'use strict';
  
  /**
  *Exception to js - DEVELOP MODE
  **/
  angular.
    module('app.exception', ['toastr'])
    .config(exceptionConfig);

  exceptionConfig.$inject = ['$provide','$httpProvider'];

  function exceptionConfig ($provide,$httpProvider){
    /**
    * Interceptor de peticiones http para manejo de errores
    * @param  {$q} promesa de petición
    * @param  {exceptionHandler} factoria para el manejo de errores
    */
    $httpProvider.interceptors.push(['$q','exceptionHandler',function($q,exceptionHandler) {
      return {
        request: function(config){
          return config;
        },
        response: function(res){
          return res;
        },
        responseError: function(rejection) {
          if(rejection.status != 200) {
            exceptionHandler.catcher(rejection);
          }
          return $q.reject(rejection);
        }
      };
    }]);
  }

})();