(  function  () {
  'use strict';
  
  angular.
    module('app.exception')
    .factory('exceptionHandler', exception);


  exception.$inject = ['$rootScope'];

  /**
 * @param  {rootScop}
 * @return {factory} Factoria que contiene el método de propagación de error al controlador
 */
  function exception($rootScope) {
    var service = {
      catcher: catcher
    };
    return service;


    function catcher(message) {
      console.error(message);
      $rootScope.$emit('exceptionHandler', message);
    }
  }

})();