'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.form = {};
    $scope.todoList = [];
    $scope.completedTasks = [];
    $scope.addItem = function(listItem){
      if(listItem && $scope.todoList.indexOf(listItem)<0){
        $scope.todoList.push(listItem);
      }
    };

    $scope.removeItem = function(item){
      var toRemove = $scope.todoList.indexOf(item);
      $scope.todoList.splice(toRemove, 1);
      $scope.completedTasks.push(item);
    };
  });
