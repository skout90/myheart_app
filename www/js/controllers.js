angular.module('starter.controllers', ['starter.services'])

.controller('PostsCtrl', function ($scope, Posts) {
    $scope.posts = Posts.all();
})

.controller('PostDetailCtrl', function ($scope, $stateParams, Posts) {
    $scope.post = Posts.get($stateParams.postId);
})

.controller('ScheduleCtrl', function ($scope, Schedules) {
	Schedules.all($scope);
})