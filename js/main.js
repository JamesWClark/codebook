var codebook = angular.module("codebook",[]);

codebook.controller('codebookController', function($scope) {
  
  $scope.langs = ['c','cpp','csharp','java','javascript','php','python','r','ruby','scala','swift'];
  $scope.topics = ['variables'];
  
  angular.element(document).ready(function() {
    $('#code-container').attr('ng-include', '/code/java/variables/long.html');
  });
  
  $scope.$on('$includeContentLoaded', function(event, target){
    console.log(event);
    console.log(target);
  });
  
  $scope.prettify = function() {
    $('.prettyprinted').removeClass('prettyprinted');
    prettyPrint();
  };
  
});
