angular.module('app')
  .directive('appTextArea', function() {
    return {
      scope:{
        model: '=',
        maxLength: '@',
        nameForm: '@',
        label: '@',
        message: '@',
        nameArea: '@',
        placeholder: '@',
        requiredValue: '='
      },
      link: function(scope){                                                             
        scope.validationDiv = function(){
          if(scope.$parent[scope.nameForm][scope.nameArea].$invalid && !scope.$parent[scope.nameForm][scope.nameArea].$pristine ){
            return 'has-danger';
          }
        };
        scope.validationInput = function(){
          if(scope.$parent[scope.nameForm][scope.nameArea].$invalid && !scope.$parent[scope.nameForm][scope.nameArea].$pristine ){
            return 'form-control-danger';
          }
        };
        scope.validation = function(){
          if(scope.$parent[scope.nameForm][scope.nameArea].$invalid && !scope.$parent[scope.nameForm][scope.nameArea].$pristine &&
                           scope.$parent[scope.nameForm][scope.nameArea].$viewValue == ''){
            return true;
          }else{
            return false;
          }
        };   
            
      },
      templateUrl: '../../view/directive/app-textarea.html',
      replace: true
    };
  });