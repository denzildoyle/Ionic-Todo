angular.module('starter.controllers', [])

.controller('TodosCtrl', function($scope, TodosService) {
	$scope.todos = TodosService.todos;
})

// .controller('TodoCtrl', function($scope) {
// 	$scope.todo = {title: "Do laundry", done: false};
// });

.controller('TodoCtrl', function($scope, todo) {
  $scope.todo = todo;
});
