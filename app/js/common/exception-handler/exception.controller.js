(  function  () {
  'use strict';
  
  angular.
    module('app.exception')
    .controller('ExceptionController', exceptionController);

  /**
     * Se inyectan las dependencias que utiliza el controlador
     * @type {Array}
     */
  exceptionController.$inject = ['$rootScope','toastr'];

  /**
 * Controlador que lanza los toast dependiendo el código de error
 * @param rootScope scope donde se escucharán las peticiones fallidas
 * @param toastr | módulo que muestra los toast en la apliación
 *
 */
  function exceptionController($rootScope,toastr) {
    
    $rootScope.$on('exceptionHandler', function (event, data) {
      switch(data.status){
      case -1: 
        toastr.error('El servidor no se encuentra disponible en este momento. Intenta más tarde.', 'Error');
        break;
      case 401: 
        toastr.warning('No tienes permisos para acceder a esta información');
        break;
      case 403:
        toastr.warning('No tienes autorización para acceder.', 'Alerta');
        break; 
      case 404:
        toastr.warning('Recurso no encontrado', 'Alerta');
        break;
      case 406:
        toastr.error('La información enviada fue incorrecta. Intenta más tarde', 'Información inválida');
        break;
      case 500:
        toastr.error('Ha ocurrido un error en el servidor. Intenta más tarde.', 'Error');
        break;
      }
    });
  }

})();