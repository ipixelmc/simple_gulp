(function() {
  'use strict';
  /**
   * @Controller MenuController
   * Controlador para el menú vertical izquierdo de la aplicación
   * -Vista /view/common/menu.html
   */
  angular.module('app')
    .controller('MenuController', catalogController);
  catalogController.$inject = ['$timeout'];
  function catalogController($timeout) {
    /*eslint-disable no-unused-vars*/
    $timeout(function(){
      $.app.menu.init();
    });
  /*eslint-enable no-unused-vars*/
  }
})();