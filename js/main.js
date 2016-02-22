var codebook = angular.module("codebook",[]);

codebook.controller('codebookController', function($scope) {
  $scope.$on('$includeContentLoaded', function(event, target){
    console.log(event);
    console.log(target);
  });
  
  $scope.prettify = function() {
    $('.prettyprinted').removeClass('prettyprinted');
    prettyPrint();
  };
});
