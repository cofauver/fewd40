angular.module('myApp', [])
	.controller('appCtrl', function($scope){
		$scope.toDos = [];
		// $scope.toDos = ['Laundry', 'Send a birthday card', 'Go to dentist'];
		$scope.deleteTask = function(task){
			var indexToDelete = $scope.toDos.indexOf(task);
			$scope.toDos.splice(indexToDelete, 1);
		}
	});


