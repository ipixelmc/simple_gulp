angular.module('app')
  .directive('appInput', function() {
    return {
      scope:{
        model: '=',
        regex: '@',
        nameForm: '@',
        label: '@',
        example: '@',
        message: '@',
        regexMessage: '@',
        nameInput: '@',
        placeholder: '@',
        requiredValue: '='
      },
      link: function(scope){                                             
        scope.validRegex = (scope.regex !== '' && typeof scope.regex !== 'undefined');
                
        scope.validationDiv = function(){
          if(scope.$parent[scope.nameForm][scope.nameInput].$invalid && !scope.$parent[scope.nameForm][scope.nameInput].$pristine ){
            console.log('validationDiv: ' + scope.$parent[scope.nameForm][scope.nameInput].$viewValue);
            return 'has-danger';
          }
        };
        scope.validationInput = function(){
          if(scope.$parent[scope.nameForm][scope.nameInput].$invalid && !scope.$parent[scope.nameForm][scope.nameInput].$pristine ){
            return 'form-control-danger';
          }
        };
        scope.validation = function(){
          if(scope.$parent[scope.nameForm][scope.nameInput].$invalid && !scope.$parent[scope.nameForm][scope.nameInput].$pristine &&
                           scope.$parent[scope.nameForm][scope.nameInput].$viewValue == ''){
            return true;
          }else{
            return false;
          }
        };   
        scope.validationRegex = function(){
          if(scope.$parent[scope.nameForm][scope.nameInput].$invalid && !scope.$parent[scope.nameForm][scope.nameInput].$pristine &&
                       scope.$parent[scope.nameForm][scope.nameInput].$viewValue != ''){
            return true;
          }else{
            
            return false;
          }
        };     
      },
      templateUrl: '../../view/directive/app-input.html',
      replace: true
    };
  });