angular.module('app').directive('appSelect', function() {
  return {
    scope: {
      listOptions: '=',
      model: '=',
      label: '@',
      nameSelect: '@',
      nameForm: '@',
      message: '@',
      requiredValue: '='
    },
    link: function(){
    },
    templateUrl: '../../view/directive/app-select.html',
    replace: true
  };
});