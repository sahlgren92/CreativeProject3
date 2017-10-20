angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('task', taskDirective);
  
function mainCtrl ($scope) {
  $scope.criticalTasks = [];
  $scope.highTasks = [];
  $scope.mediumTasks = [];
  $scope.lowTasks = [];
  $scope.unimportantTasks = [];
  $scope.priorities = ["Critical", "High", "Medium", "Low", "Unimportant"];
  $scope.addCriticalTask = function (task) {
    $scope.criticalTasks.push({
      name: task.name,
      priority: task.priority
    });
    task.name = '';
    task.priority = 'Critical';
  };
  $scope.addHighTask = function (task) {
    $scope.highTasks.push({
      name: task.name,
      priority: task.priority
    });
    task.name = '';
    task.priority = 'High';
  };
  $scope.addMediumTask = function (task) {
    $scope.mediumTasks.push({
      name: task.name,
      priority: task.priority
    });
    task.name = '';
    task.priority = 'Medium';
  };
  $scope.addLowTask = function (task) {
    $scope.lowTasks.push({
      name: task.name,
      priority: task.priority
    });
    task.name = '';
    task.priority = 'Low';
  };
  $scope.addUnimportantTask = function (task) {
    $scope.unimportantTasks.push({
      name: task.name,
      priority: task.priority
    });
    task.name = '';
    task.priority = 'Unimportant';
  };
}

function taskDirective () {
  return {
    template: (
      '<div class="Tasks">' +
        '<h3>{{task.name}} is <strong>{{task.priority}}</strong> priority</h3>' +
      '</div>'
    )
  };

}